import Navbar from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
