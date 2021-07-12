import React from 'react';

export default class Chats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
    }
  }

  handleChangeInputSearch = (e) => {
    this.setState({ inputSearch: e.target.value  })
  }

  render () {
    const chats = this.props.chats;
    const users = this.props.users;
    const currentUser = this.props.currentUser;
    const isSearch = this.props.isSearch;
    const inputSearch = this.state.inputSearch;

    const currentUsersChats = chats.filter((chat) => {
      return chat.participants.includes(currentUser);
    })

    let foundChats = [];
    if (isSearch && inputSearch) {
      currentUsersChats.forEach((chat) => {
        const participant = users.find((user) => user.id === chat.participants.find((id) => id !== currentUser));
        if (participant.name.toLowerCase().includes(inputSearch.toLowerCase())) {
          foundChats.push(chat);
        }
      });
    } else {
      foundChats = currentUsersChats;
    }

    return (
      <div className="content chats">
        {isSearch && (
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={this.handleChangeInputSearch}
          />
        )}

        <ul>
          {foundChats.map((chat) => {
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
