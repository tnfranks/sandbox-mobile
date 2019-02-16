import React from 'react'
import styled from 'styled-components'

const LocationDetailStyled = styled.div`
    position: fixed;
    height: calc(100% - 4rem);
    width: calc(100% - 4rem);
    background-color: #4682b4;
    transition: all .2s ease-out;
    transform: ${props => props.show ? `translateY(0)` : `translateY(100vh)`};
`

const LocationDetail = (props) => {
    return (
        <LocationDetailStyled show={props.show} onClick={props.onClose} />
    )
}

export default LocationDetail