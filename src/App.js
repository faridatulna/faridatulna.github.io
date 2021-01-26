import React from 'react'

import Header from './components/MyHeader'
import MainContent from './components/MyMainContent'
import Game from './components/tic-tac-toe/Game'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css'

export default function App() {
  return (
    <div>
    	<Router>
			<Switch>
				<Route path="/tictactoe">
					<Game />
				</Route>
				<Route path="/">
					<Header />
	      			<MainContent />
				</Route>
			</Switch>
		</Router>  
    </div>
  )
}
