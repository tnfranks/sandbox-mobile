import styled from 'styled-components'

export const Main = styled.main`
    background-color: #242f3e;
    color: #fff;
    padding: 2rem;
    display: grid;
    grid-template-rows: 4rem 4rem calc(100vh - 12rem);

    .search {
        display: flex;
        align-items: center;
    }

    .map-button {
        display: flex;
        align-items: center;
    }
`

export const ListContainer = styled.div`
    display: grid;
    height: 100%;
    overflow: auto;

    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2rem;
`
export const List = styled.div`
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 2rem;
`

export const MapButton = styled.button`
    height: 80%;
    width: 5rem;
    background: none;
    background-color: ${props => props.value ? 'steelblue' : 'none'};
	color: inherit;
	border: ${props => props.value ? 'none' : '1px solid #fff'};
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;

    input {
        color: #777;
        border: none;
        padding: .5rem;
        height: 90%;
        width: 85%;
        font-size: 1.6rem;
    
        &:focus {
            outline: none;
        }
    }

    button {
        border: none;
        height: 90%;
        width: 15%;
        background-color: #fff;

        :focus {
            outline: none;
        }
    }

`

export const Footer = styled.footer`
    background-color: #4682b4;
    color: #fff
`