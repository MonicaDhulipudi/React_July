import React, {Component} from 'react';
// import Weather from './Components/Weather';
// import FavColor from './Components/FavColor';
import MultiSelect from './Components/MultiSelect';

import {BrowserRouter} from 'react-router-dom'
import Sun from './sun.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }

  isLogin(){
    return (
      <form>
        Email<input type='email' value={this.state.username} onChange={this.onUsername.bind(this)} required/>
        Password<input type='password' value={this.state.password} onChange={this.onPassword.bind(this)} required/>
        <input type='submit' value='Submit' />
      </form>
    )
  }

  onUsername(e){
    this.setState({
      username: e.target.value
    })
  }
  onPassword(e){
    this.setState({
      password: e.target.value
    })
  }


  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <h1 className='sunHeading'>
      <img src={Sun} alt='sun' className='test' height='70px'/>
        &nbsp;Weather Report</h1>
      </div>
      {this.isLogin()}
      <br/>
      <br/>
      <MultiSelect />
      <br/>
 

      {/* {this.state.username && this.state.password ? <Weather /> : <FavColor />} */}
      </BrowserRouter>
    );
  } 
}


export default App;
