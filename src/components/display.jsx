import React from 'react';

export default class Display extends React.Component {
  render () {
    const { calculation } = this.props;

    return (
      <div className="display-wrapper">
        <div className="display">{calculation}</div>
      </div>
    )
  }
}
