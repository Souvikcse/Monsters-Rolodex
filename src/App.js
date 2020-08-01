import React, { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import Search from './components/search-box/search.components';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(arr => this.setState({monsters: arr}))
    .catch(err => console.log(err));
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredmonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <Search placeholder='&#x1F50D; Search monster' handleChange={ e => this.setState({searchField: e.target.value }) } />
            <CardList monsters={ filteredmonsters }/>
        </div>
      )
  }
}

export default App;
