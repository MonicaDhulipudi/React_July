import React from 'react'

const TakeIt = (props) => {
  console.log(props.children)
  return(
    <div>
    I want the inside value for Select and Option {props.children}
  </div>
  )
}
export default TakeIt;