import React from 'react';

export default class InputWrapper extends React.Component {
  render () {
    const onClick = this.props.onClick;
    const onChange = this.props.onChange;
    const value = this.props.value;

    return (
      <div className="input-wrapper">
        <input type="text" autoFocus onChange={onChange} value={value} />
        <div className="button-ok" onClick={onClick}>OK</div>
      </div>
    )
  }
}
