import React, {FC} from 'react';
import style from './Pagination.module.scss';

const Pagination: FC = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className={style.pagination}>
        <li className={style.item}>
          <a href="#" className={style.link} aria-label="Previous">
            <span className={style.icon} aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className={style.item}><a className={style.link} href="#">1</a></li>
        <li className={style.item}>
          <a href="#" className={style.link} aria-label="Next">
            <span className={style.icon} aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;