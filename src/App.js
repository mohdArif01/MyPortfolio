import './App.css';

import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
