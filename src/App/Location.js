import React from 'react'

const Location = (props) => {
    return (
        <li>{props.locationData.brewery.brewery_name}</li>
    )
}

export default Location