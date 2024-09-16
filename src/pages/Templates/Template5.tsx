/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getPersonalInfo, getEducationInfo, getExperienceInfo } from "../../api/api";
import styled from "styled-components";
import profileImage from '../../assets/dp.jpeg';

const Template5 = () => {
  const [userData, setUserData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    getPersonalInfo()?.then((res) => setUserData(res.data));
    getEducationInfo()?.then((res) => setEducationData(res.data));
    getExperienceInfo()?.then((res) => setExperienceData(res.data));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container>
      <Header>
        <ProfileSection>
          <ProfileImage src={profileImage} alt="Profile" />
          {userData?.map((data: any) => (
            <ProfileDetails key={data.email}>
              <Name>{data.firstName} {data.lastName}</Name>
              <Info><strong>Email:</strong> {data.email}</Info>
              <Info><strong>Phone:</strong> {data.phoneNumber}</Info>
              <Info><strong>City:</strong> {data.city}</Info>
            </ProfileDetails>
          ))}
        </ProfileSection>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Skills</SectionTitle>
          {educationData?.map((data: any) => (
            <SkillItem key={data.companyName}>
              <SkillName>{data.skills}</SkillName>
            </SkillItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          {educationData?.map((data: any) => (
            <EducationItem key={data.degree}>
              <Info><strong>Degree:</strong> {data.degree}</Info>
              <Info><strong>Institute:</strong> {data.school}</Info>
              <Info><strong>City:</strong> {data.city}</Info>
              <Info><strong>Description:</strong> {data.description}</Info>
            </EducationItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          {experienceData?.map((data: any) => (
            <ExperienceItem key={data.companyName}>
              <Info><strong>Company:</strong> {data.companyName}</Info>
              <Info><strong>Role:</strong> {data.title}</Info>
              <Info><strong>Years:</strong> {data.years}</Info>
              <Info><strong>Description:</strong> {data.description}</Info>
            </ExperienceItem>
          ))}
        </Section>
      </Content>

      <PrintButton onClick={handlePrint}>Print CV</PrintButton>
    </Container>
  );
};

export default Template5;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 6px solid #3498db;
  margin-right: 20px;
`;

const ProfileDetails = styled.div`
  flex-grow: 1;
`;

const Name = styled.h1`
  font-size: 30px;
  color: #3498db;
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #2c3e50;

  strong {
    color: #3498db;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  color: #3498db;
  margin-bottom: 15px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
`;

const SkillItem = styled.div`
  background: #3498db;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  font-size: 16px;
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
`;

const PrintButton = styled.button`
  display: block;
  margin: 40px auto 0;
  padding: 12px 30px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }

  @media print {
    display: none;
  }
`;
