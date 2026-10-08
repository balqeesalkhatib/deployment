//! 1. import createContext fun
import React, { useState, createContext } from 'react'
import "./App.css"
import Home from './components/Home'
import Card from './components/Card';
//! 2. execute+export createContext
export const dotContext = createContext();
const App = () => {
  const [name, setName] = useState("Ezz")
  console.log(name);
const [student,setStudent]=useState({name:"Nagham",age:21})
  return (
    //! 3. dotContext.Provider
    <dotContext.Provider value={{name,student,id:5}}>
      <div className='App'>App
        <Card/>
        <Home name={name} />

      </div>
    </dotContext.Provider>

  )
}

export default App