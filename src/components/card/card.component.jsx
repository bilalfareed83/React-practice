import React from 'react';
import './card.style.css';

const Card = props => {
  return (
    <div className="cardStyle">
      <div>
        <h3>{props.heading}</h3>
        <text>{props.decription}</text>
      </div>
    </div>
  );
};

export default Card;
