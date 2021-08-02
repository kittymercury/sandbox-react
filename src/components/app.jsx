import React from 'react';
import Header from './header';
import ListWrapper from './list-wrapper';
import InputWrapper from './input-wrapper';
import ButtonWrapper from './button-wrapper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const storedItems = localStorage.getItem('items').split(',');
    const items = storedItems.filter((item) => item);

    this.state = {
      isInputVisible: false,
      items: items,
      value: ''
    }
  }

  componentDidUpdate = (items) => {
    localStorage.setItem('items', this.state.items);
  }

  handleButtonAddClick = () => {
    this.setState({ isInputVisible: true });
  }

  handleButtonOkClick = () => {
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

  handleInputValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  renderInput = (condition, value) => {
    if (condition) {
      return (
        <InputWrapper
            onClick={this.handleButtonOkClick}
            onChange={this.handleInputValueChange}
            value={value}
          />
      )
    } else {
      return <ButtonWrapper onClick={this.handleButtonAddClick}/>
    }
  }

  render() {
    const { items, value, isInputVisible } = this.state;

    return (
      <div>
        <Header/>
        <ListWrapper
          items={items}
          onDelete={this.handleButtonDeleteClick}
        />
        {this.renderInput(isInputVisible, value)}
      </div>
    );
  }
};
