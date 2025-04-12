import styled from '@emotion/styled';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const PortalContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const AlbumCard = styled.div`
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const AlbumInfo = styled.div`
  padding: 20px;

  h3 {
    color: ${props => props.isDark ? '#FFE6D9' : '#333'};
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.isDark ? '#FFE6D9' : '#666'};
    font-size: 14px;
  }
`;

const LogoutButton = styled.button`
  background: #FF6B35;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: #FF8B55;
  }
`;

function ClientPortal({ isDark }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/client-login');
  };

  return (
    <PortalContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#FF6B35' }}>Welcome, {currentUser.name}</h2>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </div>

      <AlbumGrid>
        {currentUser.albums.map(album => (
          <AlbumCard key={album.id} isDark={isDark}>
            <img src={album.photos[0].url} alt={album.title} />
            <AlbumInfo isDark={isDark}>
              <h3>{album.title}</h3>
              <p>{album.date}</p>
            </AlbumInfo>
          </AlbumCard>
        ))}
      </AlbumGrid>
    </PortalContainer>
  );
}

export default ClientPortal;