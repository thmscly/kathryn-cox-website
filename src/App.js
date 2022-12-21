import 'App.css';
import NavBar from 'components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from 'components/Footer';
import Routing from 'components/Routing';

export default function App() {
  return (
    <Router>
      <div className='App text-slate-700 font-raleway min-w-screen content-center'>
        <NavBar />
        <div>
          <Routing />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
