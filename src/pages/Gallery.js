import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const GalleryContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.isDark ? '#121212' : '#FFF5EC'};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ImageCard = styled(motion.div)`
  background: ${props => props.isDark ? '#1E1E1E' : 'white'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .info {
    padding: 20px;
    h3 {
      color: #FF6B35;
      margin-bottom: 10px;
    }
    p {
      color: ${props => props.isDark ? '#ffffff' : '#666'};
    }
  }
`;

// Add this styled component
const LogoutButton = styled(motion.button)`
  background: #FF6B35;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: 100px;
  right: 20px;
  
  &:hover {
    background: #FF8B55;
  }
`;

function Gallery({ isDark }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Add sample images data
  const images = [
    {
      id: 1,
      title: "Wedding Ceremony",
      url: "https://source.unsplash.com/random/800x600/?wedding",
      date: "2023-12-15"
    },
    {
      id: 2,
      title: "Family Portrait",
      url: "https://source.unsplash.com/random/800x600/?family",
      date: "2023-12-16"
    },
    {
      id: 3,
      title: "Nature Photography",
      url: "https://source.unsplash.com/random/800x600/?nature",
      date: "2023-12-17"
    },
    {
      id: 4,
      title: "Urban Landscape",
      url: "https://source.unsplash.com/random/800x600/?city",
      date: "2023-12-18"
    }
  ];

  if (!currentUser) {
    return <Navigate to="/client-login" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/client-login');
  };

  return (
    <GalleryContainer isDark={isDark}>
      <LogoutButton
        onClick={handleLogout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Logout
      </LogoutButton>
      
      <h1 style={{color: '#FF6B35', marginBottom: '20px'}}>Your Photo Gallery</h1>
      <p style={{color: isDark ? '#ffffff' : '#666'}}>
        Welcome back! Here are your photography sessions.
      </p>

      <GalleryGrid>
        {images.map(image => (
          <ImageCard 
            key={image.id}
            isDark={isDark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image.url} alt={image.title} />
            <div className="info">
              <h3>{image.title}</h3>
              <p>Date: {image.date}</p>
            </div>
          </ImageCard>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

export default Gallery;