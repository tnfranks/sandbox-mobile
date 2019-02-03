import React, { Component } from 'react'
import '@babel/polyfill'
import { GoogleMap, LoadScript, Marker } from 'react-google-maps-api'
import axios from 'axios'

import { Main } from '../styles/Main'
import Location from './Location'
import SearchInput from '../UI/SearchInput'


const createBounds = (locations) => {
    let resultBounds = {
        north: 0,
        south: 0,
        east: 0,
        west: 0
    }

    const latLngArray = locations.reduce((orig, loc) => [orig[0].concat(loc.latitude), orig[1].concat(loc.longitude)], [[], []])

    resultBounds = {
        north: Math.max(...latLngArray[0]),
        south: Math.min(...latLngArray[0]),
        east: Math.max(...latLngArray[1]),
        west: Math.min(...latLngArray[1])
    }

    return resultBounds
}

class AppContainerClass extends Component {
    state = {
        search: '20132',
        loading: false,
        locations: [],
        bounds: {},
        searchCoords: {
            lat: 0,
            lng: 0
        }
    }

    onSearchSubmit = (searchString) => {
        this.setState({
            loading: true,
            search: searchString
        }, () => {
            axios.get(`http://moonmen-server.herokuapp.com/pgsearch/${this.state.search}?radius=10`)
                .then(data => {
                    const calculatedBounds = createBounds(data.data.result.data)
                    return {
                        searchCoords: data.data.result.searchCoords,
                        locations: data.data.result.data,
                        bounds: calculatedBounds
                    }
                })
                .then(obj => this.setState({
                    loading: false,
                    searchCoords: obj.searchCoords,
                    locations: obj.locations,
                    bounds: obj.bounds
                }))
        })
    }

    render() {
        let items
        let map
        console.log(this.state)
        this.state.loading ? items = (<p>Loading...</p>) : items = (<ul>{this.state.locations.map(i => <Location key={i.location_id} locationData={i} />)}</ul>)
        this.state.loading ? map = (<p>Loading...</p>) : map = (<MapComponent locationData={this.state.locations} bounds={this.state.bounds} />)
        return (
            <Main>
                <div style={{ padding: '.5rem', height: '100%', backgroundColor: '#242f3e' }}>
                    <SearchInput onSearchSubmit={this.onSearchSubmit} />
                </div>
                {map}
                <div style={{ height: '100%', backgroundColor: '#242f3e', color: 'white', overflow: 'auto' }}>
                    {items}
                    <div style={{ backgroundColor: 'steelblue', color: 'white' }}>Footer</div>
                </div>
            </Main>
        )
    }
}

const MapComponent = (props) => {

    const mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        center: { lat: 39.197, lng: -77.9 },
        zoom: 8
    }

    const markers = props.locationData.map(location => {
        return (
            <Marker
                key={location.location_id}
                position={{ lat: location.latitude, lng: location.longitude }}
                // icon={newIcon}
                // onClick={mouser}
            />
        )
    })

    return (
        <LoadScript
            id="script-loader"
            googleMapsApiKey={'AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY'}
            language={"en"}
            region={"EN"}
            version={"weekly"}
            libraries={[]}
            onLoad={() => console.log("script loaded")}
            loadingElement={<div>Loading...</div>}
        >
            <GoogleMap
                id="basic-map-example"
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                options={mapOptions}
                onLoad={Object.keys(props.bounds).length > 0 ? (map) => map.fitBounds(props.bounds) : (map) => console.log('no bounds')}
            >
                {markers}
            </GoogleMap>
        </LoadScript>
    )
}

export default AppContainerClass