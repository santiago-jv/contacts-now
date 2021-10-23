import React, { useContext } from 'react'
import Button from '../components/Button'
import { AppContext } from '../context/ContextProvider'
import { 
    UserContent,
    User,
    Profile,
    Image,
    UserInfo,
    Text,
    Nav,
    Link } from '../styles/Header.styles'
import { ButtonContainer } from '../styles/Home.styles'
import { useHistory } from 'react-router'
const UserInformation = ({closeMenu}) => {
    const {state,dispatch} = useContext(AppContext)
    const history = useHistory()
    
    const goToLogin =()=>{

        history.push('/login')
    }
    const closeSession =()=>{
        dispatch({type:'CLOSE_SESSION'})
        goToLogin()
    }
    return (
        <>
        { !state.user ?
            <UserContent>
                <Button action={()=>{closeMenu();goToLogin()}} isAlternative={true} icon="fas fa-sign-in-alt" text="Log in"/>
            </UserContent>
                :
            <UserContent>
                <User>
                    <Profile>
                        <Image src={state.user.profile_image} alt="Profile image" />
                    </Profile>   
                    <UserInfo>
                        <Text>
                            {state.user.first_name}
                        </Text>
                        <Text>
                            {state.user.last_name}
                        </Text>
                    </UserInfo> 
                </User>
                <Nav>
                    <Link onClick={closeMenu} id="link" to="/contacts">My contacts</Link>
                </Nav>
                <ButtonContainer>
                    <Button id="link" action={()=>{closeMenu();closeSession()}} isAlternative={true} icon="fas fa-sign-out-alt" text="Sign out"/>
                </ButtonContainer>
            </UserContent>
        }
        </>
    )
}

export default UserInformation
