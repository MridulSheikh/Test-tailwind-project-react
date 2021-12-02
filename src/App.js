import './App.css';
import Header from './commponent/header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './commponent/Home/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Header /> 
   <Routes>
   <Route path="/" element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
