import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Services from './Pages/Services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
