import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const WorkContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1400px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border: 2px solid ${props => props.active ? '#FF6B35' : props.isDark ? '#333' : '#ddd'};
  background: ${props => props.active ? '#FF6B35' : 'transparent'};
  color: ${props => {
    if (props.active) return 'white';
    return props.isDark ? '#ffffff' : '#333';
  }};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #FF6B35;
    color: ${props => props.active ? 'white' : '#FF6B35'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  class: overlay;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ItemCategory = styled.span`
  background: #FF6B35;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 14px;
`;

const TeamSection = styled.section`
  padding: 80px 20px;
  background: ${props => props.isDark ? '#000000' : '#ffffff'};
`;

const TeamTitle = styled.h1`
  text-align: center;
  color: #FF6B35;
  font-size: 48px;
  margin-bottom: 50px;
`;

const TeamSubtitle = styled.p`
  text-align: center;
  color: ${props => props.isDark ? '#ffffff' : '#666'};
  font-size: 20px;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PhotographerCard = styled(motion.div)`
  position: relative;
  background: ${props => props.isDark ? '#000000' : '#ffffff'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .hover-overlay {
    opacity: 1;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: rgba(255, 107, 53, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 20px;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
`;

const PhotographerInfo = styled.div`
  padding: 20px;
  text-align: center;
  background: ${props => props.isDark ? '#000000' : '#ffffff'};

  h3 {
    color: #FF6B35;
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    font-size: 16px;
    margin-bottom: 15px;
  }

  .specialty {
    display: inline-block;
    background: ${props => props.isDark ? '#333' : '#FFE6D9'};
    color: #FF6B35;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 14px;
  }
`;

const PortfolioModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  padding: 40px;
  overflow-y: auto;
`;

const PortfolioContent = styled(motion.div)`
  background: ${props => props.isDark ? '#000000' : '#ffffff'};
  border-radius: 20px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ModalInfo = styled.div`
  .photographer-info {
    margin-bottom: 30px;
  }

  h2, h3 {
    color: #FF6B35;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  .bio {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    font-size: 18px;
    margin-bottom: 20px;
  }

  .credentials {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;

    span {
      color: #FF6B35;
      font-weight: 600;
    }

    p {
      color: ${props => props.isDark ? '#ffffff' : '#666'};
    }
  }

  .awards {
    h4 {
      color: #FF6B35;
      margin-bottom: 10px;
    }
    p {
      color: ${props => props.isDark ? '#ffffff' : '#666'};
      margin-bottom: 5px;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const photographers = [
  {
    id: 1,
    name: "Emma Thompson",
    specialty: "Wedding Photography",
    experience: "8 years",
    education: "Fine Arts, Photography - NYU",
    awards: ["Best Wedding Photography 2022", "Creative Excellence Award"],
    bio: "Specializing in capturing life's most precious moments with an artistic touch",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    portfolio: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1537633552985-df8cae7a17b4"
    ]
  },
  {
    id: 2,
    name: "David Chen",
    specialty: "Landscape Photography",
    experience: "10 years",
    education: "Photography Institute, London",
    awards: ["Nature Photographer of the Year 2023"],
    bio: "Capturing nature's raw beauty",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    portfolio: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    ]
  },
  {
    id: 3,
    name: "Sofia Garcia",
    specialty: "Portrait Photography",
    experience: "6 years",
    education: "Arts Institute of Chicago",
    awards: ["Portrait Excellence Award 2023"],
    bio: "Creating timeless portraits",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    portfolio: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    ]
  },
  {
    id: 4,
    name: "Marcus Williams",
    specialty: "Event Photography",
    experience: "12 years",
    education: "Royal College of Art, UK",
    awards: ["Event Photography Excellence 2022"],
    bio: "Documenting your special events",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    portfolio: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    ]
  },
  {
    id: 5,
    name: "Isabella Laurent",
    specialty: "Fashion Photography",
    experience: "9 years",
    education: "Parsons School of Design",
    awards: ["Fashion Photo Award 2023", "Style Innovator 2022"],
    bio: "Fashion and editorial specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    portfolio: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31",
    ]
  },
  {
    id: 6,
    name: "James Morrison",
    specialty: "Wildlife Photography",
    experience: "15 years",
    education: "National Geographic Institute",
    awards: ["Wildlife Photographer of the Year 2023"],
    bio: "Exploring the wild through my lens",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    portfolio: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
      "https://images.unsplash.com/photo-1504173010664-32509aeebb62",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    ]
  }
];

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #FF6B35;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #ff8555;
    transform: scale(1.1);
  }
`;

function Work({ isDark }) {
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);

  return (
    <TeamSection isDark={isDark}>
      <TeamTitle>Photographer's Work</TeamTitle>
      <TeamSubtitle>Meet the artists behind the lens</TeamSubtitle>
      <TeamGrid>
        {photographers.map((photographer) => (
          <PhotographerCard
            key={photographer.id}
            onClick={() => setSelectedPhotographer(photographer)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            isDark={isDark}
          >
            <img src={photographer.image} alt={photographer.name} />
            <HoverOverlay className="hover-overlay">
              View Portfolio
            </HoverOverlay>
            <PhotographerInfo isDark={isDark}>
              <h3>{photographer.name}</h3>
              <p>{photographer.bio}</p>
              <span className="specialty">{photographer.specialty}</span>
            </PhotographerInfo>
          </PhotographerCard>
        ))}
      </TeamGrid>

      <AnimatePresence>
        {selectedPhotographer && (
          <PortfolioModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PortfolioContent isDark={isDark}>
              <CloseButton onClick={() => setSelectedPhotographer(null)}>×</CloseButton>
              <ModalInfo isDark={isDark}>
                <div className="photographer-info">
                  <h2>{selectedPhotographer.name}</h2>
                  <p className="bio">{selectedPhotographer.bio}</p>
                  <div className="credentials">
                    <p><span>Specialty:</span> {selectedPhotographer.specialty}</p>
                    {selectedPhotographer.experience && (
                      <p><span>Experience:</span> {selectedPhotographer.experience}</p>
                    )}
                    {selectedPhotographer.education && (
                      <p><span>Education:</span> {selectedPhotographer.education}</p>
                    )}
                  </div>
                  {selectedPhotographer.awards && (
                    <div className="awards">
                      <h4>Awards & Recognition</h4>
                      {selectedPhotographer.awards.map((award, index) => (
                        <p key={index}>{award}</p>
                      ))}
                    </div>
                  )}
                </div>
                <h3>Portfolio Gallery</h3>
                <PortfolioGrid>
                  {selectedPhotographer.portfolio.map((photo, index) => (
                    <img key={index} src={photo} alt={`Portfolio ${index + 1}`} />
                  ))}
                </PortfolioGrid>
              </ModalInfo>
            </PortfolioContent>
          </PortfolioModal>
        )}
      </AnimatePresence>
    </TeamSection>
  );
}

export default Work;
