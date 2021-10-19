import React, {FC} from 'react';
import './styles.scss';
import BBadgeContainer from "./components/ui-kit/BBadge/BBadgeContainer";
import BButtonContainer from "./components/ui-kit/BButton/BButtonContainer";
import BAlertContainer from "./components/ui-kit/Alert/BAlertContainer";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Pagination from "./components/Pagination/Pagination";

const App: FC = () => {
  return (
    <div>
      <h1>UI-KIT</h1>
      <BButtonContainer/>
      <BBadgeContainer/>
      <BAlertContainer/>
      <hr/>
      <h2>Breadcrumb</h2>
      <Breadcrumb />
      <hr/>
      <h2>Pagination</h2>
      <Pagination/>
    </div>
  );
};

export default App;
