import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BAlert, {BAlertTypes} from "./BAlert";

const BAlertContainer: FC = () => {
  return (
    <>
      <h2>Alerts</h2>
      <ComponentsContainer>
        <BAlert type={BAlertTypes.primary}>A simple primary alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.secondary}>A simple secondary alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.success}>A simple success alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.danger}>A simple danger alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.warning}>A simple warning alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.info}>A simple info alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.light}>A simple light alert—check it out!</BAlert>
        <BAlert type={BAlertTypes.dark}>A simple dark alert—check it out!</BAlert>
      </ComponentsContainer>
    </>
  );
};

export default BAlertContainer;