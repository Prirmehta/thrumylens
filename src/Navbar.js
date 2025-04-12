import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #FF6B35;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.isDark ? '#FFE6D9' : '#333'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #FF6B35;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin-left: 1rem;
`;

function Navbar({ isDark, setIsDark }) {
  return (
    <Nav isDark={isDark}>
      <NavContainer>
        <Logo to="/">ThruMyLens</Logo>
        <NavLinks>
          <NavLink to="/" isDark={isDark}>Home</NavLink>
          <NavLink to="/work" isDark={isDark}>Work</NavLink>
          <NavLink to="/about" isDark={isDark}>About</NavLink>
          <NavLink to="/blog" isDark={isDark}>Blog</NavLink>
          <NavLink to="/clients" isDark={isDark}>Clients</NavLink>
          <NavLink to="/contact" isDark={isDark}>Contact</NavLink>
          <ThemeToggle onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️' : '🌙'}
          </ThemeToggle>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;