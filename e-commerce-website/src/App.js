import './App.css';
import { ProductPage } from './components/main/ProductPage';
import { Nav } from './components/nav/Nav';
import { Login } from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/signup/SignUp';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
