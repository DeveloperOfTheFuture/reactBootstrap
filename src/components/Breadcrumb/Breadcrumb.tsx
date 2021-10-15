import React, {FC} from 'react';
import style from './Breadcrumb.module.scss';

interface IBreadcrumbList {
  title: string | number;
  href: string;
  id: number;
}

interface BreadcrumbProps {
  list?: Array<IBreadcrumbList>;
}

const breadcrumbItems = [
  {title: 'Home', href: '/'},
  {title: 'Library', href: '/library'},
  {title: 'Data', href: '/data'}
];

// Todo Props for custom list
const Breadcrumb: FC<BreadcrumbProps> = ({list = breadcrumbItems}) => {
  return (
    <nav className={style.Breadcrumb} aria-label="breadcrumb">
      <ol className={style.Breadcrumb__list}>
        {list.map((item, index) =>
          index + 1 === list.length ?
            <li className={style.Breadcrumb__item_active} key={index}>{item.title}</li>
            :
            <li className={style.Breadcrumb__item} key={index}>
              <a className={style.Breadcrumb__link} href={item.href}>{item.title}</a>
            </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;