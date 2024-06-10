import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Services from './Pages/Services'
import Work from './Pages/Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Work/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
