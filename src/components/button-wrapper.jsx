import React from 'react';

export default class ButtonWrapper extends React.Component {
  render () {
    return (
      <div className="button-wrapper" onClick={this.props.onClick}>
        <div className="button-add" id="focus">✚</div>
      </div>
    )
  }
}
