
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="xrdctfvgybuyh"/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
