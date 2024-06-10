import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Services from './Pages/Services'
import Work from './Pages/Work';
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
