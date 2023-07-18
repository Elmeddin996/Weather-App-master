import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AppProvider } from './context';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <AppProvider>

      <BrowserRouter>
      <Routes>

        <Route path='*' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
     </AppProvider>
    </div>
  );
}

export default App;
