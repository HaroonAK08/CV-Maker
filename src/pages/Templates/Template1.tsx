// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { getPersonalInfo, getEducationInfo, getExperienceInfo } from "../../api/api";
// import styled from "styled-components";
// import profileImage from '../../assets/dp.jpeg';  // Adjust path if necessary

// const Template1 = () => {
//   const [userData, setUserData] = useState([]);
//   const [educationData, setEducationData] = useState([]);
//   const [experienceData, setExperienceData] = useState([]);

//   useEffect(() => {
//     getPersonalInfo()?.then((res) => setUserData(res.data));
//     getEducationInfo()?.then((res) => setEducationData(res.data));
//     getExperienceInfo()?.then((res) => setExperienceData(res.data));
//   }, []);

//   return (
//     <Main>
//       <Header>
//         <ProfileImage src={profileImage} alt="Profile Photo" />
//         </Header>
//         <Section>

//         <SectionHeader>Personal</SectionHeader>

//           {userData?.map((data: any) => (
//             <div key={data.email}>
//               <Name>{data.firstName} {data.lastName}</Name>
//               <Contact>
//                 <p><strong>Email:</strong> {data.email}</p>
//                 <p><strong>Phone:</strong> {data.phoneNumber}</p>
//                 <p><strong>Address:</strong> {data.address}</p>
//                 <p><strong>City:</strong> {data.city}</p>
//               </Contact>
//             </div>
//           ))}

//                   </Section>
//       <Content>
//         <Section>
//           <SectionHeader>Education</SectionHeader>
//           {educationData?.map((data: any) => (
//             <InfoBlock key={data.degree}>
//               <p><strong>Degree:</strong> {data.degree}</p>
//               <p><strong>Institute:</strong> {data.school}</p>
//               <p><strong>City:</strong> {data.city}</p>
//               <p><strong>Description:</strong> {data.description}</p>
//             </InfoBlock>
//           ))}
//         </Section>
//         <Section>
//           <SectionHeader>Experience</SectionHeader>
//           {experienceData?.map((data: any) => (
//             <InfoBlock key={data.companyName}>
//               <p><strong>Company Name:</strong> {data.companyName}</p>
//               <p><strong>Role:</strong> {data.title}</p>
//               <p><strong>Years of Experience:</strong> {data.years}</p>
//               <p><strong>Description:</strong> {data.description}</p>
//             </InfoBlock>
//           ))}
//         </Section>
//         <Section>
//           <SectionHeader>Skills</SectionHeader>
//           {educationData?.map((data: any) => (
//             <InfoBlock key={data.companyName}>
//               <p><strong>Company Name:</strong> {data.skills}</p>
//               {/* <p><strong>Role:</strong> {data.title}</p>
//               <p><strong>Years of Experience:</strong> {data.years}</p>
//               <p><strong>Description:</strong> {data.description}</p> */}
//             </InfoBlock>
//           ))}
//         </Section>
//       </Content>
//     </Main>
//   );
// };

// export default Template1;

// const Main = styled.div`
//   font-family: 'Arial', sans-serif;
//   color: #333;
//   max-width: 900px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f9f9f9;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const ProfileImage = styled.img`
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   margin-right: 20px;
// `;



// const Name = styled.h1`
//   font-size: 28px;
//   margin: 0;
// `;

// const Contact = styled.div`
//   font-size: 16px;
//   color: #555;
// `;

// const Content = styled.div`
//   margin-top: 20px;
// `;

// const Section = styled.section`
//   margin-bottom: 20px;
// `;

// const SectionHeader = styled.h2`
//   font-size: 22px;
//   border-bottom: 2px solid #007BFF;
//   padding-bottom: 5px;
//   margin-bottom: 10px;
//   color: #007BFF;
// `;

// const InfoBlock = styled.div`
//   margin-bottom: 15px;
//   p {
//     font-size: 16px;
//     margin: 5px 0;
//     line-height: 1.5;
//   }
//   strong {
//     color: #333;
//   }
// `;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getPersonalInfo, getEducationInfo, getExperienceInfo } from "../../api/api";
import styled from "styled-components";
import profileImage from '../../assets/dp.jpeg';  // Adjust path if necessary

const Template1 = () => {
  const [userData, setUserData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    getPersonalInfo()?.then((res) => setUserData(res.data));
    getEducationInfo()?.then((res) => setEducationData(res.data));
    getExperienceInfo()?.then((res) => setExperienceData(res.data));
  }, []);

  // Trigger the print functionality
  const handlePrint = () => {
    window.print();
  };

  return (
    <Main>
      <Header>
        <ProfileImage src={profileImage} alt="Profile Photo" />
      </Header>
      <Section>
        <SectionHeader>Personal</SectionHeader>
        {userData?.map((data: any) => (
          <div key={data.email}>
            <Name>{data.firstName} {data.lastName}</Name>
            <Contact>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phoneNumber}</p>
              <p><strong>Address:</strong> {data.address}</p>
              <p><strong>City:</strong> {data.city}</p>
            </Contact>
          </div>
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
              <p><strong>Company Name:</strong> {data.companyName}</p>
              <p><strong>Role:</strong> {data.title}</p>
              <p><strong>Years of Experience:</strong> {data.years}</p>
              <p><strong>Description:</strong> {data.description}</p>
            </InfoBlock>
          ))}
        </Section>
        <Section>
          <SectionHeader>Skills</SectionHeader>
          {educationData?.map((data: any) => (
            <InfoBlock key={data.companyName}>
              <p><strong>Skills:</strong> {data.skills}</p>
            </InfoBlock>
          ))}
        </Section>
      </Content>
      
      {/* Print Button */}
      <PrintButton onClick={handlePrint}>Print</PrintButton>
    </Main>
  );
};

export default Template1;

const Main = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background:green;
  background: linear-gradient(135deg, #f9f9f9, #e6f7ff);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 100%;
  @media print {
    margin: 0;
    box-shadow: none;
    max-width: 100%;
    padding: 10px;
    height: auto;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media print {
    margin-bottom: 10px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 3px solid #007BFF;
  @media print {
    width: 100px;
    height: 100px;
    border: 2px solid #007BFF;
  }
`;

const Name = styled.h1`
  font-size: 28px;
  margin: 0;
  color: #007BFF;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  @media print {
    font-size: 24px;
  }
`;

const Contact = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  @media print {
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-top: 30px;
  @media print {
    margin-top: 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
  @media print {
    margin-bottom: 20px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 22px;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: #007BFF;
  @media print {
    font-size: 18px;
    margin-bottom: 5px;
    padding-bottom: 3px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  @media print {
    padding: 10px;
    box-shadow: none;
    background: none;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
    line-height: 1.5;
    color: #333;
    @media print {
      font-size: 14px;
      margin: 3px 0;
    }
  }

  strong {
    color: #007BFF;
    @media print {
      color: black;
    }
  }
`;

// Add a print button with proper styling
const PrintButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media print {
    display: none;  // Hide the button in the print view
  }
`;
