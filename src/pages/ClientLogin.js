import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 400px;
  margin: 0 auto;
  background: ${props => props.isDark ? '#000000' : '#FFF5EC'};
`;

const LoginForm = styled(motion.form)`
  background: ${props => props.isDark ? '#1A1A1A' : 'white'};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.isDark ? '#ffffff' : '#333'};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#333333' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#000000' : 'white'};
  color: ${props => props.isDark ? '#ffffff' : '#333'};
`;

const LoginButton = styled(motion.button)`
  background: #FF6B35;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  
  &:hover {
    background: #FF8B55;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  margin-top: 10px;
  text-align: center;
`;

function ClientLogin({ isDark }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      navigate('/gallery');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginContainer isDark={isDark}>
      <LoginForm
        isDark={isDark}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{color: '#FF6B35', marginBottom: '30px', textAlign: 'center'}}>
          Client Login
        </h2>
        
        <FormGroup>
          <Label isDark={isDark}>Email</Label>
          <Input 
            type="email"
            isDark={isDark}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label isDark={isDark}>Password</Label>
          <Input 
            type="password"
            isDark={isDark}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default ClientLogin;