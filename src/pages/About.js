import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
`;

const AboutContent = styled.div`
  h2 {
    color: #FF6B35;
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 60px auto;
  padding: 40px 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #FF6B35;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-end' : 'flex-start'};
  padding-right: ${props => props.position === 'left' ? '50%' : '0'};
  padding-left: ${props => props.position === 'left' ? '0' : '50%'};
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: ${props => props.position === 'left' ? 'calc(100% - 25px)' : '25px'};
    top: 20px;
    width: 16px;
    height: 16px;
    background: #FF6B35;
    border-radius: 50%;
  }
`;

const TimelineContent = styled.div`
  background: ${props => props.isDark ? '#1f1f1f' : 'white'};
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);

  h3 {
    color: #FF6B35;
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.isDark ? '#cccccc' : '#666'};
    font-size: 14px;
  }

  span {
    color: ${props => props.isDark ? '#999' : '#888'};
    font-size: 12px;
    display: block;
    margin-top: 10px;
  }
`;

function About({ isDark }) {
  const journeyEvents = [
    {
      year: 2018,
      title: "Started Photography Journey",
      description: "Bought my first DSLR and began exploring photography as a hobby"
    },
    {
      year: 2019,
      title: "First Wedding Shoot",
      description: "Successfully completed my first wedding photography assignment"
    },
    {
      year: 2020,
      title: "Studio Setup",
      description: "Established my own photography studio and started portrait photography"
    },
    {
      year: 2021,
      title: "Award Recognition",
      description: "Won Best Wedding Photography award at the Annual Photography Summit"
    },
    {
      year: 2023,
      title: "International Projects",
      description: "Expanded services to destination weddings and international events"
    },
    {
      year: 2025,
      title: "Future Goals",
      description: "Planning to launch photography workshops and mentoring programs"
    }
  ];

  return (
    <AboutContainer>
      <AboutSection>
        <ProfileImage 
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
          alt="Professional Photographer"
        />
        <AboutContent isDark={isDark}>
          <h2>About Me</h2>
          <p>Hello! I'm a passionate photographer with over 5 years of experience capturing life's most precious moments. My journey in photography began with a simple desire to freeze beautiful moments in time.</p>
          <p>Specializing in wedding photography, portraits, and events, I bring a unique perspective to every shoot. My style combines traditional elegance with modern creativity, ensuring each photo tells its own story.</p>
          <p>When I'm not behind the camera, I'm either exploring new locations for perfect shots or learning about the latest photography techniques and equipment.</p>
        </AboutContent>
      </AboutSection>

      <h2 style={{ textAlign: 'center', color: '#FF6B35', marginBottom: '40px' }}>My Journey</h2>
      <Timeline>
        {journeyEvents.map((event, index) => (
          <TimelineItem
            key={event.year}
            position={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineContent isDark={isDark}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span>{event.year}</span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </AboutContainer>
  );
}

export default About;