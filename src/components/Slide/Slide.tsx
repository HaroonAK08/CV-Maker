// import React from 'react';
import {
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { ImBooks } from "react-icons/im";
import { FcTemplate } from "react-icons/fc";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = ({ statuses }: any) => {
  return (
    <Steps
      items={[
        {
          title: "Personal Details",
          status: statuses.personal,
          icon: <UserOutlined />,
          className: "clickable-step",
        },
        {
          title: "Experiences",
          status: statuses.experiences,
          icon: <SolutionOutlined />,
          className: "clickable-step",
        },
        {
          title: "Education",
          status: statuses.education,
          icon: <ImBooks />,
          className: "clickable-step",
        },
        {
          title: "Template",
          status: statuses.template,
          icon: <FcTemplate />,
          className: "clickable-step",
        },
        {
          title: "Generate",
          status: statuses.done,
          icon: <SmileOutlined />,
          className: "clickable-step",
        },
      ]}
    />
  );
};

export default Slide;
