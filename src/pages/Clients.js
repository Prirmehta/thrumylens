import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ClientsContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.isDark ? '#000000' : '#ffffff'};
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    color: #FF6B35;
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 60px 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.isDark ? '#1A1A1A' : 'white'};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
  text-align: center;

  i {
    font-size: 36px;
    color: #FF6B35;
    margin-bottom: 20px;
  }

  h3 {
    color: ${props => props.isDark ? '#ffffff' : '#333'};
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const LoginButton = styled(Link)`
  display: inline-block;
  background: #FF6B35;
  color: white;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background: #FF8B55;
    transform: translateY(-2px);
  }
`;

const ClientContainer = styled.section`
  padding: 120px 20px;
  background: ${props => props.isDark ? '#000000' : '#ffffff'};
`;

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClientCard = styled(motion.div)`
  background: ${props => props.isDark ? '#1A1A1A' : '#ffffff'};
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.15);
`;

const ClientImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 3px solid #FF6B35;
`;

const ClientName = styled.h3`
  color: #FF6B35;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ClientRole = styled.p`
  color: ${props => props.isDark ? '#ffffff' : '#333333'};
  font-size: 16px;
  margin-bottom: 15px;
`;

const ClientTestimonial = styled.p`
  color: ${props => props.isDark ? '#ffffff' : '#333333'};
  line-height: 1.6;
  font-style: italic;
`;

function Clients({ isDark }) {
  return (
    <ClientsContainer isDark={isDark}>
      <HeroSection isDark={isDark}>
        <h1>Client Area</h1>
        <p>Access your private photo collections, download high-resolution images, and share your memories with loved ones.</p>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard 
          isDark={isDark}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-lock"></i>
          <h3>Secure Access</h3>
          <p>Your photos are protected with secure login and private galleries.</p>
        </FeatureCard>

        <FeatureCard 
          isDark={isDark}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-download"></i>
          <h3>Easy Downloads</h3>
          <p>Download your high-resolution photos with just one click.</p>
        </FeatureCard>

        <FeatureCard 
          isDark={isDark}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <i className="fas fa-share-alt"></i>
          <h3>Share Memories</h3>
          <p>Share your gallery with family and friends securely.</p>
        </FeatureCard>
      </FeaturesGrid>

      <CTASection>
        <LoginButton to="/client-login">
          Access Your Gallery
        </LoginButton>
      </CTASection>
    </ClientsContainer>
  );
}

export default Clients;