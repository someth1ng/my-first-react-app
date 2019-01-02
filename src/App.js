import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdkj1', name: 'Lam', age: 21 },
      { id: 'dfgfdg1', name: 'Hermoine', age: 25 },
      { id: 'dvbcd2', name: 'Harry', age: 26 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assingedClasses = [];
    if (this.state.persons.length <= 2) {
      assingedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assingedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello, World!</h1>
        <p className={assingedClasses.join(' ')}>This is dynamicaly classes toggle</p>
        <button
        className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Im from react'));
  }
}

export default App;
