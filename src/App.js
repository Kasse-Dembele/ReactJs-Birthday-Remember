import React, {useReducer} from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import EditPage from './pages/EditPage';
import Error from './pages/Error';
import AddUserPage from "./pages/AddUserPage";
import data from './data'
import reducer from './reducer';
import FormComponent from './component/FormComponent';


function App() {
  const [state, dispatch] = useReducer(reducer, data)

  const clearAll = ()=>{
    dispatch({id:'CLEAR_ALL'})
  }

  const editUser = (payload)=>{
    dispatch({id:'EDIT_USER',payload})
  }

  const addUser = (payload) =>{
    dispatch({id:'ADD_USER',payload})
  }
  
  return (
    <Routes>
      <Route path="/" element={<Home people={state} clearAll={clearAll}/>} />
      <Route path="/person/:id" element={<FormComponent editUser={editUser}/>}/>
      <Route path='/add' element={<FormComponent addUser={addUser}/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
        
  );
}

export default App;
