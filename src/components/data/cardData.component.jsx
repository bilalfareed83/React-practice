import React from 'react';
import Card from '../card/card.component';

class CardData extends React.Component {
  render() {
    const arrObj = [
      { heading: 'Hello i am Bilal', decription: 'This is my picture' },
      { heading: 'Hello i am Sajjad', decription: 'This is my picture' },
      { heading: 'Hello i am Tehsin', decription: 'This is my picture' }
    ];

    return (
      <div>
        {arrObj.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    );
  }
}

export default CardData;
