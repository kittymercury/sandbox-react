import React from 'react';

export default class InputWrapper extends React.Component {
  render () {

    return (
      <div className="input-wrapper hidden">
        <input type="text">
        <div className="button-submit">OK</div>
      </div>
    )
  }
}
