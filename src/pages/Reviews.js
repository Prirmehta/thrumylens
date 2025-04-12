import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ReviewsContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ReviewCard = styled(motion.div)`
  background: ${props => props.isDark ? '#1f1f1f' : 'white'};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const ReviewerInfo = styled.div`
  h3 {
    color: ${props => props.isDark ? '#ffffff' : '#333'};
    margin-bottom: 5px;
  }
  
  span {
    color: ${props => props.isDark ? '#999' : '#666'};
    font-size: 14px;
  }
`;

const ReviewText = styled.p`
  color: ${props => props.isDark ? '#cccccc' : '#666'};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Rating = styled.div`
  color: #FFD700;
  font-size: 20px;
`;

const EventType = styled.span`
  display: inline-block;
  background: ${props => props.isDark ? '#333' : '#FFF5EC'};
  color: #FF6B35;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  margin-top: 10px;
`;

function Reviews({ isDark }) {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Amazing photographer! Captured our wedding beautifully. Every shot tells a story.",
      rating: 5,
      event: "Wedding Photography"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "September 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "Professional, creative, and a pleasure to work with. The corporate event photos were perfect.",
      rating: 5,
      event: "Corporate Event"
    },
    {
      id: 3,
      name: "Emily Davis",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "Incredible portrait session! Made me feel comfortable and the results exceeded my expectations.",
      rating: 5,
      event: "Portrait Session"
    }
  ];

  return (
    <ReviewsContainer>
      <h1 style={{ color: isDark ? '#ffffff' : '#333', marginBottom: '20px' }}>Client Reviews</h1>
      <ReviewsGrid>
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.id}
            isDark={isDark}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ReviewHeader>
              <ReviewerImage src={review.image} alt={review.name} />
              <ReviewerInfo isDark={isDark}>
                <h3>{review.name}</h3>
                <span>{review.date}</span>
              </ReviewerInfo>
            </ReviewHeader>
            <ReviewText isDark={isDark}>{review.text}</ReviewText>
            <Rating>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </Rating>
            <EventType isDark={isDark}>{review.event}</EventType>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
}

export default Reviews;