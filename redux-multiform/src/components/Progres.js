import React from 'react'
import styled from 'styled-components'
import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import { useState } from 'react'


const ProgressContainer = styled.div`
width:25vw;
height:40vw;
border-radius: 1rem;
background-image: url(${bgDesktop});
background-size: contain;
background-repeat: no-repeat;
margin:1vw;
`
const FormSteps = styled.div`
display: flex;
Width:15vw;
gap:1vw;
padding-inline:2vw;
padding-top:2vw;
`
const FormCircle = styled.div`
width:2.5vw;
aspect-ratio:1;
border-radius:50%;
border:1px solid white;
background-color: ${props => props.active ? 'hsl(206, 94%, 87%)' : '#transparent'};
display:flex;
justify-content:center;
align-items:center;
font-weight:500;
color:${props => props.active ? 'black' : 'white'};
`
const StepText = styled.div`
display: flex;
flex-direction: column;
gap:0.2vw;
`

const Step = styled.p`
font-size: 0.95vw;
color: ${props => props.theme.Coolgray};
`

const SmallTitle = styled.p`
font-size:1.05vw;
font-weight:500;
color: ${props => props.theme.White};
`


const Progres = () => {
    const [currentStep, setCurrentStep] = useState(1);


  return (
    <ProgressContainer>
        <FormSteps>
            <FormCircle active={currentStep===1}>1</FormCircle>
            <StepText>
            <Step>STEP 1</Step>
            <SmallTitle>YOUR INFO</SmallTitle>
            </StepText>
        </FormSteps>
        <FormSteps>
            <FormCircle active={currentStep===2}>2</FormCircle>
            <StepText>
            <Step>STEP 1</Step>
            <SmallTitle>SELECT PLAN</SmallTitle>
            </StepText>
        </FormSteps>
        <FormSteps>
            <FormCircle active={currentStep===3}>3</FormCircle>
            <StepText>
            <Step>STEP 1</Step>
            <SmallTitle>ADD-ONS</SmallTitle>
            </StepText>
        </FormSteps>
        <FormSteps>
            <FormCircle active={currentStep===4}>4</FormCircle>
            <StepText>
            <Step>STEP 1</Step>
            <SmallTitle>SUMMARY</SmallTitle>
            </StepText>
        </FormSteps>
    </ProgressContainer>
  )
}

export default Progres