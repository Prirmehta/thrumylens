import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Styled Components
const ContactContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.isDark ? '#121212' : '#FFF5EC'};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #FF6B35;
    font-size: 36px;
    margin-bottom: 30px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  i {
    color: #FF6B35;
    font-size: 24px;
    margin-right: 15px;
  }
  
  span {
    color: ${props => props.isDark ? '#ffffff' : '#333'};
  }
`;

const BookingForm = styled(motion.form)`
  background: ${props => props.isDark ? '#1E1E1E' : 'white'};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.isDark ? '#ffffff' : '#333'};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#333333' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#000000' : 'white'};
  color: ${props => props.isDark ? '#ffffff' : '#333'};
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#333333' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#000000' : 'white'};
  color: ${props => props.isDark ? '#ffffff' : '#333'};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#333333' : '#ddd'};
  border-radius: 8px;
  height: 120px;
  background: ${props => props.isDark ? '#000000' : 'white'};
  color: ${props => props.isDark ? '#ffffff' : '#333'};
  resize: vertical;
`;

const PackageCard = styled.div`
  background: ${props => props.isDark ? '#1E1E1E' : 'white'};
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.1);

  h3 {
    color: #FF6B35;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }

  li {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    margin-bottom: 8px;
    &:before {
      content: "✓";
      color: #FF6B35;
      margin-right: 10px;
    }
  }
`;

const SubmitButton = styled(motion.button)`
  background: #FF6B35;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FF8B55;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.isDark ? '#1A1A1A' : 'white'};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 9999;
  width: 90%;
  max-width: 500px;

  h3 {
    color: #FF6B35;
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: ${props => props.isDark ? '#ffffff' : '#666'};
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
    
    &:hover {
      color: #FF6B35;
    }
  }
`;

const photographerOptions = [
  { id: 1, name: "Emma Thompson", specialty: "Wedding Photography", availability: "Mon-Sat" },
  { id: 2, name: "David Chen", specialty: "Landscape Photography", availability: "Tue-Sun" },
  { id: 3, name: "Sofia Garcia", specialty: "Portrait Photography", availability: "Wed-Sun" },
  { id: 4, name: "Marcus Williams", specialty: "Event Photography", availability: "Mon-Fri" },
  { id: 5, name: "Isabella Laurent", specialty: "Fashion Photography", availability: "Tue-Sat" },
  { id: 6, name: "James Morrison", specialty: "Wildlife Photography", availability: "Mon-Sun" }
];

function Contact({ isDark }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    package: '',
    photographer: '',
    message: ''
  });

  const packages = [
    {
      name: "Basic Package",
      price: "$500",
      features: [
        "4 hours coverage",
        "100 edited photos",
        "Online gallery",
        "Print release"
      ]
    },
    {
      name: "Premium Package",
      price: "$1000",
      features: [
        "8 hours coverage",
        "300 edited photos",
        "Online gallery",
        "Print release",
        "Engagement session",
        "Second photographer"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      location: '',
      package: '',
      photographer: '',
      message: ''
    });
    setShowSuccess(true);
  };

  return (
    <ContactContainer isDark={isDark}>
      <ContactGrid>
        <ContactInfo isDark={isDark}>
          <h2>Let's Create Something Beautiful</h2>
          <p>Ready to capture your special moments? Fill out the booking form or contact me directly through any of these channels:</p>
          
          <ContactMethod isDark={isDark}>
            <i className="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </ContactMethod>
          
          <ContactMethod isDark={isDark}>
            <i className="fas fa-envelope"></i>
            <span>contact@thrumylens.com</span>
          </ContactMethod>
          
          <ContactMethod isDark={isDark}>
            <i className="fas fa-map-marker-alt"></i>
            <span>Studio: 123 Creative Ave, Photography City</span>
          </ContactMethod>

          <div style={{marginTop: '40px'}}>
            <h3 style={{color: '#FF6B35', marginBottom: '20px'}}>Available Packages</h3>
            {packages.map(pkg => (
              <PackageCard key={pkg.name} isDark={isDark}>
                <h3>{pkg.name} - {pkg.price}</h3>
                <ul>
                  {pkg.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </PackageCard>
            ))}
          </div>
        </ContactInfo>

        <BookingForm
          isDark={isDark}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h3 style={{color: '#FF6B35', marginBottom: '20px'}}>Book a Session</h3>
          
          <FormGroup>
            <Label isDark={isDark}>Full Name *</Label>
            <Input 
              type="text" 
              isDark={isDark}
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Email *</Label>
            <Input 
              type="email" 
              isDark={isDark}
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Phone Number *</Label>
            <Input 
              type="tel" 
              isDark={isDark}
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Event Type *</Label>
            <Select 
              isDark={isDark}
              required
              value={formData.eventType}
              onChange={e => setFormData({...formData, eventType: e.target.value})}
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait Session</option>
              <option value="event">Corporate Event</option>
              <option value="family">Family Session</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Preferred Date *</Label>
            <Input 
              type="date" 
              isDark={isDark}
              required
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Event Location</Label>
            <Input 
              type="text" 
              isDark={isDark}
              value={formData.location}
              onChange={e => setFormData({...formData, location: e.target.value})}
            />
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Select Package *</Label>
            <Select 
              isDark={isDark}
              required
              value={formData.package}
              onChange={e => setFormData({...formData, package: e.target.value})}
            >
              <option value="">Select a Package</option>
              <option value="basic">Basic Package - $500</option>
              <option value="premium">Premium Package - $1000</option>
              <option value="custom">Custom Package - Let's Discuss</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Select Photographer *</Label>
            <Select 
              isDark={isDark}
              required
              value={formData.photographer}
              onChange={e => setFormData({...formData, photographer: e.target.value})}
            >
              <option value="">Choose Your Photographer</option>
              {photographerOptions.map(photographer => (
                <option key={photographer.id} value={photographer.name}>
                  {photographer.name} - {photographer.specialty} ({photographer.availability})
                </option>
              ))}
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label isDark={isDark}>Additional Details</Label>
            <TextArea 
              isDark={isDark}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me more about your vision for the shoot..."
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </SubmitButton>
        </BookingForm>
      </ContactGrid>

      <AnimatePresence>
        {showSuccess && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <SuccessMessage
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              isDark={isDark}
            >
              <button 
                className="close-button" 
                onClick={() => setShowSuccess(false)}
              >
                ×
              </button>
              <h3>Thank You for Your Interest!</h3>
              <p>Your booking request has been successfully submitted.</p>
              <p>Our team will review your request and get back to you within 24 hours.</p>
              <p>We're excited to create beautiful memories with you!</p>
            </SuccessMessage>
          </>
        )}
      </AnimatePresence>
    </ContactContainer>
  );
}

export default Contact;