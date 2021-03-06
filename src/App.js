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

  onInputChange = (event) => {
    this.setState({inputPage: event.target.value}, () => {
      this.setState({userData: []})
    });
  }


  onSubmit = (event) => {
    fetch(`https://reqres.in/api/users?page=${this.state.inputPage}`)
      .then(response=>response.json())
      .then(data => {
        this.setState({ userData: data.data}, ()=>{
      })});
  }


  render () {
    const {userData, inputPage} = this.state; 
    return (
      <div className="App">
        <Header onInputChange={this.onInputChange} Submit={this.onSubmit}/>
        <Body userData={userData} inputPage={inputPage} Submit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
