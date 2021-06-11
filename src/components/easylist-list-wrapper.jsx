import React from 'react';
import EasyListListItem from './easylist-list-item';

export default class EasyListListWrapper extends React.Component {
  render () {

    return (
      <div className="list-wrapper">
        <ul className="list">
          <EasyListListItem />
        </ul>
      </div>
    )
  }
}
