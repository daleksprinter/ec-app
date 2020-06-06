import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {

	const dispatch = useDispatch()
	const selector = useSelector(state => state)
	console.log(selector)
  return (
		<div className="App">
		</div>
	);
}

export default App;
