import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LogoContainer = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Camera = styled(motion.div)`
  position: relative;
  width: 30px;
  height: 22px;
  background: #FF6B35;
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 7px;
    width: 14px;
    height: 5px;
    background: #FF6B35;
    border-radius: 4px 4px 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${props => props.isDark ? '#000000' : 'white'};
    border: 2px solid ${props => props.isDark ? '#ffffff' : '#333'};
    border-radius: 50%;
  }
`;

const Flash = styled(motion.div)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 6px;
  height: 6px;
  background: ${props => props.isDark ? '#ffffff' : 'white'};
  border-radius: 50%;
`;

const BrandName = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #FF6B35, #FF8B55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(255, 107, 53, 0.1);
`;

function Logo({ isDark }) {
  const navigate = useNavigate();

  return (
    <LogoContainer
      onClick={() => navigate('/')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Camera isDark={isDark}>
        <Flash 
          isDark={isDark}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Camera>
      <BrandName>thruMyLens</BrandName>
    </LogoContainer>
  );
}

export default Logo;