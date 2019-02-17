import React from 'react'
import styled from 'styled-components'

const LocationDetailStyled = styled.div`
    position: fixed;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
    background-color: #4682b4;
    overflow: auto;
    transition: all .2s ease-out;
    transform: ${props => props.show ? `translateY(0)` : `translateY(100vh)`};

    .photos {
        /* Prevent vertical gaps */
        line-height: 0;
        
        -webkit-column-count: 2;
        -webkit-column-gap:   0px;
        -moz-column-count:    5;
        -moz-column-gap:      0px;
        column-count:         2;
        column-gap:           0px;
    }

    .photos img {
        /* Just in case there are inline attributes */
        width: 100% !important;
        height: auto !important;
    }
`

const LocationDetail = (props) => {
    const { location } = props

    const photos = location.photos && location.photos.length > 0
        ? location.photos.map(photo => (
            <img key={photo.photo_reference} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photo.photo_reference}&key=AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY`} />
        ))
        : <div></div>

    const info = !location.moonmenStatus
        ? <div>Loading...</div>
        : location.moonmenStatus === 'REJECT'
            ? <div>Location info not available</div>
            : <div><div>{location.name}</div><div className='photos'>{photos}</div></div>


    return (
        <LocationDetailStyled show={props.show} onClick={props.onClose}>
            {info}
        </LocationDetailStyled>
    )
}

export default LocationDetail