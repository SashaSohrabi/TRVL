import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem({ src, text, label, path }) {
  return (
    <>
      <li className="card-item cards__card-item">
        <Link className="card-item__link" to={path}>
          <figure className="card-item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel pic" className="card-item__img" />
          </figure>
          <div className="card-item__info">
            <h5 className="card-item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
