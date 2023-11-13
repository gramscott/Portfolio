import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutContainer from './containers/AboutContainer';
import ProjectContainer from './containers/ProjectContainer';
import ContactContainer from './containers/ContactContainer';


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
    </Routes>
    </Router>
    </div>
  );
}

export default App;
