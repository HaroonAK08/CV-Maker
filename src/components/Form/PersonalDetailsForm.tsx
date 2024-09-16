/* eslint-disable @typescript-eslint/no-explicit-any */
import {postPersonalDetails} from '../../api/api'
import { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from '../Personal/ImageUploader';

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    hobbies: '',
    city: ''
  });

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleChange = (e: {target: { name: any; value: any; }}) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Call the API to save the personal details
    postPersonalDetails(formData)
      .then(() => {
        alert('Details saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const handleToggle = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <>
      <Title>Personal Details</Title>
      <Container>
        <FormContainer>
          <ImageSection>
            <ImageUploaderWrapper>
              <ImageUploader />
              <UploadText>Upload your Image</UploadText>
            </ImageUploaderWrapper>
          </ImageSection>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Label>
                First Name*
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </Label>
              <Label>
                Last Name*
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </Label>
              <Label>
                Email Address*
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Label>
              <Label>
                Phone Number
                <Input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </Label>
              <Label>
                Address
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </Label>
              <Label>
                City/Town
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city or town"
                />
              </Label>
              <Label>
                Hobbies
                <Input
                  type="text"
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  placeholder="Enter your hobbies"
                />
              </Label>
              <SubmitButton type="submit">Save Details</SubmitButton>
            </Section>

            <AdditionalInfoButton onClick={handleToggle}>
              {showAdditionalInfo ? 'Hide Additional Information' : 'Additional Information'}
            </AdditionalInfoButton>

            {showAdditionalInfo && (
              <AdditionalInfoSection>
                <Label>Date of Birth</Label>
                <InputSection>
                  <Input type="number" placeholder="Day" style={{ width: '30%' }} />
                  <Input type="number" placeholder="Month" style={{ width: '30%' }} />
                  <Input type="number" placeholder="Year" style={{ width: '40%' }} />
                </InputSection>

                <Label>Place of Birth</Label>
                <Input type="text" placeholder="Enter place of birth" />

                <Label>Driving License</Label>
                <Input type="text" placeholder="Enter driving license" />

                <Label>Gender</Label>
                <Select>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>

                <Label>Nationality</Label>
                <Input type="text" placeholder="Enter nationality" />

                <Label>Marital Status</Label>
                <Select>
                  <option>Select</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </Select>

                <Label>LinkedIn</Label>
                <Input type="url" placeholder="Enter LinkedIn profile URL" />

                <Label>Website</Label>
                <Input type="url" placeholder="Enter website URL" />
              </AdditionalInfoSection>
            )}
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default PersonalDetailsForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 80%;
  max-width: 900px;
`;

const ImageSection = styled.div`
  width: 40%;
  background: #6a11cb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

const ImageUploaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UploadText = styled.h1`
  margin-top: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  width: 60%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const AdditionalInfoButton = styled.button`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
  }
`;

const AdditionalInfoSection = styled.div`
  margin-top: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-top: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 4px 12px rgba(106, 17, 203, 0.2);
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 4px 12px rgba(106, 17, 203, 0.2);
  }
`;

const InputSection = styled.div`
  display: flex;
  gap: 10px;
`;

const SubmitButton = styled.button`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  margin-top: 30px;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: #5C62D3;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 80%;
    height: 5px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    border-radius: 5px;
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
