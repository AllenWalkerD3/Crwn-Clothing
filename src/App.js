import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage.component';

const HatPage = () =>(
   <h1>Hat</h1>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
