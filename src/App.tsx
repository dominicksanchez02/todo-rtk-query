
import { ToastContainer } from 'react-toastify';
import CounterPage from './pages/counter';
import ClientPhonesPage from './pages/client-phones';
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientPhonesPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
