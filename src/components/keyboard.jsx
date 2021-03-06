import React from 'react';
import Button from './button';

export default class Keyboard extends React.Component {

  renderButtonClear = (condition, onClick) => {
    if (condition) {
      return <Button content="C" type="clear" onClick={onClick} />
    } else {
      return <Button content="AC" type="clear" onClick={onClick} />
    }
  }
  render () {
    const { onClick, calculation } = this.props;

    return (
      <div className="keyboard">
        <div className="keyboard-line">
          {this.renderButtonClear(calculation, onClick)}
          <Button content="←" type="backspace" onClick={onClick} />
          <Button content="+/-" type="toggle-sign" onClick={onClick} />
          <Button content="+" type="operator" onClick={onClick} />
        </div>

        <div className="keyboard-line">
          <Button content="1" type="number" onClick={onClick} />
          <Button content="2" type="number" onClick={onClick} />
          <Button content="3" type="number" onClick={onClick} />
          <Button content="-" type="operator" onClick={onClick} />
        </div>

        <div className="keyboard-line">
          <Button content="4" type="number" onClick={onClick} />
          <Button content="5" type="number" onClick={onClick} />
          <Button content="6" type="number" onClick={onClick} />
          <Button content="*" type="operator" onClick={onClick} />
        </div>

        <div className="keyboard-line">
          <Button content="7" type="number" onClick={onClick} />
          <Button content="8" type="number" onClick={onClick} />
          <Button content="9" type="number" onClick={onClick} />
          <Button content="/" type="operator" onClick={onClick} />
        </div>

        <div className="keyboard-line">
          <Button content="0" type="number" onClick={onClick} />
          <Button content="." type="point" onClick={onClick} />
          <Button content="=" type="result" onClick={onClick} />
        </div>
      </div>
    )
  }
}
