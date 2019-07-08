import React,{Component} from 'react';
import Posts from './Posts';

class Weather extends Component{
  constructor(props){
    super(props);
    this.state={
      posts: []
    }
  }
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({
        posts: data
      }))     
  }

  render(){
    return(
      <div>
      <Posts newPost={this.state.posts}/>    
      </div>
    )
  }
}

export default Weather;