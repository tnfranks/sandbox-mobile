import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    font-size: 1.6rem;
    border: 1px solid white;
    display: grid;
    grid-template-rows: 15rem 1fr;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .header {
        padding-left: .5rem;
    }

    .location-type {
        font-size: 1rem;
    }
`

const Location = (props) => {
    const { locationData } = props

    const breweryImage = locationData.brewery.images.images_large === null ? (<div />) : (<img src={locationData.brewery.images.image_large_square} alt="brewery logo" />)

    return (
        <Card>
            <figure class="logo"><img src={locationData.brewery.images.image_large} />
            </figure>
            <div class="header">
                    <h5>{locationData.brewery.brewery_name}</h5>
                <div class="location-type">{locationData.location_type_display}</div>
            </div>
        </Card>
    )
}

export default Location