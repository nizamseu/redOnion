import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lunch from './Componant/Lunch/Lunch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Componant/NotFound/NotFound';
import FoodItem from './Componant/FoodItem/FoodItem';
import View, { DataProvider } from './Componant/View/View';
import HomeComponant from './Componant/HomeComponant/HomeComponant';
import Navbar from './Componant/Navbar/Navbar';
import Login from './Componant/Login/Login';

function App() {
 

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      
        <Switch>
        <Route path="/fooditem">
            <FoodItem></FoodItem>
        </Route>

        <Route path="/login">
        <Login></Login>
       </Route>

        <Route path="/:fkey">
              <View></View>
        </Route>

        <Route exact path="/">
            <FoodItem></FoodItem>
        </Route>
        
      

        <Route path="*">
        <NotFound></NotFound>
        </Route>

      </Switch>
   
 
    </div>
    </Router>
  );
}

export default App;
