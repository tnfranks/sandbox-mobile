
import React, { useState, useEffect } from 'react'

import { Input } from '../styles/Input'



const SearchInput = (props) => {
    const [searchString, setSearchString] = useState('20132')
    // const [currentLocation, setCurrentLocation] = useState({})

    // navigator.geolocation.getCurrentPosition(pos => {
    //     setCurrentLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    // })

    // useEffect(() => {
    //     setSearchString(`${currentLocation.lat}, ${currentLocation.lng}`)
    // }, [currentLocation])

    const onChangeHandler = (e) => {
        setSearchString(e.target.value)
    }

    const onSearchClick = () => {
        props.onSearchSubmit(searchString)
    }

    return (
        <>
            <Input type="text" value={searchString} onChange={onChangeHandler} />
            <button style={{ marginLeft: '5px', border: 'none', backgroundColor: '#242f3e', color: 'white' }} type="button" onClick={onSearchClick}>Search</button>
        </>
    )
}

export default SearchInput