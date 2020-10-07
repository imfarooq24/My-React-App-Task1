import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  state = {
  UserNames:
    [
      { name:"Ash" },
      {  name:"Jenny"},
      {  name:"Lali"}
    ]
  }
  ChangeNameHandler = () => {
    this.setState({
      UserNames:[
        {name:"Farooq"},
        {name:"Tajwar"},
        {name:"Saleem"}
      ]
    })
  }
  InputNameHandler = (event) => {
    this.setState({
      UserNames:[
        {name:event.target.value},
        {name:"Tajwar"},
        {name:"Saleem"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Hey! Welcome to Task</h2>
        <UserInput inputName={this.InputNameHandler} />
        <button onClick={this.ChangeNameHandler}>Default Names</button>
        <UserOutput name={this.state.UserNames[0].name}/>
        <UserOutput name={this.state.UserNames[1].name}/>
        <UserOutput name={this.state.UserNames[2].name}/>
      </div>
    );
  }
}

export default App;
