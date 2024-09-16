/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getPersonalInfo, getEducationInfo, getExperienceInfo } from "../../api/api";
import styled from "styled-components";
import profileImage from '../../assets/dp.jpeg';

const Template4 = () => {
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
      <ProfileCard>
        <ProfileImage src={profileImage} alt="Profile" />
        {userData?.map((data: any) => (
          <ProfileDetails key={data.email}>
            <ProfileName>{data.firstName} {data.lastName}</ProfileName>
            <Info><strong>Email:</strong> {data.email}</Info>
            <Info><strong>Phone:</strong> {data.phoneNumber}</Info>
            <Info><strong>City:</strong> {data.city}</Info>
          </ProfileDetails>
        ))}
      </ProfileCard>

      <CardContainer>
        <Card>
          <CardTitle>Skills</CardTitle>
          {educationData?.map((data: any) => (
            <SkillContainer key={data.companyName}>
              {data.skills.split(',').map((skill: string, idx: number) => (
                <SkillBar key={idx}>
                  <SkillName>{skill}</SkillName>
                  <SkillProgress>
                    <Progress width={`${Math.random() * 100}%`} />
                  </SkillProgress>
                </SkillBar>
              ))}
            </SkillContainer>
          ))}
        </Card>

        <Card>
          <CardTitle>Education</CardTitle>
          {educationData?.map((data: any) => (
            <EducationCard key={data.degree}>
              <Info><strong>Degree:</strong> {data.degree}</Info>
              <Info><strong>Institute:</strong> {data.school}</Info>
              <Info><strong>City:</strong> {data.city}</Info>
              <Info><strong>Description:</strong> {data.description}</Info>
            </EducationCard>
          ))}
        </Card>

        <Card>
          <CardTitle>Experience</CardTitle>
          <Timeline>
            {experienceData?.map((data: any) => (
              <TimelineItem key={data.companyName}>
                <TimelineContent>
                  <Info><strong>Company:</strong> {data.companyName}</Info>
                  <Info><strong>Role:</strong> {data.title}</Info>
                  <Info><strong>Years:</strong> {data.years}</Info>
                  <Info><strong>Description:</strong> {data.description}</Info>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Card>
      </CardContainer>

      <PrintButton onClick={handlePrint}>Print CV</PrintButton>
    </Container>
  );
};

export default Template4;

// Styled Components
const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  border: 5px solid #00b894;
`;

const ProfileDetails = styled.div`
  flex-grow: 1;
`;

const ProfileName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #00b894;
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #2d3436;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 20px;
  color: #00b894;
  margin-bottom: 20px;
  border-bottom: 2px solid #00b894;
  padding-bottom: 10px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkillName = styled.span`
  flex: 1;
  font-size: 16px;
  color: #2d3436;
`;

const SkillProgress = styled.div`
  flex: 3;
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 5px;
`;

const Progress = styled.div<{ width: string }>`
  background-color: #00b894;
  height: 100%;
  width: ${({ width }) => width};
  border-radius: 5px;
`;

const EducationCard = styled.div`
  margin-bottom: 20px;
  background-color: #f4f4f9;
  padding: 15px;
  border-radius: 8px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
`;

const TimelineContent = styled.div`
  background-color: #f4f4f9;
  padding: 15px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const PrintButton = styled.button`
  margin: 40px auto 0;
  padding: 10px 30px;
  background-color: #00b894;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;

  &:hover {
    background-color: #55efc4;
  }

  @media print {
    display: none;
  }
`;
