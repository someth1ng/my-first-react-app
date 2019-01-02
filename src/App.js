import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Lam', age: 21 },
      { name: 'Hermoine', age: 25 },
      { name: 'Harry', age: 26 },
    ]
  }
  
  switchNameHandler = (newName) => {
    // console.log('Clicked');
    // dont do this: this.state.persons[0].name = 'Trinh Hoang Lam';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Hermoine', age: 25 },
        { name: 'Harry Potter', age: 25 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Hermoine', age: 25 },
        { name: 'Harry', age: 25 },
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Trinh Hoang Lam')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Lam!!')}
          changed={this.nameChangedHandler}>
          My Hobbies: Gaming
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Im from react'));
  }
}

export default App;
