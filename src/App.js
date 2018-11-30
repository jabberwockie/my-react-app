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

  switchNameHandler = (newName) => {
    this.setState({
      persons:  [
        { name: newName , age: 68},
        { name: "Paula", age: 35},
        { name: "Sara", age: 30}
      ]
    })
  }

  //two way binding
  nameChangedHandler = (event) => {
    this.setState({
      persons:  [
        { name: "Camila" , age: 68},
        { name: event.target.value, age: 35},
        { name: "Sara", age: 30}
      ]
    });
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
       <h1>This is really working</h1> 
       <p>Oh yeah, it is working</p>
       <button 
        onClick={() => this.switchNameHandler("Clara")}
        style={style}>Switch Name</button>
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        //this syntax is better than the one in line 30
        click={this.switchNameHandler.bind(this, "Claudio")}
        changed={this.nameChangedHandler}>My hobbies: sleeping and eating</Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I'm an app!!!"));
  }
}

export default App;
