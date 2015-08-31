import React from 'react';
import { RouteHandler, Link } from 'react-router';

class App extends React.Component {
  componentDidMount() {
    this.props.collection.on('add remove change', this.forceUpdate.bind(this, null));
  }

  componentWillUnmount() {
    this.props.collection.off(null, null, this);
  }

  render() {
    let items = this.props.collection.map((post) => {
      if (!post.isNew()) {
        let id = post.id;
        let title = post.get('title');

        return (
          <li>
            <Link to="show" params={{id: id}}>{title}</Link>
          </li>
        );
      }
    });

    return (
      <ul>
        <li>
          <Link to="create">New +</Link>
          {items}
        </li>
      </ul>
    );
  }
}

export default App;
