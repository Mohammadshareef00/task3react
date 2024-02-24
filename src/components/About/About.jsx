import { useState } from 'react'
 

function App() {
  
    
  let [count ,setcount]=useState(0);
  const changecounter =()=>{

    setcount(count+1);
     }
  
  return (
    <>
      <button onClick={changecounter}>count {count}</button>
       
    </>
  )
}

export default App

