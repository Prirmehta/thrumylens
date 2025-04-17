import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Essential Photography Tips for Beginners",
    excerpt: "Master the basics of photography with our comprehensive guide to camera settings, composition, and lighting techniques.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    content: `Hey there, future photo wizards! 🌟 Ever wondered why some people seem to have a magical ability to freeze time in perfect frames while your shots look like they were taken during an earthquake? Well, grab your camera and let's embark on this exciting journey together! The world of photography is like a playground where light, composition, and creativity come together to create pure magic.

      Remember when you first picked up a camera and thought, "How hard can this be? Just point and shoot, right?" Oh, sweet summer child! It's like saying cooking is just throwing ingredients in a pot. But fear not – I've been there, done that, and bought the memory card to prove it. The good news? Every amazing photographer started exactly where you are right now, wondering which button does what and why their photos look nothing like what they see with their eyes.

      Here's the thing about photography that nobody tells you: it's not about having the most expensive gear or the fanciest filters. It's about training your eyes to see what others miss. Think of your camera as a magic wand – it's not the wand that makes the magic, it's the wizard! 🧙‍♂️ Start with understanding the exposure triangle (ISO, aperture, and shutter speed), and you'll be halfway to creating images that make people go "Wow!" instead of "Oh... that's nice."`
  },
  {
    id: 2,
    title: "Event Planning Guide: 250 Guests Made Easy",
    excerpt: "Comprehensive guide to organizing large-scale events with tips on venue selection, timing, and coordination.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    content: `Picture this: you're tasked with orchestrating an event for 250 people. Cue the dramatic music and panic sweats! 😅 But before you start googling "how to fake your own disappearance," take a deep breath. I'm here to be your event planning fairy godparent, turning this seemingly impossible task into a piece of wedding cake (see what I did there?).

      Let me share a little secret from my years of event planning: the key to managing 250 guests isn't about having superhuman organizational skills. It's about breaking down this mammoth task into bite-sized pieces. Think of it like eating an elephant (not literally, please!) – you do it one bite at a time. Start with your non-negotiables: venue, date, and budget. These three musketeers will be your foundation for everything else.

      The beauty of planning an event this size lies in its potential for creating unforgettable moments. It's like conducting an orchestra – every element needs to play its part perfectly. From the grand entrance to the final goodbye, think about the flow of your event like a story. What do you want people to feel at each moment? How can you guide them through this experience? Remember, you're not just planning an event; you're crafting memories that will last a lifetime! 🌟`
  },
  {
    id: 3,
    title: "2024 Photography Industry Trends",
    excerpt: "Stay ahead of the curve with the latest photography trends and technological advancements.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    content: `Hold onto your tripods, fellow photo enthusiasts, because the photography world is evolving faster than a speeding shutter! 📸 Remember when we thought digital cameras were revolutionary? Well, buckle up, because 2024 is here to make that look like ancient history. We're not just taking pictures anymore; we're creating immersive visual experiences that would make our photographer ancestors drop their daguerreotypes in amazement!

      You know what's fascinating about today's photography landscape? It's like we're living in a sci-fi movie that's actually real! AI isn't just helping us remove unwanted photobombers anymore – it's becoming our creative partner, suggesting compositions and even predicting the perfect moment to capture that award-winning shot. And don't get me started on drone photography; we're literally taking pictures from angles that birds would envy. The sky isn't the limit anymore; it's just the beginning!

      But here's the real tea: amid all this technological wizardry, the heart of photography remains unchanged. It's still about telling stories, capturing emotions, and freezing moments in time. The tools might be evolving at warp speed, but the goal is timeless – to make people feel something when they look at our images. So, ready to surf the wave of innovation while keeping your artistic soul intact? Let's dive into what's shaping the future of photography! 🚀`
  },
  {
    id: 4,
    title: "Budget-Friendly Wedding Venues Guide",
    excerpt: "Discover beautiful wedding venues that won't break the bank, complete with pricing and planning tips.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    content: `"Budget-friendly wedding venue" – sounds like an oxymoron, right? Like "jumbo shrimp" or "deafening silence." 🎭 But hold onto your wedding veils, because I'm about to spill the tea on how to find gorgeous venues that won't require selling your firstborn or sacrificing your honeymoon fund! After years of helping couples navigate the wedding planning maze, I've discovered hidden gems that prove you don't need a royal budget to have a royal-worthy celebration.

      Here's something they don't tell you in those glossy wedding magazines: some of the most memorable weddings I've ever attended weren't in grand ballrooms or exotic destinations. They were in converted barns where fairy lights danced across wooden beams, in public gardens where Mother Nature handled the decorating, and in intimate restaurants where the atmosphere was as rich as the food. The secret isn't in how much you spend – it's in how creatively you think! 

      Think of your venue search as a treasure hunt, where X marks the spot of that perfect place that balances beauty, budget, and practicality. And trust me, these treasures are hiding in plain sight! From historic buildings with stories to tell to modern spaces with endless possibilities, your dream venue is out there, and it doesn't need to cost as much as a small island. Ready to discover how to make your wedding venue dreams come true without breaking the bank? Let's explore these hidden gems together! 💍✨`
  }
];

const BlogModal = styled(motion.div)`
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

const BlogContainer = styled.section`
  padding: 120px 20px;
  background: ${props => props.isDark ? '#000000' : '#FFF5EC'};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background: ${props => props.isDark ? '#000000' : 'white'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 107, 53, ${props => props.isDark ? '0.3' : '0.1'});

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
  }
`;

const BlogContent = styled.div`
  padding: 20px;

  h2 {
    color: ${props => props.isDark ? '#FF6B35' : '#FF6B35'};
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .read-more {
    background: linear-gradient(45deg, #FF6B35, #FF8F6B);
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    margin-top: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
      background: linear-gradient(45deg, #FF8F6B, #FF6B35);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

const BlogModalContent = styled(motion.div)`
  background: ${props => props.isDark ? '#000000' : 'white'};
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  h2 {
    color: ${props => props.isDark ? '#FF6B35' : '#FF6B35'};
    font-size: 32px;
    margin-bottom: 30px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 20px;
    white-space: pre-line;
  }
`;

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

function Blogs({ isDark }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <BlogContainer isDark={isDark}>
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard
            key={post.id}
            isDark={isDark}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={post.image} alt={post.title} />
            <BlogContent isDark={isDark}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button 
                onClick={() => setSelectedPost(post)} 
                className="read-more"
              >
                Read More →
              </button>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BlogModalContent
              isDark={isDark}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <CloseButton onClick={() => setSelectedPost(null)}>×</CloseButton>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.content}</p>
            </BlogModalContent>
          </BlogModal>
        )}
      </AnimatePresence>
    </BlogContainer>
  );
}

export default Blogs;