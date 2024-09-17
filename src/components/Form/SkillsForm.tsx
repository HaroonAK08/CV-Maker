import React, { useState } from "react";
import styled from "styled-components";
import { notification } from "antd";
import { postSkillsDetails } from "../../api/api";

const SkillsForm = () => {
  const [skillsData, setSkillsData] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSkillsData({ ...skillsData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postSkillsDetails(skillsData);
      notification.success({
        message: "Success",
        description: "Skills data has been submitted successfully!",
      });
      setSkillsData({
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "An error occurred while submitting the skills data.",
      });
      console.error("Error submitting skills data:", error);
    }
  };

  return (
    <>
      <Title>Skills Form</Title>
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Label>
                Skill 1*
                <Input
                  type="text"
                  name="skill1"
                  value={skillsData.skill1}
                  onChange={handleInputChange}
                  placeholder="Enter Skill 1"
                  required
                />
              </Label>
              <Label>
                Skill 2*
                <Input
                  type="text"
                  name="skill2"
                  value={skillsData.skill2}
                  onChange={handleInputChange}
                  placeholder="Enter Skill 2"
                  required
                />
              </Label>
              <Label>
                Skill 3
                <Input
                  type="text"
                  name="skill3"
                  value={skillsData.skill3}
                  onChange={handleInputChange}
                  placeholder="Enter Skill 3"
                />
              </Label>
              <Label>
                Skill 4
                <Input
                  type="text"
                  name="skill4"
                  value={skillsData.skill4}
                  onChange={handleInputChange}
                  placeholder="Enter Skill 4"
                />
              </Label>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Section>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

// Styled Components

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #e2e2e2, #ffffff);
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 90%;
  max-width: 800px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 12px;
  color: #333;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-top: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #007bff, #00d2ff);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #00d2ff, #007bff);
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);
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

export default SkillsForm;
