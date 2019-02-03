
import React from 'react'

import { Input } from '../styles/Input'



const SearchInput = (props) => {
    const [searchString, setSearchString] = React.useState('20132')

    const onChangeHandler = (e) => {
        setSearchString(e.target.value)
    }

    const clickTheButton = () => {
        props.onSearchSubmit(searchString)
    }

    return (
        <>
            <Input type="text" value={searchString} onChange={onChangeHandler} />
            <button style={{ marginLeft: '5px', border: 'none', backgroundColor: '#242f3e', color: 'white' }} type="button" onClick={clickTheButton}>Search</button>
        </>
    )
}

export default SearchInput