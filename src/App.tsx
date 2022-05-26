import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Header from './components/Header';
import Members from './components/Members';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/members' element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
