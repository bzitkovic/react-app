import React, { useState, Component, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header/Header';
import Main  from  './components/Main/Main';
import { PrivateRoute } from '../src/components/PrivateRoute/PrivateRoute';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import ToDo from './pages/ToDo';
import Register from './pages/Register';
import Login from './pages/Login';



const App = () => { 

  const [isAuthenticated, setIsAuthenticated] = useState("");


  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      setIsAuthenticated(true);
    }
    else {
      setIsAuthenticated(false);
    }
  });
  
    return (
   
     (isAuthenticated === true || isAuthenticated === false ? (
      <>
      <Header
        isAuthenticated = {isAuthenticated}
        onAuthChange = {setIsAuthenticated}
      />
      <Main>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/speakers' component={Speakers} />
        <PrivateRoute exact path='/events' component={Events} /> 
        <Route exact path='/toDo' component={ToDo} />
        <Route exact path='/registration' component={Register} />  
        <Route 
          exact
          path='/login' 
          render={(props) => (
            <Login {...props} onAuthChange={setIsAuthenticated} />
          )}  />  
      </Switch>
      </Main>
      </>   
     ) : null)
    
    );
  }

export default App;
