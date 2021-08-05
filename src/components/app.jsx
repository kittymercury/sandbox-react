import React from 'react';

import ListWrapper from './list-wrapper';
import InputWrapper from './input-wrapper';
import ButtonAdd from './button-add';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
    const items = storedItems.filter((item) => item);

    this.state = {
      isInputVisible: false,
      items: items,
      value: ''
    }
  }

  componentDidUpdate = (items) => {
    if (this.state.items.length) {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    } else {
      localStorage.removeItem('items');
    }
  }

  handleChangeInput = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClickAdd = () => {
    this.setState({ isInputVisible: true });
  }

  handleClickCancel = () => {
    this.setState({ isInputVisible: false, value: '' });
  }

  handleClickSubmit = () => {
    const { items, value } = this.state;

    if (value && value.trim() && !items.includes(value)) {
      this.setState({
        isInputVisible: false,
        value: '',
        items: items.concat(value)
      })
    } else {
      this.setState({
        isInputVisible: false,
        value: ''
      })
    }
  }

  handleButtonDeleteClick = (content) => {
    const { items } = this.state;
    const filteredItems = items.filter((item) => {
      return item !== content;
    });

    this.setState({ items: filteredItems })
  }

  renderInput = (condition, value) => {
    if (condition) {
      return (
        <InputWrapper
            onSubmit={this.handleClickSubmit}
            onCancel={this.handleClickCancel}
            onChange={this.handleChangeInput}
            value={value}
          />
      )
    } else {
      return <ButtonAdd onClick={this.handleClickAdd}/>
    }
  }

  render() {
    const { items, value, isInputVisible } = this.state;

    return (
      <div className="easylist">
        <div className="header">easyList</div>
        <ListWrapper
          items={items}
          onDelete={this.handleButtonDeleteClick}
        />
        {this.renderInput(isInputVisible, value)}
      </div>
    );
  }
};
