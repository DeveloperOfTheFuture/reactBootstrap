import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import style from './BAlert.module.scss';

interface BAlertProps {
  children: ReactNode;
  type?: string;
}

enum BAlertTypes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark'
}

const BAlert: FC<BAlertProps> = ({children, type = BAlertTypes.primary}) => {
  const alertClasses = classNames(
    style.BAlert,
    {
      [style.primary]: type === BAlertTypes.primary,
      [style.secondary]: type === BAlertTypes.secondary,
      [style.success]: type === BAlertTypes.success,
      [style.danger]: type === BAlertTypes.danger,
      [style.warning]: type === BAlertTypes.warning,
      [style.info]: type === BAlertTypes.info,
      [style.light]: type === BAlertTypes.light,
      [style.dark]: type === BAlertTypes.dark
    }
  );

  return (
    <div className={alertClasses} role="alert">
      {children}
    </div>
  );
};

export default BAlert;