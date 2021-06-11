import React from 'react';
import Header from './header';
import ListWrapper from './list-wrapper';
// import InputWrapper from './input-wrapper';
import ButtonWrapper from './button-wrapper';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ListWrapper/>
        {/* <InputWrapper/> */}
        <ButtonWrapper/>
      </div>
    );
  }
};
