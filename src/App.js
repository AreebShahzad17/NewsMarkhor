//import logo from './logo.svg';
//import './App.css';
import React, { useState} from 'react'
import NavBarNews from './Components/NavBarNews';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './Components/Login'
import { useAuth0 } from "@auth0/auth0-react";
import AboutUs from './Components/AboutUs';





const App=()=>  {
  const { isAuthenticated } = useAuth0();

  const apikey= "6a7ee4c8b8d1427c8f98ae3c50dd30ea"
  const[progress,setProgress]=useState(0)


  
    return (
      <Router>
       <div>
        {isAuthenticated && <NavBarNews />}
        <LoadingBar color='#f11946' height={3} progress={progress}/>
      </div>

      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>
      <Route path="/" element={isAuthenticated ? <News setProgress={setProgress} apikey={apikey}  key={"general"} pageSize={20} country="us" category ="general"/> : <Login />} />
      <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey}  key={"business"} pageSize={8} country="us" category ="business"/>}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key={"entertainment"} pageSize={8} country="us" category ="entertainment"/>}/>
      <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey}  key={"general"} pageSize={8} country="us" category ="general"/>}/>
      <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}  key={"health"} pageSize={8} country="us" category ="health"/>}/>
      <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey}  key={"science"} pageSize={8} country="us" category ="science"/>}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key={"sports"} pageSize={8} country="us" category ="sports"/>}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key={"technology"} pageSize={8} country="us" category ="technology"/>}/>
      </Routes>

      </Router>
    )
  }
  export default App
