import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Main from './Components/Main';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />


    </div>
  );
}

export default App;
