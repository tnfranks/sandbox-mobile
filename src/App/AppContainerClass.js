import React, { Component } from 'react'
import '@babel/polyfill'
import axios from 'axios'

import MapComponent from '../Map/MapComponent'
import { MapButton, Main, ListContainer, List } from '../styles/Main'
import Location from './Location'
import LocationDetail from './LocationDetail'
import Search from '../UI/Search'
import Footer from './Footer'


class AppContainerClass extends Component {
    state = {
        search: '20132',
        loading: false,
        locations: [],
        bounds: {},
        searchCoords: {
            lat: 0,
            lng: 0
        },
        showMap: false,
        showLocation: false,
        showLocationId: '',
        locationData: {}
    }

    onToggleMap = (e) => {
        this.setState((prevState) => ({
            showLocation: false,
            showLocationId: '',
            showMap: !prevState.showMap
        }))
    }

    onShowLocation = ({ id, name, lat, lng}) => {
        this.setState({
            showLocation: true,
            showLocationId: id,
            locationData: {}
        }, () => {
            const cleansedName = name.includes('/') ? name.slice(0, name.indexOf('/')) : name
            axios.get(`https://moonmen-server.herokuapp.com/place/${cleansedName}/${lat};${lng}`)
                .then(data => {
                    this.setState({
                        locationData: data.data
                    })
                })
        })
    }

    onCloseLocation = (e) => {
        e.preventDefault()
        this.setState({
            showLocation: false,
            showLocationId: ''
        })
    }

    onSearchSubmit = (searchString) => {
        this.setState({
            loading: true,
            search: searchString,
            showLocation: false,
            showLocationId: ''
        }, () => {
            axios.get(`https://moonmen-server.herokuapp.com/pgsearch/${this.state.search}?radius=10`)
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
        const items = this.state.loading
            ? (<p>Loading...</p>)
            : this.state.locations.map(i => <Location key={i.location_id} locationData={i} showLocationDetail={this.onShowLocation} />)

        const map = this.state.loading
            ? (<p>Loading...</p>)
            : (<MapComponent locationData={this.state.locations} bounds={this.state.bounds} />)

        return (
            <Main>
                <Search onSearchSubmit={this.onSearchSubmit} />
                <div className='map-button'>
                    <MapButton type='button' value={this.state.showMap} onClick={this.onToggleMap}>{this.state.showMap ? 'LIST' : 'MAP'}</MapButton>
                </div>
                {this.state.showMap && !this.state.showLocation && map}
                {!this.state.showMap && (
                    <>
                        <ListContainer>
                            <List>{items}</List>
                            <Footer />
                        </ListContainer>
                        <LocationDetail show={this.state.showLocation} onClose={this.onCloseLocation} location={this.state.locationData} />
                    </>
                )}
            </Main>
        )
    }
}

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

export default AppContainerClass