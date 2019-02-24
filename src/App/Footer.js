import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    background-color: rgb(255, 255, 255, .05);
    color: #fff;

    .nav {
        list-style: none;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-gap: 2rem;
        align-items: center;

        &__link:link,
        &__link:visited {
            font-size: 1.4rem;
            color: #fff;
            text-decoration: none;
            font-family: $font-display;
            text-transform: uppercase;
            text-align: center;
            padding: 1.5rem;
            display: block;
            transition: all .2s;
        }

        &__link:hover,
        &__link:active {
            background-color: rgba(#fff, .05);
            transform: translateY(-3px);
        }
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <ul class="nav">
                <li class="nav__item"><a href="/" class="nav__link">About us</a></li>
                <li class="nav__item"><a href="/" class="nav__link">Contact us</a></li>
                <li class="nav__item"><a href="/" class="nav__link">Careers</a></li>
                <li class="nav__item"><a href="/" class="nav__link">Learn More</a></li>
            </ul>
        </FooterStyled>
    )
}

export default Footer