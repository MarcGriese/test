import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Settings from './pages/settings/settings'

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Settings />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
