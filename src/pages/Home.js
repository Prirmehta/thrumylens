import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
  background-image: url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 65px;
  font-weight: 600;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  text-shadow: none;
  color: #000000;
  margin-top: 10px;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatBox = styled.div`
  background: ${props => props.bgColor};
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid ${props => props.bgColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h2`
  font-size: 42px;
  color: white;
  margin-bottom: 8px;
`;

const StatLabel = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const FeaturedWorks = styled.section`
  padding: 80px 20px;
  background: #FFF5EC;
  position: relative;
  
  h2 {
    text-align: center;
    color: #FF6B35;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const FeaturedCard = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(255, 107, 53, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 20px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  class: overlay;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .details {
    font-size: 12px;
    opacity: 0.8;
    margin-bottom: 5px;
  }

  span {
    display: inline-block;
    background: #FF6B35;
    padding: 5px 10px;
    border-radius: 15px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const JourneyButton = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 30px;
  background-color: #FF6B35;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF8B55;
    transform: translateY(-2px);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 107, 53, 0.8);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 24px;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 53, 1);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const ReviewsSection = styled.section`
  padding: 80px 20px;
  background: ${props => props.isDark ? '#2A1F1D' : '#FFF5EC'};
  text-align: center;
  
  h2 {
    color: #FF6B35;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const ReviewCard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: ${props => props.isDark ? '#3D2E2A' : 'white'};
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);

  p {
    color: ${props => props.isDark ? '#FFE6D9' : '#666'};
    font-size: 18px;
    line-height: 1.8;
    font-style: italic;
    margin-bottom: 20px;
  }

  h4 {
    color: #FF6B35;
    font-size: 20px;
    margin-bottom: 5px;
  }

  span {
    color: ${props => props.isDark ? '#FFE6D9' : '#888'};
    font-size: 14px;
  }
`;

const featuredWorks = [
  {
    id: 1,
    title: "Sunset Wedding Story",
    description: "A beautiful summer wedding at the beach during golden hour",
    category: "Wedding",
    photographer: "Emma Thompson",
    location: "Malibu Beach, California",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a"
  },
  {
    id: 2,
    title: "Mountain Majesty",
    description: "Capturing the raw beauty of sunrise over the peaks",
    category: "Nature",
    photographer: "David Chen",
    location: "Yosemite National Park",
    date: "September 3, 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    description: "Annual technology conference highlighting future innovations",
    category: "Event",
    photographer: "Marcus Williams",
    location: "Silicon Valley Convention Center",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865"
  },
  {
    id: 4,
    title: "Urban Portrait Series",
    description: "Contemporary portrait session in urban settings",
    category: "Portrait",
    photographer: "Sofia Garcia",
    location: "Downtown Art District, New York",
    date: "July 28, 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 5,
    title: "Alpine Adventure",
    description: "Dawn expedition capturing mountain wilderness",
    category: "Nature",
    photographer: "James Morrison",
    location: "Swiss Alps, Zermatt",
    date: "August 5, 2023",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    id: 6,
    title: "Haute Couture",
    description: "High fashion editorial shoot for Vogue",
    category: "Fashion",
    photographer: "Isabella Laurent",
    location: "Paris Fashion Week",
    date: "September 30, 2023",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae"
  }
];

const reviews = [
  {
    id: 1,
    text: "Absolutely amazing experience! The photos captured our special day perfectly. Every moment was beautifully documented.",
    name: "Sarah Johnson",
    event: "Wedding Photography"
  },
  {
    id: 2,
    text: "Professional, creative, and incredibly talented. The corporate event photos exceeded our expectations.",
    name: "Michael Chen",
    event: "Corporate Event"
  },
  {
    id: 3,
    text: "Our family portraits turned out stunning. The photographer made everyone feel comfortable and natural.",
    name: "Emily Rodriguez",
    event: "Family Session"
  }
];

function Home({ isDark }) {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Add these hooks
  const [experienceCount, experienceRef] = useCountAnimation(15);
  const [projectsCount, projectsRef] = useCountAnimation(105);
  const [awardsCount, awardsRef] = useCountAnimation(7);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(featuredWorks.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle>Capturing Life's Beautiful Moments</HeroTitle>
          <HeroSubtitle>Professional Photography Services</HeroSubtitle>
          <JourneyButton to="/about">Explore More</JourneyButton>
        </HeroContent>
      </HeroSection>

      <FeaturedWorks>
        <h2>Featured Works</h2>
        <ArrowButton className="prev" onClick={prevPage}>&larr;</ArrowButton>
        <ArrowButton className="next" onClick={nextPage}>&rarr;</ArrowButton>
        <FeaturedGrid>
          <AnimatePresence mode='wait'>
            {featuredWorks
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((work) => (
                <FeaturedCard
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={work.image} alt={work.title} />
                  <CardOverlay className="overlay">
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <div className="details">
                      <p>Photographer: {work.photographer}</p>
                      <p>Location: {work.location}</p>
                      <p>Date: {work.date}</p>
                    </div>
                    <span>{work.category}</span>
                  </CardOverlay>
                </FeaturedCard>
            ))}
          </AnimatePresence>
        </FeaturedGrid>
      </FeaturedWorks>

      <ReviewsSection isDark={isDark}>
        <h2>Client Reviews</h2>
        <AnimatePresence mode="wait">
          <ReviewCard
            key={reviews[currentReview].id}
            isDark={isDark}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p>"{reviews[currentReview].text}"</p>
            <h4>{reviews[currentReview].name}</h4>
            <span>{reviews[currentReview].event}</span>
          </ReviewCard>
        </AnimatePresence>
      </ReviewsSection>

      {/* Stats Section */}
      <StatsSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StatBox 
          ref={experienceRef}
          bgColor="#FF6B35"
        >
          <StatNumber>{experienceCount}+</StatNumber>
          <StatLabel>Years of Experience</StatLabel>
        </StatBox>
        <StatBox 
          ref={projectsRef}
          bgColor="#FF8B55"
        >
          <StatNumber>{projectsCount}+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatBox>
        <StatBox 
          ref={awardsRef}
          bgColor="#FFA675"
        >
          <StatNumber>{awardsCount}</StatNumber>
          <StatLabel>Awards Received</StatLabel>
        </StatBox>
      </StatsSection>
    </>
  );
}

export default Home;