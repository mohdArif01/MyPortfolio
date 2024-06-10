import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
