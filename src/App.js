import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import { Routes, Route, HashRouter, Link} from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/#">
        <Header />
        <Routes>
          <Route path="/#" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      
      {
        /*<Header />
        <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
  </Routes>*/}
    </HashRouter>
  );
}

export default App;
