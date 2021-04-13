import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {React,Component} from 'react';
import AboutUser from './Components/AboutUser';
import AddUser from './Components/AddUser';
import Dashboard from './Components/Dashboard';
import {Route,Switch} from 'react-router';

function App() {
  return (
      <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route exact path='/add-user' component={AddUser} />
      </Switch>
  );
}
export default App;
