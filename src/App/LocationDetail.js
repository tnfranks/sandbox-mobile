import React from 'react'
import styled from 'styled-components'

const LocationDetailStyled = styled.div`
    position: fixed;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
    border: 1px solid #eee;
    background-color: #242f3e;
    padding: 1rem;
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
            <img key={photo.photo_reference} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photo.photo_reference}&key=AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY`} alt='brewery' />
        ))
        : <div></div>

    const info = !location.moonmenStatus
        ? <div>Loading...</div>
        : location.moonmenStatus === 'REJECT'
            ? <div>Location info not available</div>
            : location.permanently_closed
            ? <div>Permanently closed</div>
            : (
                <div>
                    <div>{location.name}</div>
                    {!Object.keys(location).includes('opening_hours') ? <div></div> : location.opening_hours.open_now ? <div>Open</div> : <div>Closed</div>}
                    <div>{location.formatted_address}</div>
                    <div>{location.international_phone_number}</div>
                    <div>Cost: {location.price_level}</div>
                    <div>Rating: {location.rating}</div>
                    {location.opening_hours.weekday_text.map((day, i) => <div key={i}>{day}</div>)}
                    {/* <div className='photos'>{photos}</div> */}
                </div>
            )


    return (
        <LocationDetailStyled show={props.show} onClick={props.onClose}>
            {info}
        </LocationDetailStyled>
    )
}

export default LocationDetail