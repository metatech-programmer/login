
import './App.css'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio.jsx';


function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}  />
      <Route exact path="/home" element={<Inicio/>}  />
      <Route path="/login" element={<Login/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </Router>
  );
}

export default App
