import React, { useContext } from 'react'
import {
    MainContent,
    ImageContainer,
    Image,
    Content,
    Title,
    Description,
    ButtonContainer
} from '../styles/Home.styles'

import IMAGE from '../images/main.svg'
import { useHistory } from 'react-router'
import Button from '../components/Button'
import { AppContext } from '../context/ContextProvider'
const Home = () => {
    const history = useHistory()
    const {state} = useContext(AppContext)
    const goToLogin = () => {
        if(state.user){
            history.push('/contacts')
        }
        else{
            history.push('/login')
        }
    }
    return (
        <MainContent>
            <ImageContainer>
                <Image src={IMAGE} alt="Main Image" />
            </ImageContainer>
            <Content>
                <Title>ContactNow</Title>
                <Description>In this application, you will be able to register your contacts. Starts now!</Description>
                <ButtonContainer>
                    <Button isAlternative={false} action={goToLogin} icon={"fas fa-star"}  text={"Get Started"} />
                </ButtonContainer>
            </Content>
        </MainContent>
    )
}

export default Home
