import React from 'react';
import Display from './display';
import Keyboard from './keyboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display/>
        <Keyboard/>
      </div>
    );
  }
};
