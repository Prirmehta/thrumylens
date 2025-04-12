/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import Footer from './components/Footer';
import ClientLogin from './pages/ClientLogin';
import ClientPortal from './pages/ClientPortal';
import Clients from './pages/Clients';
import PrivateRoute from './components/PrivateRoute';
import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/work" element={<Work isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
            <Route path="/blog" element={<Blog isDark={isDark} />} />
            <Route path="/clients" element={<Clients isDark={isDark} />} />
            <Route path="/contact" element={<Contact isDark={isDark} />} />
            <Route path="/client-login" element={<ClientLogin isDark={isDark} />} />
            <Route
              path="/client-portal/*"
              element={
                <PrivateRoute>
                  <ClientPortal isDark={isDark} />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer isDark={isDark} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;