/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getPersonalInfo, getEducationInfo, getExperienceInfo } from "../../api/api";
import styled from "styled-components";
import profileImage from '../../assets/dp.jpeg';  // Adjust path if necessary

const ModernTemplate = () => {
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
    <NewMain>
      <LeftSection>
        <ProfileCard>
          <ProfileImg src={profileImage} alt="Profile Photo" />
          {userData?.map((data: any) => (
            <PersonalInfo key={data.email}>
              <Name>{data.firstName} {data.lastName}</Name>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phoneNumber}</p>
              <p><strong>Address:</strong> {data.address}</p>
              <p><strong>City:</strong> {data.city}</p>
            </PersonalInfo>
          ))}
        </ProfileCard>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          {educationData?.map((data: any) => (
            <SkillBlock key={data.companyName}>
              {data.skills.split(',').map((skill: string, idx: number) => (
                <SkillTag key={idx}>{skill}</SkillTag>
              ))}
            </SkillBlock>
          ))}
        </Section>
      </LeftSection>

      <RightSection>
        <Section>
          <SectionTitle>Education</SectionTitle>
          {educationData?.map((data: any) => (
            <InfoCard key={data.degree}>
              <p><strong>Degree:</strong> {data.degree}</p>
              <p><strong>Institute:</strong> {data.school}</p>
              <p><strong>City:</strong> {data.city}</p>
              <p><strong>Description:</strong> {data.description}</p>
            </InfoCard>
          ))}
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          {experienceData?.map((data: any) => (
            <InfoCard key={data.companyName}>
              <p><strong>Company:</strong> {data.companyName}</p>
              <p><strong>Role:</strong> {data.title}</p>
              <p><strong>Years:</strong> {data.years}</p>
              <p><strong>Description:</strong> {data.description}</p>
            </InfoCard>
          ))}
        </Section>
      </RightSection>

      <PrintButton onClick={handlePrint}>Print</PrintButton>
    </NewMain>
  );
};

export default ModernTemplate;

// Styled Components for the new theme
const NewMain = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  color: #2c3e50;
  font-family: 'Poppins', sans-serif;
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 100%
`;

const LeftSection = styled.div`
  flex: 0.35;
  padding: 20px;
  background: #34495e;
  color: white;
  border-radius: 15px;
`;

const RightSection = styled.div`
  flex: 0.6;
  padding: 20px;
  background: #fff;
  color: #2c3e50;
  border-radius: 15px;
`;

const ProfileCard = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #1abc9c;
`;

const PersonalInfo = styled.div`
  margin-top: 15px;
  font-size: 14px;

  p {
    margin: 5px 0;
    strong {
      color: #1abc9c;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1abc9c;
  margin-bottom: 15px;
`;

const InfoCard = styled.div`
  background: #ecf0f1;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;

  p {
    margin: 5px 0;
    strong {
      color: #1abc9c;
    }
  }
`;

const SkillBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  background: #1abc9c;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const PrintButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #16a085;
  }

  @media print {
    display: none;
  }
`;
const Name = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #1abc9c;
  margin: 10px 0;
`;
