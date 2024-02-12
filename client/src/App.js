import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={authUser ? <navigate to='/login' /> : <Signup/>} />
      </Routes>
      <Toaster/>
     
    </div>
  );
};

export default App;
