import React from "react";
import Home from './components/webcomponent/Home';
import Contact from "./components/webcomponent/Contact";
import About from "./components/webcomponent/About";
import Service from "./components/webcomponent/Service";
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Navbar from './components/webcomponent/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from "./components/webcomponent/Footer";

const App = () => {

  // const navigate = useNavigate();

  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={ <Navigate replace to='/'/> }/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
