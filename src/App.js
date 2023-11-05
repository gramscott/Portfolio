import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeContainer/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
