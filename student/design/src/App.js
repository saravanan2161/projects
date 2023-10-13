import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connect from './connect';
import HomePage from './home';
import GetStud from './fetchStud';
import AddStud from './insertStud';
import UpdateStud from './updateStud';
import DeleteStud from './dltStud';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addStud" element={<AddStud />} />
        <Route path="/getAll" element={<Connect />} />
        <Route path="/getStud" element={<GetStud />} />
        <Route path="/updateStud" element={<UpdateStud />} />
        <Route path="/deleteStud" element={<DeleteStud />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
