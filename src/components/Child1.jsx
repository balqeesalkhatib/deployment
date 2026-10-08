import React from 'react'
import Child2 from './Child2'

const Child1 = ({name}) => {
  console.log(name);
  
  return (
    <div className='child1'>Child1
    <Child2 studentName={name}/>
    </div>
  )
}

export default Child1