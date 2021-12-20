import React from 'react'
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import EditPage from './pages/EditPage';
import Error from './pages/Error';
import AddUserPage from "./pages/AddUserPage";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/person/:id" element={<EditPage/>}/>
      <Route path='/form' element={<AddUserPage/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
        
  );
}

export default App;
