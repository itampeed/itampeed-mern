import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/index.js';
import Contact from './Screens/Contact/index.js';
import Youtube from './Screens/Youtube/index.js';
import Projects from './Screens/Projects/index.js';
import Navbar from './Components/Navbar/index.js';
import Footer from './Components/Footer/index.js';
import Login from './Screens/Login/index.js';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/youtube' element={<Youtube />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
