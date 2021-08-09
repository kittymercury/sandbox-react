import React from 'react';
import Display from './display';
import Keyboard from './keyboard';

const DEFAULT_FONT_SIZE = 50;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: '',
      fontSize: DEFAULT_FONT_SIZE
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.autoscale(DEFAULT_FONT_SIZE);
  }

  autoscale = (initialFontSize) => {
    const displayWrapper = document.querySelector('#app > div > div.display-wrapper');
    const display = document.querySelector('#app > div > div.display-wrapper > div');

    if (initialFontSize) {
      display.style['font-size'] = `${initialFontSize}px`;
    }

    if (display.clientWidth > displayWrapper.clientWidth) {
      const currentFontSize = parseInt(display.style.fontSize);
      display.style['font-size'] = `${currentFontSize - 1}px`;

      this.autoscale();
    }
  }

  setCalculationState = (string) => {
    this.setState({ calculation: string });
  }

  handleButtonClick = (content, type) => {
    const { calculation } = this.state;
    const lastNumber = calculation.split('-').join(',').split('+').join(',').split('*').join(',').split('/').join(',').split(',').reverse()[0];

    switch (type) {
      case 'result':
        const number = eval(calculation);
        const result = parseFloat(number.toPrecision(12));

        return this.setCalculationState(`${result}`);

      case 'backspace':
        return this.setCalculationState(calculation.slice(0, -1));

      case 'number' :

        if (calculation === '0') {
          return this.setCalculationState(calculation.slice(0, -1) + content);
        } else {
          const lastNumber = calculation.split('-').join(',').split('+').join(',').split('*').join(',').split('/').join(',').split(',').reverse()[0];
          if (!lastNumber.includes('.') && (lastNumber.split('')[0] === '0') && calculation.endsWith('0')) {
            return this.setCalculationState(calculation);
          }
          return this.setCalculationState(calculation + content);
        }

      case 'operator':
        if (calculation) {
           if (!calculation.endsWith('*') && !calculation.endsWith('/') && !calculation.endsWith('-') && !calculation.endsWith('+') && !calculation.endsWith('.')) {
             return this.setCalculationState(calculation + content);
           } else {
             return this.setCalculationState(calculation.slice(0, -1) + content);
           };
        } else {
           return this.setCalculationState('');
        };

      case 'clear':
        return this.setCalculationState('');

      case 'point':
        if (calculation) {
          if (!calculation.endsWith('.') && !lastNumber.includes('.') && !calculation.endsWith('-') && !calculation.endsWith('+') && !calculation.endsWith('*') && !calculation.endsWith('/')) {
            return this.setCalculationState(calculation + content);
          } else {
            return this.setCalculationState(calculation);
          }
        } else {
          return this.setCalculationState('');
        }

      case 'toggle-sign':
      if (calculation) {
        const newValue = parseFloat(calculation) * -1;

        return this.setCalculationState(String(newValue));
      }

    }
  }

  render() {
    const { calculation } = this.state;

    return (
      <div className="calculator">
        <Display calculation={calculation} />
        <Keyboard onClick={this.handleButtonClick} calculation={calculation}/>
      </div>
    );
  }
};
