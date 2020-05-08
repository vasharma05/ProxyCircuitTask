import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/Dashboard'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps= (state) =>{
  return{
      user: state.auth
  }
}

export default connect(mapStateToProps)(App);
