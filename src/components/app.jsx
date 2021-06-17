import React from 'react';
import Display from './display';
import Keyboard from './keyboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: ''
    }
  }

  handleButtonClick = (content, type) => {
    const calculation = this.state.calculation;

    switch (type) {
      case 'result':
        return this.setState({ calculation: eval(calculation) });
      case 'backspace':
        return this.setState({ calculation: calculation.slice(0, -1) });
      case 'number':
        return this.setState({ calculation: calculation + content });
      case 'operator':
        return this.setState({ calculation: calculation + content });
      case 'clear':
        return this.setState({ calculation: '' })
    }
  }

  render() {
    const calculation = this.state.calculation;

    return (
      <div className="calculator">
        <Display calculation={calculation}/>
        <Keyboard onClick={this.handleButtonClick}/>
      </div>
    );
  }
};
