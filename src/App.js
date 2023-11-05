import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Components/login/Login'
import Admin from './Components/admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/login' element={<Login/>}/>
        <Route exact path = '/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
