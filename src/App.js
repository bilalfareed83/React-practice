import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from './components/login/login.component';
// import SignUp from './components/login/login.component';
// import Card from './components/card/card.component';
import CardData from './components/data/cardData.component';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SignUp /> */}
        {/* <Card /> */}

        <CardData />
      </div>
    );
  }
}

export default App;
