import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import VerifyAuth from '../middlewares/VerifyAuth';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import FormContact from '../views/FormContact';
import Contacts from '../views/Contacts';
import Header from '../layout/Header';
import { AppContext } from '../context/ContextProvider';
import { useCallback, useContext, useEffect } from 'react';
import { getUser } from '../services/http-auth';

const RouterProvider = ({theme,setTheme}) => {
    const {dispatch} = useContext(AppContext);
    const retrieveUser = useCallback(async()=>{
        try{
          const response = await getUser();
          dispatch({type: 'SAVE_SESSION', user: response.data.user})
          
        }
        catch(error){
          console.log(error);
        }
    },[dispatch])
    
    useEffect(() => {
      if(sessionStorage.getItem('session')){
  
        retrieveUser()
      }
    }, [retrieveUser])

    return (
        <Router>
            <Header theme={theme} setTheme={setTheme}/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contacts" render={() => <VerifyAuth> <Contacts/> </VerifyAuth>}/>
                <Route exact path="/contacts/create" render={() => <VerifyAuth> <FormContact/> </VerifyAuth>}/>
                <Route exact path="/contacts/edit/:id" render={() => <VerifyAuth> <FormContact/> </VerifyAuth>}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}

export default RouterProvider
