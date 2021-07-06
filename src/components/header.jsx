import React from 'react';

export default class Header extends React.Component {
  render () {
    const theme = this.props.theme;
    const currentPage = this.props.currentPage;
    const onClick = this.props.onClick;

    return (      
        <div className="header">
          <div className="pointer" style={{ width: '100px' }}>{(currentPage === 'Chats') ? 'Edit' : ''}</div>
          <div>{currentPage}</div>
          <div className="pointer" style={{ width: '100px' }} onClick={onClick}>{(currentPage === 'Chats') ? 'Create new chat' : ''}</div>
        </div>
    )
  }
}
