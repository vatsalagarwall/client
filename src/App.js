import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Main from './Components/Main';

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

    </div>
  );
}

export default App;
