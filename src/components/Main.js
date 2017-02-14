require('../styles/App.scss');

import React from 'react';
import RouterForOCS from '../router/router';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyBG"></div>
        <RouterForOCS />
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
