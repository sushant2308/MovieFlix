import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginScreen from './components/Login/LoginScreen';
function App() {
  const user=null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(

        <Switch>
          <Route exact path="/">
      <HomeScreen/>

          </Route>
        </Switch>
      )}
      </Router>
    </div>
  );
  
}

export default App;  
