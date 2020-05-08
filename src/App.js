import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import TodoList from './components/todo/TodoList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={TodoList} />
        <Route path="/signin" component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
