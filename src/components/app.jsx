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
    const items = this.state.items;
    const value = this.state.value;

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
    const items = this.state.items;
    const filteredItems = items.filter((item) => {
      return item !== content;
    });

    this.setState({ items: filteredItems })
  }

  handleInputValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const isInputVisible = this.state.isInputVisible;
    const items = this.state.items;
    const value = this.state.value;

    return (
      <div>
        <Header/>
        <ListWrapper
          items={items}
          onDelete={this.handleButtonDeleteClick}
        />
        {isInputVisible
        ? <InputWrapper
            onClick={this.handleButtonOkClick}
            onChange={this.handleInputValueChange}
            value={value}
          />
        : <ButtonWrapper onClick={this.handleButtonAddClick}/>
        }
      </div>
    );
  }
};
