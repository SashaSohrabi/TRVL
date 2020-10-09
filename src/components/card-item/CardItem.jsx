import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
      <li className="card-item cards__card-item">
        <Link className="card-item__link">
          <figure className="card-item__pic-wrap">
            <img src="/" alt="Travel Image" className="card-item__img" />
          </figure>
          <div className="card-item__info">
            <h5 className="card-item__text" />
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
