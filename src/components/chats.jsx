import React from 'react';

export default class Chats extends React.Component {
  render () {
    const chats = this.props.chats;
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const currentUsersChats = chats.filter((chat) => {
      return chat.participants.includes(currentUser);
    })

    return (
      <div className="content chats">
        <ul>
          {currentUsersChats.map((chat) => {
            const onClick = () => this.props.onClick(chat);
            const onDelete = () => this.props.onDelete(chat);
            const participant = users.find((user) => user.id === chat.participants.find((id) => id !== currentUser));

            return (
              <li key={chat.id}>
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
