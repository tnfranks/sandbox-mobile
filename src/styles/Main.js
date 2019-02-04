import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-rows: 40px calc((100vh - 40px) *.35) calc((100vh - 40px) *.65);
`

export const ListContainer = styled.div`
    display: grid;
    height: 100%;
    background-color: #242f3e;
    color: white;
    overflow: auto;

    grid-template-rows: 1fr 1fr;
`
export const List = styled.div`
    padding: 20px;
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`