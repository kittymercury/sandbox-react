import React from 'react';

export default class Button extends React.Component {
  render () {
    const { type, content } = this.props;
    const onClick = () => this.props.onClick(content, type);

    return <div className={`button ${type}`} onClick={onClick}>{content}</div>
  }
}
