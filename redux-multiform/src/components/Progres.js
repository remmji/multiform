import React from 'react'
import styled from 'styled-components'
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'

const ProgressContainer = styled.div`
width:25vw;
height:40vw;
border-radius: 1rem;
background-image: url(${bgDesktop});
background-size: contain;
background-repeat: no-repeat;
margin:1vw;
`

const Progres = () => {
  return (
    <ProgressContainer>

    </ProgressContainer>
  )
}

export default Progres