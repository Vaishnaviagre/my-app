import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import About from './About';
 import {
   BrowserRouter as Router,
   Routes,
   Route
  
 } from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
      setAlert(null),
      2000)
    
  }

  const greenMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#1F4529'
      showAlert("Green dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    
  }

  const toggleMode = (cls)=>{
    
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
   <>
   <Router>
  <Navbar title="My App" mode={mode} toggleMode={toggleMode} greenMode={greenMode} aboutText='About us'/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
      <Route path='/about' element={<About mode={mode} />}/>   
      <Route path='/' element={ <TextForm showAlert={showAlert} heading="Try TextUtils- Word counter, Character counter, Remove extra spaces" mode={mode} greenMode={greenMode}/>}/>
  </Routes>
  </div>
  </Router>
   </>

  );
}

export default App;
