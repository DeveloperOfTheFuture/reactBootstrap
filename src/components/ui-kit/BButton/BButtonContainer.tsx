import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BButton from "./BButton";

const BButtonContainer: FC = () => {
  return (
    <>
      <h2>Buttons</h2>
      <ComponentsContainer>
        <BButton type='primary'>Primary</BButton>
        <BButton type='secondary'>Secondary</BButton>
        <BButton type='success'>Success</BButton>
        <BButton type='danger'>Danger</BButton>
        <BButton type='warning'>Warning</BButton>
        <BButton type='info'>Info</BButton>
        <BButton type='light'>Light</BButton>
        <BButton type='dark'>Dark</BButton>
        <BButton type='link'>Link</BButton>
      </ComponentsContainer>
    </>
  );
};

export default BButtonContainer;