import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import { Routes, Route, HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/eis.github.io/' element={<Hero />} />
        <Route path='/eis.github.io/about' element={<About />} />
        <Route path='/eis.github.io/contact' element={<Contact />} />
        <Route path='/eis.github.io/services' element={<Services />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
