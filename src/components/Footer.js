import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.isDark ? '#000000' : 'white'};
  color: ${props => props.isDark ? '#FFE6D9' : '#333'};
  padding: 2rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const FooterLink = styled.a`
  color: ${props => props.isDark ? '#FF6B35' : '#333'};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.isDark ? '#FFE6D9' : '#FF6B35'};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #FF6B35;
  font-size: 24px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: #FF8B55;
  }
`;

const BookButton = styled(Link)`
  background: #FF6B35;
  color: ${props => props.isDark ? '#121212' : 'white'};
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF8B55;
    transform: translateY(-2px);
  }
`;

function Footer({ isDark }) {
  return (
    <FooterContainer isDark={isDark}>
      <FooterContent>
        <SocialLinks>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
        </SocialLinks>
        <BookButton to="/contact" isDark={isDark}>Book a Session</BookButton>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;