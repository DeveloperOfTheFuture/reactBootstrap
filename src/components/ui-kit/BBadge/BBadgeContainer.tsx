import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BBadge, {BadgeTypes} from "./BBadge";

const BBadgeContainer: FC = () => {
  return (
    <>
      <h2>Badges</h2>
      <ComponentsContainer>
        <BBadge type={BadgeTypes.primary}>Primary</BBadge>
        <BBadge type={BadgeTypes.secondary}>Secondary</BBadge>
        <BBadge type={BadgeTypes.success}>Success</BBadge>
        <BBadge type={BadgeTypes.danger}>Danger</BBadge>
        <BBadge type={BadgeTypes.warning}>Warning</BBadge>
        <BBadge type={BadgeTypes.info}>Info</BBadge>
        <BBadge type={BadgeTypes.light}>Light</BBadge>
        <BBadge type={BadgeTypes.dark}>Dark</BBadge>
      </ComponentsContainer>
    </>
  );
};

export default BBadgeContainer;