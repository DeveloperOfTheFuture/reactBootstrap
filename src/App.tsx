import React, {FC} from 'react';
import './styles.scss';
import BBadgeContainer from "./components/ui-kit/BBadge/BBadgeContainer";
import BButtonContainer from "./components/ui-kit/BButton/BButtonContainer";

const App: FC = () => {
  return (
    <div>
      <h1>UI-KIT</h1>
      <BButtonContainer/>
      <BBadgeContainer/>
    </div>
  );
};

export default App;
