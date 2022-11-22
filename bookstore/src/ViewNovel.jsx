import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./components/layout/Header";

const Site = styled.html`
  width: auto;
  height: auto;
  font-family: "HP Simplified";
`;

const Collection = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin: 0px 50px 0px 30px;
`;

const Title = styled.text`
  display: flex;
  margin: 20px 0px 0px 55px;
  font-size: 42px;
  color: #5438dc;
`;

const Cover = styled.image`
  display: flex;
  width: 300px;
  height: 375px;
  margin: 20px 0px 0px 30px;
  border: 1.5px solid #302080;
`;

const InfoBox = styled.div`
  width: 425px;
  height: 375px;
  margin: 20px 0px 0px 25px;
  border: 1.5px solid #302080;
`;

const InfoBlock = styled.div`
  width: auto;
  height: auto;
`;

const InfoLabel = styled.text`
  display: flex;
  margin: 10px 0px 0px 10px;
  font-size: 28px;
  color: #5438dc;
`;

const InfoText = styled.text`
  display: flex;
  margin: 0px 0px 0px 10px;
  font-size: 20px;
  color: #5438dc;
`;

const ViewNovel = () => {
  return (
    <Site>
      <Header />
      <Title>Reason Vol.1</Title>
      <Collection>
        <Cover></Cover>
        <InfoBox>
          <InfoBlock>
            <InfoLabel>Release Date:</InfoLabel>
            <InfoText>19/07/2022</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Author:</InfoLabel>
            <InfoText>Tom Kage</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Genre(s):</InfoLabel>
            <InfoText>Fantasy</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Page #:</InfoLabel>
            <InfoText>255</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Price:</InfoLabel>
            <InfoText>8.99</InfoText>
          </InfoBlock>
        </InfoBox>
        <InfoBox>
          <InfoBlock>
            <InfoLabel>Synopsis:</InfoLabel>
            <InfoText>hallo</InfoText>
          </InfoBlock>
        </InfoBox>
      </Collection>
    </Site>
  );
};

export default ViewNovel;
