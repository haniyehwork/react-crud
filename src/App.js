import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

import { BrowserRouter , Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
