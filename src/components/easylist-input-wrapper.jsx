import React from 'react';

export default class EasyListInputWrapper extends React.Component {
  render () {

    return (
      <div className="input-wrapper hidden">
        <input type="text" maxlength="26">
        <div className="button-submit">OK</div>
      </div>
    )
  }
}
