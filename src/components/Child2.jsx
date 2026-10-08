
//! 4. on child component should import "dotContext"
import {dotContext}from "../App"
//! 5. import useContext from react
import { useContext } from "react";
const Child2 = ({studentName}) => {
    console.log(studentName);
    //! 6. useContext(dotContext)
    // const updatedData=useContext(dotContext);
    // console.log('updatedData',updatedData);
    const {name,student,id}=useContext(dotContext);
    console.log(id);
    
    return (
        <div className='child2'>Child2
        <h2>Name: {studentName}</h2>
        <h3>Name: {name}</h3>
        <h3>{student.name}</h3>
          <h3>{student.age}</h3>
          {id===5 && <p>My name is : {name}</p>}
        </div>
    )
}

export default Child2

