 import React, { Component } from 'react';
import './App.css';
import PersonComp from './PersonComp/PersonComp';

class App extends Component {

  state ={ 
    person: [
      {name: "Clara",age:21},
      {name: "Ash",age:22},
      {name: "Jenny",age:23},
      {name: "Messi",age:24}
    ]
  } 
  
  changeNameHandler = (newName) =>{
    this.setState({
          person: [
        {name: newName,age:21},
        {name: "Ash",age:22},
        {name: "PIPI",age:23},
        {name: "Messi",age:24}
      ]
    })
  }
  inputNameHandler = (event) =>{
    this.setState({
          person: [
        {name: event.target.value,age:21},
        {name: event.target.value,age:22},
        {name: event.target.value,age:23},
        {name: event.target.value ,age:24}
      ]
    })
  }


  render() {
    // const myStyle = {
    //   backgroundColor:'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer'
    // };
    return (
      <div id="root">
        
        <div className="App">
          <h1>Hey im a react app</h1>
          <p>This is really working</p>
          
          <button 
          // style={myStyle}
          onClick={() => this.changeNameHandler("BUbU")}>
            Change Names
          </button>
          
          <PersonComp name={this.state.person[0].name}
           age={this.state.person[0].age}
           inputName={this.inputNameHandler }/>

          <PersonComp name={this.state.person[1].name}
           age={this.state.person[1].age}
           inputName={this.inputNameHandler }/>

          <PersonComp name={this.state.person[2].name}
           inputName={this.inputNameHandler }
           age={this.state.person[2].age}/>

          <PersonComp name={this.state.person[3].name}
           age={this.state.person[3].age}
           inputName={this.inputNameHandler }/>
        </div>

      </div>
    );
  }
}

export default App;