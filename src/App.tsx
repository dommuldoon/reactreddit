import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './components/home';
import Subreddit from './components/subreddit';

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/subreddit/:id" component={Subreddit} />
					<Redirect from="/" exact to="/home" />
				</Switch>
			</main>
			<Footer />
		</>
	);
}

export default App;
