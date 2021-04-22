import React from 'react' 
import styled from 'styled-components'

import Sidebar from './SideBar';
//chat component

const MainContainer = styled.div`
    display: flex
`

const Main = () => (
    <MainContainer>
        <Sidebar />
    </MainContainer>
)

export default Main