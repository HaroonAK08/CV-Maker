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

const Template1 = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [educationData, setEducationData] = useState<any[]>([]);
  const [experienceData, setExperienceData] = useState<any[]>([]);
  const [skillsData, setSkillsData] = useState<any[]>([]);

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
        <LeftSide>
          <Header>
            <ProfileImage src={profileImage} alt="Profile Photo" />

            {userData.map((data) => (
              <Name>
                {data.firstName} {data.lastName}
              </Name>
            ))}
          </Header>
          <Section>
            <SectionHeader1>Education</SectionHeader1>
            {educationData.map((data) => (
              <InfoBlockL key={data.degree}>
                <p>
                  <strong>Degree:</strong> {data.degree}
                </p>
                <p>
                  <strong>Institute:</strong> {data.school}
                </p>
                <p>
                  <strong>City:</strong> {data.city}
                </p>
                <p>
                  <strong>Description:</strong> {data.description}
                </p>
              </InfoBlockL>
            ))}
          </Section>
          <Section>
            <SectionHeader1>Experience</SectionHeader1>
            {experienceData.map((data) => (
              <InfoBlockL key={data.companyName}>
                <p>
                  <strong>Company Name:</strong> {data.companyName}
                </p>
                <p>
                  <strong>Role:</strong> {data.title}
                </p>
                <p>
                  <strong>Years of Experience:</strong> {data.years}
                </p>
                <p>
                  <strong>Description:</strong> {data.description}
                </p>
              </InfoBlockL>
            ))}
          </Section>
        </LeftSide>
        <RightSide>
          <Section>
            <SectionHeader>Contact Me</SectionHeader>
            {userData.map((data) => (
              <ContactInfo key={data.email}>
                {/* <Name>{data.firstName} {data.lastName}</Name> */}
                <Contact>
                  <p>
                    <strong>Email:</strong> {data.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {data.phoneNumber}
                  </p>
                  <p>
                    <strong>Address:</strong> {data.address}
                  </p>
                  <p>
                    <strong>City:</strong> {data.city}
                  </p>
                  <p>
                    <strong>Hobbies:</strong> {data.hobbies}
                  </p>
                </Contact>
              </ContactInfo>
            ))}
          </Section>
          <Section>
            <SectionHeader>Pro Skills</SectionHeader>
            {skillsData.map((data) => (
              <SkillsBlock key={data.skill1}>
                <h1>{data.skill1}</h1>
                <h1>{data.skill2}</h1>
                <h1>{data.skill3}</h1>
                <h1>{data.skill4}</h1>
              </SkillsBlock>
            ))}
          </Section>
        </RightSide>
      </Main>
      <PrintButton onClick={handlePrint}>Print</PrintButton>
    </>
  );
};

export default Template1;

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border: 2px solid #29282b;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  box-sizing: border-box;
`;

const LeftSide = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
`;
const Header = styled.header`
  background: #fe9c00;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  @media print {
    margin-bottom: 10px;
  }
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-left:10px;
  height: 100px;
  border: 8px solid #29282b;
  margin-bottom: 20px;
  margin-top: 20px;

  @media print {
    width: 100px;
    height: 100px;
    border: 2px solid #007bff;
  }
`;

const Name = styled.h1`
  font-size: 50px;
  // padding-top: 10px;
  margin: 0;
  padding-left: 20px;
  color: #29282b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media print {
    font-size: 20px;
  }
`;
const RightSide = styled.div`
  width: 30%;
  padding: 20px;
  padding-top: 15%;
  background: #29282b;
  color: white;
  box-sizing: border-box;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
  background: #fe9c00;
  border: 2px solid #0056b3;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-bottom: 10px;
`;

const SectionHeader1 = styled.h2`
  background: #fe9c00;
  border: 2px solid #fe9c00;
  color: black;
  padding: 10px;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-bottom: 10px;
`;

const InfoBlockL = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  line-height: 40px;

  p {
    font-size: 18px;
    margin: 5px 0;
    color: #333;
  }

  strong {
    color: #fe9c00;
    font-weight: 900;
    font-size: 22px;
  }

  @media print {
    padding: 5px;
    box-shadow: none;

    p {
      font-size: 18px;
      margin: 3px 0;
    }

    strong {
      color: black;
      font-size: 22px;
    }
  }
`;

const Contact = styled.div`
  font-size: 18px;
  color: white;
  line-height: 40px;

  p {
    margin: 5px 0;
  }
  strong {
    color: #fe9c00;
    font-size: 22px;
  }

  @media print {
    font-size: 18px;
  }
`;

const SkillsBlock = styled.div`
  h1 {
    font-size: 18px;
    margin: 5px 0;
    color: white;
    line-height: 40px;
  }

  @media print {
    h1 {
      font-size: 18px;
      margin: 3px 0;
    }
  }
`;

const PrintButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media print {
    display: none;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;
