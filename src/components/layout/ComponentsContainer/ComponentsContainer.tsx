import React, {FC, ReactNode} from 'react';
import style from './ComponentsContainer.module.scss';

interface ComponentsContainerProps {
  children: ReactNode;
}

const ComponentsContainer: FC<ComponentsContainerProps> = ({children}) => {
  return (
    <section className={style.CContainer}>
      {children}
    </section>
  );
};

export default ComponentsContainer;