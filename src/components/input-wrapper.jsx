import React from 'react';

export default class InputWrapper extends React.Component {
  render () {

    return (
      <div className="input-wrapper">
        <input type="text" autoFocus/>
        <div className="button-ok">OK</div>
      </div>
    )
  }
}
