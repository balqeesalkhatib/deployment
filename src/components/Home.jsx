import React from 'react'
import Child1 from './Child1'

const Home = ({name}) => {
  console.log(name);
  
  return (
    <div className='Home'>Home
    <Child1 name={name}/>
    </div>
  )
}

export default Home