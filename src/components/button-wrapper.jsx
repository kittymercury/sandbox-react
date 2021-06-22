import React from 'react';

export default class ButtonWrapper extends React.Component {
  render () {
    const onClick = this.props.onClick;

    return (
      <div className="button-wrapper" onClick={onClick}>
        <div className="button-add" id="focus">✚</div>
      </div>
    )
  }
}
