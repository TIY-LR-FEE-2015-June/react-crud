import React from 'react';
import { RouteHandler } from 'react-router';
import Sidebar from '../components/sidebar';

class App extends React.Component {
  render() {
    let {collection} = this.props;

    return (
      <div className="app-container">
        <Sidebar collection={collection}/>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

export default App;
