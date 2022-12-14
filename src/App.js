import 'App.css';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import NavBar from 'components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from 'components/pages/Services';
import Contact from 'components/pages/Contact';
import Footer from 'components/Footer';

export default function App() {
  return (
    <Router>
      <div className='App text-slate-700 font-italiana'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
