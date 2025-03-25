import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="pt-20 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (value: boolean) => void }) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-amber-500' : 'text-white';
  };

  return (
    <header className="bg-black shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-amber-500" />
            <div className="hidden md:block">
              <h1 className="text-white text-xl">SRI VIJAYA DURGA</h1>
              <h2 className="text-amber-500 text-sm">PVC MATERIALS</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} hover:text-amber-500 transition-colors`}>
              Home
            </Link>
            <Link to="/products" className={`${isActive('/products')} hover:text-amber-500 transition-colors`}>
              Products
            </Link>
            <Link to="/gallery" className={`${isActive('/gallery')} hover:text-amber-500 transition-colors`}>
              Gallery
            </Link>
            <Link to="/services" className={`${isActive('/services')} hover:text-amber-500 transition-colors`}>
              Services
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-amber-500 transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-white hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-white hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-white hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-amber-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="text-white">SRI VIJAYA DURGA</h3>
                <p className="text-amber-500 text-sm">PVC MATERIALS</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Your trusted partner for quality PVC materials and solutions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/products" className="block text-gray-400 hover:text-white">Products</Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-white">Gallery</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">Services</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <span className="block text-gray-400">PVC Pipes</span>
              <span className="block text-gray-400">UPVC Fittings</span>
              <span className="block text-gray-400">CPVC Products</span>
              <span className="block text-gray-400">Plumbing Solutions</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>D.No. 6-6-6, Siddabathula Veedhi</p>
              <p>Near Chinna Veedhi</p>
              <p>VIZIANAGARAM - 535001</p>
              <p>Phone: 9000087627, 9703972782</p>
              <p>Email: sirivurisaikumar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Sri Vijaya Durga PVC Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;