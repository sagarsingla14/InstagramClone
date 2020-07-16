import React from 'react'
import Navbar from './components/NavBar'
import './App.css'
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/signup'
import CreatePost from './components/screens/CreatePost'
import Practice from './components/screens/practice'


import {Link} from 'react-router-dom'
import practice from './components/screens/practice'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Route exact path = "/">
           <Home />
        </Route>

        <Route path = "/profile">
           <Profile />
        </Route>

        <Route path = "/signin">
           <Signin />
        </Route>

        <Route path = "/signup">
           <Signup />
        </Route>

        <Route path = "/createpost">
           <CreatePost />
        </Route>

		<Route path = "/practice">
			<Practice />
		</Route>
      </BrowserRouter>
  );
}

export default App;
