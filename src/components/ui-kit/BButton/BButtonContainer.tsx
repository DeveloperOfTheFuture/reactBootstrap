import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BButton, {ButtonTypes} from "./BButton";

const BButtonContainer: FC = () => {
  return (
    <>
      <h2>Buttons</h2>
      <ComponentsContainer>
        <BButton type={ButtonTypes.primary}>Primary</BButton>
        <BButton type={ButtonTypes.secondary}>Secondary</BButton>
        <BButton type={ButtonTypes.success}>Success</BButton>
        <BButton type={ButtonTypes.danger}>Danger</BButton>
        <BButton type={ButtonTypes.warning}>Warning</BButton>
        <BButton type={ButtonTypes.info}>Info</BButton>
        <BButton type={ButtonTypes.light}>Light</BButton>
        <BButton type={ButtonTypes.dark}>Dark</BButton>
        <BButton type={ButtonTypes.link}>Link</BButton>
      </ComponentsContainer>
    </>
  );
};

export default BButtonContainer;