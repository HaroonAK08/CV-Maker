// import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Template = () => {
  return (
    <Main>
      <Header>Choose a Template</Header>
      <BoxContainer>
        <NavBox to="/template1">Template 1</NavBox>
        <NavBox to="/template2">Template 2</NavBox>
        <NavBox to="/template3">Template 3</NavBox>
        <NavBox to="/template4">Template 4</NavBox>
        <NavBox to="/template5">Template 5</NavBox>
      </BoxContainer>
    </Main>
  );
};

export default Template;

const Main = styled.div`
  background-color: #e4ebeb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const NavBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #4a90e2;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #357abd;
    transform: scale(1.05);
  }
`;
