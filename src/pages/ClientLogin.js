import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 400px;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
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
  color: ${props => props.isDark ? '#FFE6D9' : '#333'};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#3D2E2A' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  color: ${props => props.isDark ? '#FFE6D9' : '#333'};
`;

const LoginButton = styled.button`
  width: 100%;
  background: #FF6B35;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #FF8B55;
  }
`;

function ClientLogin({ isDark }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/client-portal');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <LoginForm isDark={isDark} onSubmit={handleSubmit}>
        <h2 style={{ color: '#FF6B35', marginBottom: '20px' }}>Client Login</h2>
        {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}
        
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

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default ClientLogin;