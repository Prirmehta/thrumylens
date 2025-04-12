import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const BlogCard = styled(motion.div)`
  background: ${props => props.isDark ? '#1f1f1f' : 'white'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h3`
  color: ${props => props.isDark ? '#ffffff' : '#333'};
  font-size: 22px;
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  color: ${props => props.isDark ? '#cccccc' : '#666'};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.isDark ? '#999' : '#888'};
  font-size: 14px;
`;

const ReadMore = styled(Link)`
  color: #FF6B35;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

function Blog({ isDark }) {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Portrait Photography",
      excerpt: "Discover the secrets behind capturing stunning portraits that tell a story...",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      date: "Oct 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering Natural Light",
      excerpt: "Learn how to use natural light to create breathtaking photographs...",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      date: "Oct 10, 2023",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Wedding Photography Tips",
      excerpt: "Essential tips for capturing perfect wedding moments...",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      date: "Oct 5, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <BlogContainer>
      <h1 style={{ color: isDark ? '#ffffff' : '#333', marginBottom: '20px' }}>Photography Blog</h1>
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard
            key={post.id}
            isDark={isDark}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle isDark={isDark}>{post.title}</BlogTitle>
              <BlogExcerpt isDark={isDark}>{post.excerpt}</BlogExcerpt>
              <BlogMeta isDark={isDark}>
                <span>{post.date} · {post.readTime}</span>
                <ReadMore to={`/blog/${post.id}`}>Read More →</ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}

export default Blog;