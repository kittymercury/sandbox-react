import React from 'react';
import ListItem from './list-item';

export default class ListWrapper extends React.Component {
  render () {

    return (
      <div className="list-wrapper">
        <ul className="list">
          <ListItem />
        </ul>
      </div>
    )
  }
}
