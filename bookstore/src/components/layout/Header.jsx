import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.nav`
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: auto;
  width: 100%;
  min-width: 760px;
  height: 4rem;
  background: #5438dc;
  border: 1px #302080;
  border-style: hidden hidden groove hidden;
  font-family: "HP Simplified";
`;

const BtnCollection = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  column-gap: 5px;
`;

const LogoSite = styled.button`
  position: relative;
  height: auto;
  width: 3em;
  margin: 10px 0px 10px 10px;
  font-size: 24px;
  font-family: "HP Simplified";
  color: white;
  background-color: transparent;
  border: none;
  &: hover {
    cursor: pointer;
  }
`;

const HeaderBtn = styled.button`
  position: relative;
  height: 2em;
  width: 3em;
  margin: 10px;
  font-size: 16px;
  font-family: "HP Simplified";
  color: white;
  background-color: transparent;
  border: none;
  &: hover {
    cursor: pointer;
  }
`;

const UploadBtn = styled.button`
  position: relative;
  height: 1.75em;
  width: 4.75em;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #5438dc;
  background-colour: white;
  border-radius: 10em;
  border: 2px solid #302080;
  &: hover {
    cursor: pointer;
  }
`;

const AccountBtn = styled.image`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 10px;
  background-color: white;
  border-radius: 5rem;
  border: 2px solid #302080;
  &: hover {
    cursor: pointer;
  }
`;

const Searchbar = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 25px;
  margin: 5px;
  background-color: white;
  border-radius: 15px;
  border: 1.5px solid #302080;
  &: hover {
    cursor: text;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoSite>THE CAGE</LogoSite>
      </Link>
      <BtnCollection>
        <Searchbar />
        <Link to="/Novels">
          <HeaderBtn>Novels</HeaderBtn>
        </Link>

        <UploadBtn>Upload</UploadBtn>
        <AccountBtn></AccountBtn>
      </BtnCollection>
    </HeaderContainer>
  );
};

export default Header;

/*
<Link to="/Manga">
          <HeaderBtn>Manga</HeaderBtn>
        </Link>
        <Link to="/Art">
          <HeaderBtn>Art</HeaderBtn>
        </Link>
*/
