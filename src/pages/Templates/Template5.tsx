/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  getPersonalInfo,
  getEducationInfo,
  getExperienceInfo,
  getSkillsInfo,
} from "../../api/api";
import styled from "styled-components";
import profileImage from "../../assets/dp.jpeg";

const Template5 = () => {
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
    <>
      <Main>
        <Left>
          <Profile>
            <ProfileImage src={profileImage} alt="Profile" />
            {userData?.map((data: any) => (
              <ProfileDetails key={data.email}>
                <Name>
                  {data.firstName} {data.lastName}
                </Name>
                <Info>
                  <strong>Email:</strong> {data.email}
                </Info>
                <Info>
                  <strong>Phone:</strong> {data.phoneNumber}
                </Info>
                <Info>
                  <strong>City:</strong> {data.city}
                </Info>
                <Info>
                  <strong>Hobbies:</strong> {data.hobbies}
                </Info>
              </ProfileDetails>
            ))}
          </Profile>

          <Section>
            <SectionTitle>Education</SectionTitle>
            {educationData?.map((data: any) => (
              <EducationItem key={data.degree}>
                <Info>
                  <strong>Degree:</strong> {data.degree}
                </Info>
                <Info>
                  <strong>Institute:</strong> {data.school}
                </Info>
                <Info>
                  <strong>City:</strong> {data.city}
                </Info>
                <Info>
                  <strong>Description:</strong> {data.description}
                </Info>
              </EducationItem>
            ))}
          </Section>
        </Left>

        <Middle>
          <Section>
            <SectionTitle>Skills</SectionTitle>
            {skillsData?.map((data: any) => (
              <SkillItem key={data.skill1}>
                <Skill>{data.skill1}</Skill>
                <Skill>{data.skill2}</Skill>
                <Skill>{data.skill3}</Skill>
                <Skill>{data.skill4}</Skill>
              </SkillItem>
            ))}
          </Section>
        </Middle>

        <Right>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            {experienceData?.map((data: any) => (
              <ExperienceItem key={data.companyName}>
                <Info>
                  <strong>Company:</strong> {data.companyName}
                </Info>
                <Info>
                  <strong>Role:</strong> {data.title}
                </Info>
                <Info>
                  <strong>Years:</strong> {data.years}
                </Info>
                <Info>
                  <strong>Description:</strong> {data.description}
                </Info>
              </ExperienceItem>
            ))}
          </Section>
        </Right>
      </Main>
      <PrintButton onClick={handlePrint}>Print CV</PrintButton>
    </>
  );
};

export default Template5;

// Styled Components
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  width: 70%;
  max-width: 1200px; /* Optional: Set a max-width for larger screens */
  @media print {
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 3;
  background: #87a922;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // margin-right: 10px;
  color: #f7f6bb;
  width: 90%;
`;

const Right = styled.div`
  flex: 1;
  background: #fcdc2a;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 90%;
`;

const Middle = styled.div`
  flex: 2;
  width: 90%;
  background: #114232;
  padding: 20px;
  color: #f7f6bb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-right: 20px;
  border: 5px solid #ffffff;
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 32px;
  color: #f7f6bb;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 16px;
  color: maroon;
  margin: 5px 0;

  strong {
    color: black;
    font-weight: bold;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 15px;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.div`
  background: #f7f6bb;
  color: black;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  flex: 1 1 45%;
`;

const EducationItem = styled.div`
  background: #ffffff;
  color: #333;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExperienceItem = styled.div`
  background: #ffffff;
  color: #333;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PrintButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media print {
    display: none;
  }
`;
