import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.isDark ? '#121212' : '#FFF5EC'};
  padding: 40px 20px;
  margin-top: 60px;
  transition: all 0.3s ease;
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