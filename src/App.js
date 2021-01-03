
// 1. import react and add component
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox}from './components/search-box/search-box.component.jsx'

// 2. replace function with class because it has more functionality and to have access to render method inside our app, but  first import component. see default code in react below.

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

// 3. Based from the default code above rewrite it to like the one below everytime. copy and paste return method above inside the render method.
class App extends Component {

  // 4. Class component also gives us access to  "state", a Javascript object with properties that can be modified
  constructor() {
    super();

      this.state = {
        monsters: [],
        searchField: ''

      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}) )
  }
  
  // 5. anything between curly braces in JSX is a javascript expression which is something that produces a value as below
  // 6. there are different Methods within the "Component Property" of react such as render () method
    
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))


    return (
      <div className="App">
        <h1>RED KINNG's MONSTERS</h1>
        <SearchBox
        placeholder ='search monsters' 
        handleChange = {(e) =>
          this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filteredMonsters}/>    
      
      </div>
    ); 
  }
}

export default App;
