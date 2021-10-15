import React, {FC} from 'react';
import ComponentsContainer from "../../layout/ComponentsContainer/ComponentsContainer";
import BAlert from "./BAlert";

const BAlertContainer: FC = () => {
  return (
    <>
      <h2>Alerts</h2>
      <ComponentsContainer>
        <BAlert type='primary'>A simple primary alert—check it out!</BAlert>
        <BAlert type='secondary'>A simple secondary alert—check it out!</BAlert>
        <BAlert type='success'>A simple success alert—check it out!</BAlert>
        <BAlert type='danger'>A simple danger alert—check it out!</BAlert>
        <BAlert type='warning'>A simple warning alert—check it out!</BAlert>
        <BAlert type='info'>A simple info alert—check it out!</BAlert>
        <BAlert type='light'>A simple light alert—check it out!</BAlert>
        <BAlert type='dark'>A simple dark alert—check it out!</BAlert>
      </ComponentsContainer>
    </>
  );
};

export default BAlertContainer;