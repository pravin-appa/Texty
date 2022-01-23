import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);  
    }, 1200);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert ("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert ("Light mode enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
     <div className="container my-3" >
     <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
            
          
          <Route path="/" element={<FormText heading = "Texty - word counter, character counter, extra space remover" mode={mode}/>} />
          
        </Routes>
      </div>
    </Router>
     
           
      
    </>
    
  );
}

export default App;
