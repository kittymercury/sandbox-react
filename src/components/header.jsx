import React from 'react';

export default class Header extends React.Component {
  render () {
    const theme = this.props.theme;
    const currentPage = this.props.currentPage;
    const onClickEditMessages = this.props.onClickEditMessages;
    const onClickCreateChat = this.props.onClickCreateChat;
    const isEditMessages = this.props.isEditMessages;

    return (
      <div className="header">
        {(currentPage === 'Messages')
          ? isEditMessages
            ? <button onClick={() => onClickEditMessages(false)}>Cancel</button>
            : <button onClick={() => onClickEditMessages(true)}>Edit</button>
          : ''}
        <div>{currentPage}</div>
        {(currentPage === 'Chats') && <button onClick={onClickCreateChat}>Create</button>}
      </div>
    )
  }
}
