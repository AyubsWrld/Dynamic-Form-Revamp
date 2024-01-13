import { useState } from 'react'
import Form from '../components/Input.jsx'
function App() {
  

  return (
    <form >

      <Form placeholder = "your name.." content ="Fullname"/>  
      <Form placeholder = "your email.." content="Email"/>  
      <Form placeholder = "Phone #" content="Phone #"/>  
      <Form placeholder = "Date..." content="Date & Time"/>  

    </form> 
   )
}

export default App
