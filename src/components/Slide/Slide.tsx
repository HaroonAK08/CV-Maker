// import React from 'react';
import {
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { ImBooks } from "react-icons/im";
import { FcTemplate } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = ({ statuses, setStep }: any) => {
  const handleStepClick = (stepIndex: number) => {
    setStep(stepIndex + 1);
  };

  return (
    <Steps
      current={statuses.current}
      items={[
        {
          title: "Personal Details",
          status: statuses.personal,
          icon: <UserOutlined />,
          className: "clickable-step",
          onClick: () => handleStepClick(0),
          style: { cursor: "pointer" },
        },
        {
          title: "Education",
          status: statuses.education,
          icon: <ImBooks />,
          className: "clickable-step",
          onClick: () => handleStepClick(1),
          style: { cursor: "pointer" },
        },
        {
          title: "Skills",
          status: statuses.skills,
          icon: <GiSkills />
          ,
          className: "clickable-step",
          onClick: () => handleStepClick(2),
          style: { cursor: "pointer" },
        },
        {
          title: "Experiences",
          status: statuses.experiences,
          icon: <SolutionOutlined />,
          className: "clickable-step",
          onClick: () => handleStepClick(3),
          style: { cursor: "pointer" },
        },
        {
          title: "Template",
          status: statuses.template,
          icon: <FcTemplate />,
          className: "clickable-step",
          onClick: () => handleStepClick(4),
          style: { cursor: "pointer" },
        },
      ]}
    />
  );
};

export default Slide;
