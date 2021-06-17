import React from 'react';

export default class Button extends React.Component {
  render () {
    const content = this.props.content;
    const type = this.props.type;
    const onClick = () => this.props.onClick(content, type);

    return (
      <div className={`button ${type}`} onClick={onClick}>{content}</div>
    )
  }
}
