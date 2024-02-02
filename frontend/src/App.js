import Navbar from './components/Navbar';
import AddUser from './pages/AddUser';
import AddGame from './pages/AddGame';
import UpdateGame from './pages/UpdateGame';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addUser' element={<AddUser />}></Route>
          <Route path='/addGame' element={<AddGame />}></Route>
          <Route path='/updateGame/:id' element={<UpdateGame />}></Route>
          <Route path='/updateGame/:id' element={<UpdateGame />}></Route>
          <Route path='/updateUser/:id' element={<UpdateUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
