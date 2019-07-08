import React, {Component} from 'react'
// import TakeIt from './Children';

class MultiChild extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }

  handleChange(event){
    // console.log(this.state.value)
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault();
  }
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
  
          <select value={this.state.value} onChange={this.handleChange}>
       
            <option value='shelter'>Shelter</option>
            <option value='air'>Air</option>
            <option value='sun'>Sun</option>
            <option value='food'>Food</option>
         
          </select>
    
          <input type='submit' value='Submit' />
          
        </form>
      )
    }

}


export default MultiChild;