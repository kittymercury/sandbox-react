import React from 'react';

export default class Header extends React.Component {
  renderButtonsLeft() {
    const currentPage = this.props.currentPage;
    const isEditMessages = this.props.isEditMessages;
    const onClickCreateChat = this.props.onClickCreateChat;

    return (
      <div>
        {(currentPage === 'Messages')
          ? isEditMessages
            ? <button onClick={() => onClickEditMessages(false)}>Cancel</button>
            : <button onClick={() => onClickEditMessages(true)}>Edit</button>
          : ''}
        {(currentPage === 'Chats') && (
          <button onClick={onClickCreateChat}>Create</button>
        )}
      </div>
    );
  }

  renderButtonsRight() {
    const currentPage = this.props.currentPage;
    const onClickSearch = this.props.onClickSearch;
    const isSearch = this.props.isSearch;

    return (
      <div>
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
    );
  }

  renderTitle() {
    return (
      <div>{this.props.currentPage}</div>
    );
  }

  render () {
    return (
      <div className="header">
        {this.renderButtonsLeft()}
        {this.renderTitle()}
        {this.renderButtonsRight()}
      </div>
    )
  }
}
