import styled from 'styled-components'

export const Main = styled.main`
    background-color: #242f3e;
    color: #fff;
    display: grid;
    grid-template-rows: 40px 40px calc(100vh - 80px);

    .filter {
        padding-left: 2rem;
    }
`

export const ListContainer = styled.div`
    display: grid;
    height: 100%;
    overflow: auto;

    grid-template-rows: 1fr 1fr;
`
export const List = styled.div`
    padding: 2rem;
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 2rem;
`