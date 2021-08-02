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
    const { calculation } = this.state;

    switch (type) {
      case 'result':
      const number = eval(calculation);
      const result = parseFloat(number.toPrecision(12));

        return this.setState({ calculation: `${result}` });

      case 'backspace':
        return this.setState({ calculation: calculation.slice(0, -1) });

      case 'number':

      if (calculation === '0') {
        return this.setState({ calculation: calculation.slice(0, -1) + content });
      } else {
        const lastElement = calculation.split('-').join(',').split('+').join(',').split('*').join(',').split('/').join(',').split(',').reverse()[0];
        if (!lastElement.includes('.') && (lastElement.split('')[0] === '0') && calculation.endsWith('0')) {
          return this.setState({ calculation })
        }
        return this.setState({ calculation: calculation + content });
      }

      case 'operator':
        if (calculation) {
           if (!calculation.endsWith('*') && !calculation.endsWith('/') && !calculation.endsWith('-') && !calculation.endsWith('+') && !calculation.endsWith('.')) {
             return this.setState({ calculation: calculation + content });
           } else {
             return this.setState({ calculation: calculation.slice(0, -1) + content });
           };
        } else {
           return this.setState({ calculation: '' });
        };

      case 'clear':
        return this.setState({ calculation: '' });

      case 'point':
        if (calculation) {
          const lastNumber = calculation.split('-').join(',').split('+').join(',').split('*').join(',').split('/').join(',').split(',').reverse()[0];

          if (!calculation.endsWith('.') && !lastNumber.includes('.') && !calculation.endsWith('-') && !calculation.endsWith('+') && !calculation.endsWith('*') && !calculation.endsWith('/')) {
            return this.setState({ calculation: calculation + content });
          } else {
            return this.setState({ calculation: calculation });
          }
        } else {
          return this.setState({ calculation: '' });
        }
    }
  }

  render() {
    const { calculation } = this.state;
    const isMobile =  typeof window.orientation !== undefined ? 'is-mobile' : '';

    return (
      <div className={`calculator ${isMobile}`}>
        <Display calculation={calculation}/>
        <Keyboard onClick={this.handleButtonClick}/>
      </div>
    );
  }
};
