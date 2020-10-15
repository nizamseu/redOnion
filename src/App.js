import React, { createContext, useState } from 'react';
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
import View from './Componant/View/View';
import Navbar from './Componant/Navbar/Navbar';
import Login from './Componant/Login/Login';
export const MyContext=React.createContext()
function App() {
 const [cart,setCart]=useState([])
console.log("cart",cart);
  return (
    <MyContext.Provider value={[cart,setCart]}>
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
    </MyContext.Provider>
  );
}

export default App;
