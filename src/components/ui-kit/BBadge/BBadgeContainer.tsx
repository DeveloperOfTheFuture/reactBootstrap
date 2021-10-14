import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BBadge from "./BBadge";

const BBadgeContainer: FC = () => {
  return (
    <>
      <h2>Badges</h2>
      <ComponentsContainer>
        <BBadge type='primary'>Primary</BBadge>
        <BBadge type='secondary'>Secondary</BBadge>
        <BBadge type='success'>Success</BBadge>
        <BBadge type='danger'>Danger</BBadge>
        <BBadge type='warning'>Warning</BBadge>
        <BBadge type='info'>Info</BBadge>
        <BBadge type='light'>Light</BBadge>
        <BBadge type='dark'>Dark</BBadge>
      </ComponentsContainer>
    </>
  );
};

export default BBadgeContainer;