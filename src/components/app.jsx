import React from 'react';
import EasyListHeader from './easylist-header';
import EasyListListWrapper from './easylist-list-wrapper';
import EasyListInputWrapper from './easylist-input-wrapper';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <EasyListHeader/>
        <EasyListListWrapper/>
        <EasyListInputWrapper/>
      </div>
    );
  }
};
