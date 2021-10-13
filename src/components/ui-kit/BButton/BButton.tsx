import React, {FC, ReactNode} from 'react';
import style from './BButton.module.scss';
import classNames from 'classnames';

interface BButtonProps {
  children: ReactNode;
  type?: string;
}

enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
  link = 'link'
}

const BButton: FC<BButtonProps> = ({children, type = 'primary'}) => {
  const btnClassNames = classNames(
    style.BButton,
    {
      [style.primary]: type === ButtonTypes.primary,
      [style.secondary]: type === ButtonTypes.secondary,
      [style.success]: type === ButtonTypes.success,
      [style.danger]: type === ButtonTypes.danger,
      [style.warning]: type === ButtonTypes.warning,
      [style.info]: type === ButtonTypes.info,
      [style.light]: type === ButtonTypes.light,
      [style.dark]: type === ButtonTypes.dark,
      [style.link]: type === ButtonTypes.link
    }
  );

  return (
    <button className={`${btnClassNames}`}>
      {children}
    </button>
  );
};

export default BButton;