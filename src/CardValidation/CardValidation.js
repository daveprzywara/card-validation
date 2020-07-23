import React from 'react';
import CardNumber from './components/CardNumber';
import CardDate from './components/CardDate';
import CardCode from './components/CardCode';
import * as Styled from "./components/style";

function ValidateCard() {
  return (
    <Styled.CardValidation>
      <CardNumber/>
      <CardDate/>
      <CardCode />
    </Styled.CardValidation>
  )
};

export default ValidateCard;
