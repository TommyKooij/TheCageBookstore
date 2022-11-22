import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
//import { db } from "./firebaseconfig";
import Header from "./components/layout/Header";
/*import Footer from "./components/layout/Footer";
import deleteItem from "./img/UI/remove.png";
import updateItem from "./img/UI/update.png";*/

const Site = styled.html`
  width: auto;
  height: auto;
  font-family: "HP Simplified";
`;

const Collection = styled.div`
  width: auto;
  height: auto;
  margin: 0px 50px 0px 50px;
`;

const Label = styled.text`
  display: flex;
  margin: 20px 0px 0px 30px;
  font-size: 42px;
  color: #5438dc;
`;

const ItemCollection = styled.div`
  display: inline-flex;
  width: auto;
  height: auto;
  column-gap: 10px;
  margin: 10px;
`;

const Item = styled.div`
  display: flex;
  margin: 15px 0px 0px 30px;
  width: 15em;
  height: 20em;
  background-color: white;
  border: 1.5px solid #302080;
`;

const ItemTxtBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 246px 0px 0px 0px;
  width: 13.2em;
  height: 4em;
  color: white;
  background-color: rgba(1, 1, 1, 0.3);
  font-size: 18px;
`;

const Novels = () => {
  return (
    <Site>
      <Header />
      <Collection>
        <Label>Novels:</Label>
        <ItemCollection>
          <Link to="/ShowNovels">
            <Item>
              <ItemTxtBox>text</ItemTxtBox>
            </Item>
          </Link>
        </ItemCollection>
      </Collection>
    </Site>
  );
};

export default Novels;
