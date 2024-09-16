/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { postEducationDetails } from "../../api/api";

const EducationForm = () => {
  const [educationData, setEducationData] = useState({
    degree: "",
    school: "",
    city: "",
    description: "",
    skills:""
  });

  const handleChange =(e: { target: { name: any; value: any; }; }) =>{
    const { name ,value } = e.target;
    setEducationData({ ...educationData, [name]: value})
  }


  const handleSumbit = (e: {preventDefault: () => void}) =>{
    e.preventDefault()

    postEducationDetails(educationData)
    .then(() =>{
      alert("Details saved successfuly!");
    })
    .catch((error) =>{
      console.error("Error saving data", error)
    })
  }
  return (
    <>
      <Title>Education Details</Title>
      <Container>
        <FormContainer>
          <Form onSubmit={handleSumbit}>
            <Section>
              <Label>
                Degree*
                <Input
                  type="text"
                  name="degree"
                  value={educationData.degree}
                  onChange={handleChange}
                  placeholder="Enter degree title"
                  required
                />
              </Label>
              <Label>
                School*
                <Input
                  type="text"
                  name="school"
                  value={educationData.school}
                  onChange={handleChange}
                  placeholder="Enter school name"
                  required
                />
              </Label>
              <Label>
                City
                <Input
                  type="text"
                  name="city"
                  value={educationData.city}
                  onChange={handleChange}
                  placeholder="Enter city name"
                  required
                />
              </Label>
              <Label>
                Skills
                <Input
                  type="text"
                  name="skills"
                  value={educationData.skills}
                  onChange={handleChange}
                  placeholder="Enter your SKills"
                />
              </Label>
              <Label>
                Description
                <Input
                  type="text"
                  name="description"
                  value={educationData.description}
                  onChange={handleChange}
                  placeholder="Enter your description"
                />
              </Label>
              <SubmitButton type="submit">Save Details</SubmitButton>
            </Section>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default EducationForm;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
  // padding-left: 20px
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
  color: #5c62d3;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  position: relative;

  &::before {
    content: "";
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
