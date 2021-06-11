import React from 'react';

export default class ListItem extends React.Component {
  render () {

    return (
      <li>something tasty :)
        <span className="delete">✖</span>
      </li>
    )
  }
}
