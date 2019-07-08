import React from 'react'
import './Posts.css';

function Posts({newPost}) {
  return (
    <div>
      {newPost.map((x, index) => {
        return (
          <div key={index} className='box-container'>
              <p>Name of the person: {x.name}</p>
              <p>UserName : {x.username}</p>
              <p>Zip Code : {x.address.zipcode}</p>
              <p>Company: {x.company.name}</p>
          </div>
        )
      }
      )}
    </div>
  )
}

export default Posts
