import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Camila", age: 29},
      { name: "Paula", age: 35},
      { name: "Sara", age: 30}
    ],
    otherState: 'some value'
  }

  switchNameHandler = () => {
    this.setState({
      persons:  [
        { name: "Camilo", age: 68},
        { name: "Paula", age: 35},
        { name: "Sara", age: 30}
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>This is really working</h1> 
       <p>Oh yeah, it is working</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I'm an app!!!"));
  }
}

export default App;
