import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 120px 20px 60px;
  background: ${props => props.isDark ? '#2A1F1D' : '#FFF5EC'};
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  p {
    color: ${props => props.isDark ? '#FFE6D9' : '#666'};
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  .highlight {
    color: #FF6B35;
    font-weight: 600;
  }
`;

const AboutTitle = styled.h1`
  text-align: center;
  color: #FF6B35;
  font-size: 48px;
  margin-bottom: 50px;
`;

const ProfileSection = styled.div`
  margin-bottom: 60px;
`;

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto 30px;
  overflow: hidden;
  border: 4px solid #FF6B35;
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 80px auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #FF6B35;
    top: 0;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  padding: 20px;
  width: 50%;
  margin-left: ${props => props.align === 'right' ? '50%' : '0'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #FF6B35;
    border-radius: 50%;
    top: 50%;
    ${props => props.align === 'right' ? 'left: -10px;' : 'right: -10px;'}
  }
`;

const TimelineContent = styled.div`
  background: ${props => props.isDark ? '#3A2F2D' : 'white'};
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;

  h3 {
    color: #FF6B35;
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    margin-bottom: 0;
    text-align: left;
  }
`;

function About({ isDark }) {
  return (
    <AboutContainer isDark={isDark}>
      <AboutContent isDark={isDark}>
        <ProfileSection>
          <ProfileImage>
            <img src="/path-to-your-profile-photo.jpg" alt="Professional Photographer" />
          </ProfileImage>
          <AboutTitle>About Me</AboutTitle>
        </ProfileSection>

        <p>
          Combining 15 years of photography expertise with an MBA from Stanford Business School, 
          I've developed a unique approach that merges creative excellence with strategic business insight. 
          My journey in photography has equipped me with an intimate understanding of both the technical craft 
          and the emotional artistry that defines exceptional photography.
        </p>
        <p>
          As a photography consultant and talent curator, I bridge the gap between visionary clients 
          and exceptional photographers. Our boutique agency specializes in creating perfect matches, 
          ensuring every project benefits from both artistic brilliance and professional excellence.
        </p>
        <p className="highlight">
          We believe in the power of perfect partnerships. Through careful curation and detailed consultation, 
          we create harmonious collaborations that transform photographic visions into stunning realities.
        </p>

        <Timeline>
          <TimelineItem align="left">
            <TimelineContent isDark={isDark}>
              <h3>2008 - Photography Origins</h3>
              <p>Began professional photography journey, mastering the art of visual storytelling</p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem align="right">
            <TimelineContent isDark={isDark}>
              <h3>2013 - Business Mastery</h3>
              <p>Completed MBA, integrating business strategy with creative vision</p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem align="left">
            <TimelineContent isDark={isDark}>
              <h3>2015 - Agency Foundation</h3>
              <p>Launched boutique photography consultation service</p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem align="right">
            <TimelineContent isDark={isDark}>
              <h3>2020 - Digital Evolution</h3>
              <p>Expanded services to include comprehensive digital portfolio management</p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem align="left">
            <TimelineContent isDark={isDark}>
              <h3>2023 - Innovation & Growth</h3>
              <p>Pioneering new approaches in photography talent curation and client services</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;