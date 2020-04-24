import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header/Header';
import Main  from  './components/Main/Main';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import ToDo from './pages/ToDo';


class App extends Component {
  render() {
    return (
     <>
      <Header/>
      <Main>
        <Route exact path='/' component={Home} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/events' component={Events} /> 
        <Route path='/toDo' component={ToDo} /> 
      </Main>
     </>   
    );
  }
}
export default App;
