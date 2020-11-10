import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import LogIn from './components/LogIn/Login';
import { getCurrentUser, handleSignOut } from './components/LogIn/LogInManager';
import PrivateRoute from '../src/components/LogIn/PrivateLogin';
import AllPatients from '../src/components/AllPatients/AllPatients';
import AddDoctor from '../src/components/AddDoctor/AddDoctor';
import Dashboard from '../src/components/Dashboard/Dashboard';

export const UserContext = createContext();
function App() {
  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    getCurrentUser().then(res => {
      setSignedInUser(res)
    })
  }, [])
  const googleSignOut = () =>{
    handleSignOut()
    .then(res => {
      setSignedInUser(res)
    })
 }
  return (
    <UserContext.Provider value={{signedInUser, setSignedInUser, googleSignOut}}  >
    <Router>
      <Switch>
      <Route exact path='/'>
          <Home></Home>
      </Route>
      <Route path='/log-in'>
          <LogIn/>
      </Route>
      <Route path="/appointment">
            <Appointment></Appointment>
      </Route>
      <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
      </PrivateRoute>
      <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
      </Route>
      <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
