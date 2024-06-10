import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Services from './Pages/Services'
import Work from './Pages/Work';
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
