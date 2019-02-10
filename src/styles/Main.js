import styled from 'styled-components'

export const Main = styled.main`
    background-color: #242f3e;
    color: #fff;
    padding: 2rem;
    display: grid;
    grid-template-rows: 4rem 4rem calc(100vh - 12rem);
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