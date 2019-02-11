import React, { Component } from 'react'
import '@babel/polyfill'
import axios from 'axios'

import MapComponent from '../Map/MapComponent'
import { MapButton, Main, ListContainer, List } from '../styles/Main'
import Location from './Location'
import Search from '../UI/Search'


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
        showMap: false
    }

    onToggleMap = (e) => {
        this.setState((prevState) => ({
            showMap: !prevState.showMap
        }))
    }

    onSearchSubmit = (searchString) => {
        this.setState({
            loading: true,
            search: searchString
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
        const items = this.state.loading ? (<p>Loading...</p>) : this.state.locations.map(i => <Location key={i.location_id} locationData={i} />)
        const map = this.state.loading ? (<p>Loading...</p>) : (<MapComponent locationData={this.state.locations} bounds={this.state.bounds} />)
        const container = this.state.showMap
            ? map
            : (
                <ListContainer>
                    <List>{items}</List>
                    <footer style={{ backgroundColor: 'steelblue', color: 'white' }}>Footer</footer>
                </ListContainer>
            )
        return (
            <Main>
                <Search onSearchSubmit={this.onSearchSubmit} />
                <div className='map-button'>
                    <MapButton type='button' value={this.state.showMap} onClick={this.onToggleMap}>{this.state.showMap ? 'LIST' : 'MAP'}</MapButton>
                </div>
                {container}
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