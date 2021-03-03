import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputPage: '',
      userData: [],
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    this.setState({inputPage:event.target.value},()=>{
      fetch(`https://reqres.in/api/users?page=${this.state.inputPage}`)
        .then(response=>response.json())
        .then(data => {
            this.setState({ userData: data.data }, ()=>{
        })})
    });
  }
  render () {
    const {userData} = this.state; 
    return (
      <div className="App">
        <Header onInputChange={this.onInputChange} Submit={this.onSubmit}/>
        <Body userData={userData}/>
      </div>
    );
  }
}

export default App;
