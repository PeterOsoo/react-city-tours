import React from "react"
import "./App.scss"
import NavBar from "./components/NavBar/NavBar"
import TourList from "./components/TourList/TourList"

const App = () => {
	return (
		<div>
			{/* <h1>City Tours</h1> */}
			<NavBar />
			<TourList />
		</div>
	)
}

export default App
