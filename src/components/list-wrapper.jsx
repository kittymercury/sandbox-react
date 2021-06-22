import React from 'react';
import ListItem from './list-item';

export default class ListWrapper extends React.Component {
  render () {
    const items = this.props.items;
    const onDelete = this.props.onDelete;
    const content = this.props.content;

    return (
      <div className="list-wrapper">
        <ul className="list">
          {items.map((item, index) => {
            return (
              <ListItem
                content={item}
                key={index}
                onDelete={onDelete}
              />
            )
          })}

        </ul>
      </div>
    )
  }
}
