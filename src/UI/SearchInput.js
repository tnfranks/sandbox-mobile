
import React from 'react'

import { Input } from '../styles/Input'



const SearchInput = (props) => {
    const [searchString, setSearchString] = React.useState('20132')

    navigator.geolocation.getCurrentPosition(pos => {
        setSearchString(`${pos.coords.latitude.toString()}, ${pos.coords.longitude.toString()}`)
    })

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