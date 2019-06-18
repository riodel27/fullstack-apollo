import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MenuBar from './components/MenuBar'


function App(){
	return (
		<Router>
			<div className="ui container">
				<MenuBar />
				<Route exact path = '/' component={Home}/>
				<Route exact path = '/login' component={Login}/>
				<Route exact path = '/register' component={Register}/>
			</div>
		</Router>
	)
}

export default App;