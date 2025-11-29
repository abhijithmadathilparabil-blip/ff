import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
