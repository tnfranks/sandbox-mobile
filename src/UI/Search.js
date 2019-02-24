
import React, { useState } from 'react'

import { SearchDiv } from '../styles/Main'
import Icon from '../UI/Icon'
import { ICONS } from '../SVG/svgPaths'



const SearchInput = (props) => {
    const [searchString, setSearchString] = useState('20132')
    const [searchClicked, setSearchClicked] = useState(false)

    const onChangeHandler = (e) => {
        setSearchString(e.target.value)
    }

    const onSearchClick = () => {
        setSearchClicked(true)
        props.onSearchSubmit(searchString)
    }

    return (
        <SearchDiv>
            <input type="text" value={searchString} onChange={onChangeHandler} />
            <button type="button" onClick={onSearchClick}>
                <Icon
                    color='#eee'
                    height='2rem'
                    width='2rem'
                    clicked={searchClicked}
                    icon={ICONS.SEARCH}
                 />
            </button>
        </SearchDiv>
    )
}

export default SearchInput