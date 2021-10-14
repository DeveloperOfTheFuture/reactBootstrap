import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';
import style from './BBadge.module.scss';

interface BBadgeProps {
  children: ReactNode;
  type?: string;
}

enum BadgeTypes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark'
}

const BBadge: FC<BBadgeProps> = ({children, type= BadgeTypes.primary}) => {
  const badgeClasses = classNames(
    style.BBadge,
    {
      [style.primary]: type === BadgeTypes.primary,
      [style.secondary]: type === BadgeTypes.secondary,
      [style.success]: type === BadgeTypes.success,
      [style.danger]: type === BadgeTypes.danger,
      [style.warning]: type === BadgeTypes.warning,
      [style.info]: type === BadgeTypes.info,
      [style.light]: type === BadgeTypes.light,
      [style.dark]: type === BadgeTypes.dark
    }
  )
  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default BBadge;