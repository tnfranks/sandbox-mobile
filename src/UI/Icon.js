import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const animateMixin = css`
    animation: ${rotate} .5s linear;
`

const IconStyled = styled.svg`
    height: ${props => props.height};
    width: ${props => props.width};
    ${props => props.clicked ? animateMixin : null};

    path {
        fill: ${props => props.color};
    }
`

const Icon = props => {
    return (
        <IconStyled
            height={props.height}
            width={props.width}
            color={props.color}
            style={props.style}
            clicked={props.clicked}
            viewBox='0 0 20 20'>
            <path d={props.icon} />
        </IconStyled>
    )
}

export default Icon