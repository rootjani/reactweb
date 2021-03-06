import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './Robot';
import SearchBox from './SearchBox';
import './App.css'


class App extends Component{

	constructor(){
			super();
			this.state = {

				robots : robots,
				searchField : ''
			}


			

	}

	onSearchChange = (event) =>{

				this.setState({searchField:event.target.value});
				
				}



	render(){

		const filteredStu = this.state.robots.filter(robots =>{


			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className = "tc">

			<h1>NerdEra Students</h1>
			<SearchBox searchChange = {this.onSearchChange}/>
			<CardList robots = {filteredStu}/>

			</div>
			);
	}



}





export default App;
