import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewMenu from './pages/NewMenu';
import CoffeeTea from './pages/CoffeeTea';
import About from './pages/About';
import Navbar from './components/NavBar';
import FloatingSidebar from './components/FloatingSidebar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingSidebar />
      <div className="pt-[138px] min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/new" element={<NewMenu />} />
          <Route path="/menu/coffeetea" element={<CoffeeTea />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App