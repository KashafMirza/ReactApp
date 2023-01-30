
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
 
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not
   //mode ek state var h to isy directly = likh kr assign nae kr sakty isy function me likhna parna
  const toggleMode=()=>{          
    if(mode==='light'){
      setMode('dark');    //this is correct way
     // setMode='dark'  //this is wrong way
     //now full page py mode enable krny ky lye
     document.body.style.backgroundColor = '#042743';
     showAlert("DarkMode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled","success");
    }
  }
  //for aert state :make state for alert: alert is a state var
  const [alert, setAlert]=useState(null);           //here alert is null
  //make arrow function for alert
  const showAlert=(message,type)=>{    // here alert is an object
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
       setAlert(null); 
     }, 2000);
  }

  return (
    <>
      <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     {/* state var alert is pass to alert */}
     <Alert alert={alert}/> 
      <div className="container my-3">
      <Switch> 
           <Route exact path="/about"> 
             <About  mode={mode} /> 
           </Route>  
           <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter,Character Counter,Remove extra spaces" mode={mode} />
          </Route> 
        </Switch>    
     </div> 
     </Router>
    </>
  );
}

export default App;
