import React from 'react';

export default class PrivacyAndSecurity extends React.Component {
  render () {
    return (
      <div className="content privacy-and-security">
        <div>Don't show my status:
          <input type="checkbox" name="enabled"/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
