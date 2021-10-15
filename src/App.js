import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
	//search github users

	//get single github user

	//get users repos

	//clear users from state

	//set alert

	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar title="Github Finder" icon="fab fa-github"></Navbar>
						<div className="container">
							<Alert />
							<Route exact path="/" component={Home}></Route>
							<Route exact path="/about" component={About}></Route>
							<Route exact path="/user/:login" component={User}></Route>
							<Route component={NotFound}></Route>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
