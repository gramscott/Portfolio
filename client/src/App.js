import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import AboutContainer from './containers/AboutContainer';
import ProjectContainer from './containers/ProjectContainer';
import ContactContainer from './containers/ContactContainer';
import ThankYou from './components/ContactComponents/ThankYou';


function App() {

  return (
    <div className="App">
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeContainer/>}/>
      <Route path="/about" element={<AboutContainer/>}/>
      <Route path="/projects" element={<ProjectContainer/>}/>
      <Route path="/contact" element={<ContactContainer/>}/>
      {/* <Route path="/thank-you" Component={<ThankYou/>}/> */}
    </Routes>
    </Router> 
    </div>
  );
}

export default App;
