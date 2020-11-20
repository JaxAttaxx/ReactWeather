import Card from "./components/Card"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Multiday from './components/Multiday';
import Hourly from './components/Hourly';
import logo from './Images/weatherlogo02.png' 
import NavBarPage from "./components/NavBarPage";
import { Provider } from "react-redux";
import store from './store'


//About to change to TailwindCSS
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-fixed h-screen bg-cover overflow-y-auto" style={{backgroundImage: "url('https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"}}>
        <div className="text-white">
          
        <div className="flex justify-center">
          <img className="object-center" src={logo} alt="app logo"></img>
        </div>
      

          <NavBarPage />


        </div>
        

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/multiday">
              <Multiday />
              {/* <Multiday city="London" state="uk" /> */}
            </Route>
            <Route path="/hourly">
              <Hourly />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        
        {/* <Card zip="30307"/> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// Beach Clouds
// https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260

// Clouds
// https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260

// Clouds 2
// https://images.pexels.com/photos/1019991/pexels-photo-1019991.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
