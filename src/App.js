import './App.css';
import './Stl.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Nav from './Nav';
import Sho from './Sho';
import Aboutnextpage from './Aboutnextpage';
import Service1 from './Service1';
import Blogs1 from './Blogs1'
import Contact1 from './Contact1';
function App() {
  return (<div className='app'>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Sho/>}/>
       <Route path='/about' element={<Aboutnextpage />} />
       <Route path='/service' element={<Service1/>}/>
       <Route path='/blog' element={<Blogs1/>}/>
       <Route path='/contacts' element={<Contact1/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
