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

function Work({ isDark }) {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'nature', label: 'Nature' },
    { id: 'event', label: 'Events' }
  ];

  const works = [
    {
      id: 1,
      title: 'Summer Wedding',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a'
    },
    {
      id: 2,
      title: 'Mountain Landscape',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      id: 4,
      title: 'Portrait Session',
      category: 'portrait',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    }
    // Add more works as needed
  ];

  const filteredWorks = filter === 'all' 
    ? works 
    : works.filter(work => work.category === filter);

  return (
    <WorkContainer>
      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category.id}
            active={filter === category.id}
            isDark={isDark}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterContainer>

      <GalleryGrid>
        <AnimatePresence>
          {filteredWorks.map(work => (
            <GalleryItem
              key={work.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={work.image} alt={work.title} />
              <ItemOverlay className="overlay">
                <ItemTitle>{work.title}</ItemTitle>
                <ItemCategory>{work.category}</ItemCategory>
              </ItemOverlay>
            </GalleryItem>
          ))}
        </AnimatePresence>
      </GalleryGrid>
    </WorkContainer>
  );
}

export default Work;