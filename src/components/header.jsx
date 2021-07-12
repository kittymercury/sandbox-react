import React from 'react';

export default class Header extends React.Component {
  render () {
    const currentPage = this.props.currentPage;
    const onClickEditMessages = this.props.onClickEditMessages;
    const onClickSearch = this.props.onClickSearch;
    const onClickCreateChat = this.props.onClickCreateChat;
    const isEditMessages = this.props.isEditMessages;
    const isSearch = this.props.isSearch;

    return (
      <div className="header">
        {(currentPage === 'Messages')
          ? isEditMessages
            ? <button onClick={() => onClickEditMessages(false)}>Cancel</button>
            : <button onClick={() => onClickEditMessages(true)}>Edit</button>
          : ''}
        <div>{currentPage}</div>
        {(currentPage === 'Chats') && <button onClick={onClickCreateChat}>Create</button>}
        {(currentPage === 'Messages')
          ? isSearch
            ? <button onClick={() => onClickSearch(false)}>Cancel</button>
            : <button onClick={() => onClickSearch(true)}>Search</button>
          : ''}
        {(currentPage === 'Chats')
          ? isSearch
            ? <button onClick={() => onClickSearch(false)}>Cancel</button>
            : <button onClick={() => onClickSearch(true)}>Search</button>
          : ''}
      </div>
    )
  }
}
