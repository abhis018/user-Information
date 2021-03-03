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
    this.setState({inputPage:event.target.value},()=>{
      console.log(this.state.inputPage);
    });
  }

  

  onSubmit = () => {
    fetch(`https://reqres.in/api/users?page=${this.state.inputPage}`)
      .then(response=>response.json())
      .then(data => {
          this.setState({ userData: data.data }, ()=>{
            console.log(this.state.userData, '1')
      })})
  }
  render () {
    const {userData} = this.state; 
    console.log(userData, '2');
    return (
      <div className="App">
        <Header onInputChange={this.onInputChange} Submit={this.onSubmit}/>
        <Body userData={userData}/>
      </div>
    );
  }
}

export default App;
