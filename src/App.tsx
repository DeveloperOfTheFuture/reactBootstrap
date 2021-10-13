import React, {FC} from 'react';
import BButton from "./components/ui-kit/BButton/BButton";

const App: FC = () => {
  return (
    <div>
      <BButton type='primary'>Primary</BButton>
      <BButton type='secondary'>Secondary</BButton>
      <BButton type='success'>Success</BButton>
      <BButton type='danger'>Danger</BButton>
      <BButton type='warning'>Warning</BButton>
      <BButton type='info'>Info</BButton>
      <BButton type='dark'>Dark</BButton>
      <BButton type='link'>Link</BButton>
    </div>
  );
};

export default App;
