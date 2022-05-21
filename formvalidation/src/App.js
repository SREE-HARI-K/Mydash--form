import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Signin from './components/Signin';
import Chart from './components/Chart';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route path="/Chart" element={<Chart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
