import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Components/login/Login'
import Admin from './Components/admin/Admin';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/login' element={<Login/>}/>
        <Route exact path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
