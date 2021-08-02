import React from 'react';

export default class InputWrapper extends React.Component {
  render () {
    const { onClick, onChange, value } = this.props;

    return (
      <div className="input-wrapper">
        <input type="text" autoFocus onChange={onChange} value={value} />
        <div className="button-ok" onClick={onClick}>OK</div>
      </div>
    )
  }
}
