import React, { useState } from 'react'
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
    
    a {
        color: inherit;
        text-decoration: none;
    }

    .card-front {
        position: relative;
        background-color: #fff;

        &-icon {
            height: 100%;
            width: 100%;
        }
    }

    .card-back {
        position: relative;
        background-color: #4682b4;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        &-icons {
            display: flex;
            justify-content: center;
        }
    }

    .flip-toggle {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        height: 1rem;
        width: 1rem;
        background: red;
    }

    .header {
        padding-left: .5rem;
    }

    .location-type {
        font-size: 1rem;
    }
`

const Back = (props) => {
    const { locationData, onCardFlip } = props
    return (
        <div className='card-back'>
            <div className='card-back-icons'><button type='button'>ICON</button></div>
            <div className='flip-toggle' onClick={() => onCardFlip({id: locationData.location_id, name: locationData.location.brewery.brewery_name, lat: locationData.latitude, lng: locationData.longitude})} />
        </div>
    )
}

const Front = (props) => {
    const { locationData, onCardFlip } = props
    return (
        <div className='card-front'>
            <figure className='card-front-icon'>
                <img src={locationData.brewery.images.image_large || 'http://www.alesandmeads.com/wp-content/uploads/2015/12/url.png'} alt='brewery logo' />
            </figure>
            <div className='flip-toggle' onClick={() => onCardFlip({id: locationData.location_id, name: locationData.brewery.brewery_name, lat: locationData.latitude, lng: locationData.longitude})} />
        </div>
    )
}

const Location = (props) => {
    const { locationData } = props
    const [flipped, setFlipped] = useState(false)

    const onCardClick = (e) => {
        e.preventDefault()
        setFlipped(!flipped)
    }
    // const cardFace = flipped ? <Back locationData={locationData} onCardFlip={onCardClick} /> : <Front locationData={locationData} onCardFlip={onCardClick} />

    return (
        <Card>
            {flipped && (<Back locationData={locationData} onCardFlip={props.showLocationDetail} />)}
            {!flipped && (<Front locationData={locationData} onCardFlip={props.showLocationDetail} />)}
            <div className="header">
                <h5><a href={locationData.website} target='_blank' rel='noopener noreferrer'>{locationData.brewery.brewery_name}</a></h5>
                <div className="location-type">{locationData.location_type_display}</div>
            </div>
        </Card>
    )
}


export default Location