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
import View from './Componant/View/View';
import HomeComponant from './Componant/HomeComponant/HomeComponant';
function App() {
  return (
    <div className="App">
       <Router>
        <Switch>

        {/* <Route path="/lunch">
          <Lunch></Lunch>
        </Route> */}
        
        <Route path="/fooditem">
         <FoodItem></FoodItem>
        </Route>

        <Route path="/view">
          <View></View>
        </Route>

      {/* <Route path="/home">
       <HomeComponant></HomeComponant>
      </Route> */}

        <Route exact path="/">
        <FoodItem></FoodItem>
        </Route>

        <Route path="*">
        <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
