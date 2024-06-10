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
        <Route path='/' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
