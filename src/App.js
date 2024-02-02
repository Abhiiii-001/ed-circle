import './App.css';
import Navbar from './Components/Navbar'
import Courses from './Pages/Courses';
import Support from './Components/Support';
import About from './Pages/About';
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
function App() {


  return (
    <div className="App ">
       <Navbar/>



       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route/>
        </Routes>
    </div>
  );
}

export default App;
