import React from 'react';

export default class InputSearch extends React.Component {
  render () {
    const value = this.props.value;
    const onChange = this.props.onChange;

    return (
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    )
  }
}
