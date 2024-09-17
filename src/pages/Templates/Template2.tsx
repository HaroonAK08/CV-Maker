/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getPersonalInfo, getEducationInfo, getExperienceInfo, getSkillsInfo } from "../../api/api";
import styled from "styled-components";
import profileImage from '../../assets/dp.jpeg';  // Adjust path if necessary

const Template2 = () => {
  const [userData, setUserData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    getPersonalInfo()?.then((res) => setUserData(res.data));
    getEducationInfo()?.then((res) => setEducationData(res.data));
    getExperienceInfo()?.then((res) => setExperienceData(res.data));
    getSkillsInfo()?.then((res) => setSkillsData(res.data));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Main>
      <Header>
        <ProfileImage src={profileImage} alt="Profile Photo" />
        <div>
          {userData?.map((data: any) => (
            <Name key={data.email}>{data.firstName} {data.lastName}</Name>
          ))}
        </div>
      </Header>

      <Section>
        <SectionHeader>Personal Information</SectionHeader>
        {userData?.map((data: any) => (
          <Contact key={data.email}>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phoneNumber}</p>
            <p><strong>Address:</strong> {data.address}, {data.city}</p>
            <p><strong>Hobbies:</strong>{data.hobbies}</p>
          </Contact>
        ))}
      </Section>

      <Content>
        <Section>
          <SectionHeader>Education</SectionHeader>
          {educationData?.map((data: any) => (
            <InfoBlock key={data.degree}>
              <p><strong>Degree:</strong> {data.degree}</p>
              <p><strong>Institute:</strong> {data.school}</p>
              <p><strong>City:</strong> {data.city}</p>
              <p><strong>Description:</strong> {data.description}</p>
            </InfoBlock>
          ))}
        </Section>
        
        <Section>
          <SectionHeader>Experience</SectionHeader>
          {experienceData?.map((data: any) => (
            <InfoBlock key={data.companyName}>
              <p><strong>Company:</strong> {data.companyName}</p>
              <p><strong>Role:</strong> {data.title}</p>
              <p><strong>Years:</strong> {data.years}</p>
              <p><strong>Description:</strong> {data.description}</p>
            </InfoBlock>
          ))}
        </Section>

        <Section>
          <SectionHeader>Skills</SectionHeader>
          {skillsData?.map((data: any) => (
            <InfoBlock key={data.skill1}>
              <h1>{data.skill1}</h1>
              <h1>{data.skill2}</h1>
              <h1>{data.skill3}</h1>
              <h1>{data.skill4}</h1>

            </InfoBlock>
          ))}
        </Section>
      </Content>

      {/* Print Button */}
      <PrintButton onClick={handlePrint}>Print CV</PrintButton>
    </Main>
  );
};

export default Template2;

/* New Styles */
const Main = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #444;
  max-width: 850px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(120deg, #e0f7fa, #ffccbc);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  @media print {
    margin: 0;
    box-shadow: none;
    max-width: 100%;
    height: auto;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  @media print {
    margin-bottom: 15px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  border: 4px solid #26a69a;
  @media print {
    width: 100px;
    height: 100px;
    border: 2px solid #26a69a;
  }
`;

const Name = styled.h1`
  font-size: 32px;
  margin: 0;
  color: #00796b;
  @media print {
    font-size: 28px;
  }
`;

const Contact = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  line-height: 1.8;
  p {
    margin: 5px 0;
  }
  @media print {
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-top: 40px;
  @media print {
    margin-top: 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  @media print {
    margin-bottom: 25px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  border-bottom: 3px solid #00796b;
  padding-bottom: 8px;
  margin-bottom: 15px;
  color: #00796b;
  @media print {
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  p {
    font-size: 16px;
    margin: 5px 0;
  }
  strong {
    color: #00796b;
  }
  @media print {
    padding: 15px;
    background: none;
    box-shadow: none;
    font-size: 14px;
  }
`;

const PrintButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 12px 25px;
  font-size: 18px;
  color: white;
  background-color: #00796b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d40;
  }

  @media print {
    display: none;
  }
`;
