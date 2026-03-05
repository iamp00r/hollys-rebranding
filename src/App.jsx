import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewMenu from './pages/NewMenu';
import CoffeeTea from './pages/CoffeeTea';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/new" element={<NewMenu />} />
        <Route path="/menu/coffee-tea" element={<CoffeeTea />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App