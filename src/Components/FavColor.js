import React, {Component} from 'react';


class FavColor extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

  }

  onChange(e){
    this.setState({
      value: e.target.value
    })

  }

  onSubmit(e){
    alert(this.state.value)
    e.preventDefault()
  }
 

  render(){
    const color = ['white', 'black', 'red', 'grape', 'orange'];
    return(
      <form onSubmit={this.onSubmit}>
        <label> Pick your favorite flavor:</label>
        <select type='dropdown' value={this.state.value} onChange={this.onChange}>
          {color.map((val,key) =>{ return <option key={key}>{val}</option>})}
        </select>
        <input type="submit" value="Submit" />
      </form>
    )
  }


}

export default FavColor;