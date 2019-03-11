import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserCard } from 'react-ui-cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCard
          cardClass='float'
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Justin Case'
          positionName='Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        />
        <UserCard
          cardClass='float'
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Justin Case'
          positionName='Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        />
        <UserCard
          cardClass='float'
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Justin Case'
          positionName='Software Developer'
          stats={[
            {
              name: 'followers',
              value: 21
            },
            {
              name: 'following',
              value: 37
            },
            {
              name: 'posts',
              value: 117
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
