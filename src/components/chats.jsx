import React from 'react';

export default class Chats extends React.Component {
  render () {
    const chats = this.props.chats;
    const users = this.props.users;

    return (
      <div className="content chats">
        <ul>
          {chats.map((chat) => {
            const onClick = () => this.props.onClick(chat);
            const onDelete = () => this.props.onDelete(chat);
            const participant = users.find((user) => user.id === chat.participants[1]);

            return (
              <li>
                <div className="name" onClick={onClick}>{participant.name}</div>
                <div className="delete" onClick={onDelete}>X</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
