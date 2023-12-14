import React, { useEffect,useState } from "react";
import Navbar from './component/Navbar';
import News from './component/News';
import './App.css';
import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=>{
  
  const [progress,setProgress]=useState(0);


  const myapiKey = "6b1e8dd06e624675bd1c0f117fe01cee";
const pageSize=18;


    
    return (
      <BrowserRouter>
      <>
         <Navbar />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}
      
      />

    
        
      <Routes>
        <Route path="/" element={ <News  setProgress={setProgress} apikey={myapiKey}key="generl" pageSize={pageSize} country="in" category="general"/>}> </Route>
        <Route exact path="/business" element={ <News  setProgress={setProgress} apikey={myapiKey}key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" element={ <News  setProgress={setProgress} apikey={myapiKey}key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route path="/general" element={ <News  setProgress={setProgress} apikey={myapiKey}key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route path="/health" element={ <News  setProgress={setProgress} apikey={myapiKey}key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route path="/science" element={ <News  setProgress={setProgress} apikey={myapiKey}key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route path="/sports" element={ <News  setProgress={setProgress} apikey={myapiKey}key="Sports" pageSize={pageSize} country="in" category="Sports"/>}></Route>
        <Route path="/technology" element={ <News  setProgress={setProgress} apikey={myapiKey}key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
      </Routes>
      
      </>
    </BrowserRouter>
   
    )

}

export default App; 