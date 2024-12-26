import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import Services from './pages/services';

function App() {
  return (
      <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />  
    </>
  );
}

export default App;
