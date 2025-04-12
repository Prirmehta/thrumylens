import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactContainer = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
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
    color: ${props => props.isDark ? '#FFE6D9' : '#666'};
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
    color: ${props => props.isDark ? '#FFF1E6' : '#333'};
  }
`;

const BookingForm = styled(motion.form)`
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
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
  color: ${props => props.isDark ? '#FFE6D9' : '#333'};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#3D2E2A' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  color: ${props => props.isDark ? '#FFF1E6' : '#333'};
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#3D2E2A' : '#ddd'};
  border-radius: 8px;
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  color: ${props => props.isDark ? '#FFF1E6' : '#333'};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid ${props => props.isDark ? '#3D2E2A' : '#ddd'};
  border-radius: 8px;
  height: 120px;
  background: ${props => props.isDark ? '#2A1F1D' : 'white'};
  color: ${props => props.isDark ? '#FFF1E6' : '#333'};
`;

const SubmitButton = styled.button`
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
    transform: translateY(-2px);
  }
`;

const PackageCard = styled.div`
  background: ${props => props.isDark ? '#1f1f1f' : 'white'};
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
    color: ${props => props.isDark ? '#FFE6D9' : '#666'};
    margin-bottom: 8px;
    &:before {
      content: "✓";
      color: #FF6B35;
      margin-right: 10px;
    }
  }
`;

function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    package: '',
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
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <ContactContainer>
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
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Email *</Label>
            <Input 
              type="email" 
              isDark={isDark}
              required
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Phone Number *</Label>
            <Input 
              type="tel" 
              isDark={isDark}
              required
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Event Type *</Label>
            <Select 
              isDark={isDark}
              required
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
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Event Location</Label>
            <Input 
              type="text" 
              isDark={isDark}
              onChange={e => setFormData({...formData, location: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Select Package *</Label>
            <Select 
              isDark={isDark}
              required
              onChange={e => setFormData({...formData, package: e.target.value})}
            >
              <option value="">Select a Package</option>
              <option value="basic">Basic Package - $500</option>
              <option value="premium">Premium Package - $1000</option>
              <option value="custom">Custom Package - Let's Discuss</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label isDark={isDark}>Additional Details</Label>
            <TextArea 
              isDark={isDark}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me more about your vision for the shoot..."
            />
          </FormGroup>

          <SubmitButton type="submit">Send Booking Request</SubmitButton>
        </BookingForm>
      </ContactGrid>
    </ContactContainer>
  );
}

export default Contact;