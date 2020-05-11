import React from "react";
import styled, { StyledComponent } from "styled-components/macro";

const HeadDiv: StyledComponent<"div", never> = styled.div`
  width: 100%;
  height: 250px;
  background-color: #fae3d2;
  padding: 50px;
  display: block;
  @media only screen and (max-width: 600px) {
    padding: 30px;
  }
`;

const Title: StyledComponent<"div", never> = styled.div`
  font-size: 68px;
  font-weight: 700;
  float: left;
`;

const PinkColourCircle: StyledComponent<"div", never> = styled.div`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: #ec81b7;
  float: right;
  opacity: 90%;
  margin-top: -200px;
  margin-right: -30px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

const BlueColourCircle: StyledComponent<"div", never> = styled.div`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-color: #425194;
  float: right;
  opacity: 80%;
  margin-top: -20px;
  margin-right: -400px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeadDiv>
      <Title>Create a new task</Title>
      <PinkColourCircle />
      <BlueColourCircle />
    </HeadDiv>
  );
};

export default Header;
