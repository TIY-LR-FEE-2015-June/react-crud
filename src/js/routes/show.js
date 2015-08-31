import React from 'react';
import { Link, Navigation } from 'react-router';

let ShowRoute = React.createClass({
  mixins: [Navigation],

  componentDidMount() {
    this.props.collection.on('add remove change sync', this.forceUpdate.bind(this, null));
  },

  componentWillUnmount() {
    this.props.collection.off(null, null, this);
  },

  getModel() {
    return this.props.collection.get(this.props.params.id);
  },

  delete() {
    let model = this.getModel();

    model.destroy().then(() => {
      this.transitionTo('index');
    })
  },

  render() {
    let modelObj = this.getModel();
    let model = modelObj ? modelObj.toJSON() : {};
    let id = model._id || 1;

    return (
      <div>
        <h2>{model.title} <span>{model.author}</span></h2>

        <p>{model.body}</p>

        <div class="actions">
          <Link to="update" params={{id: id}}>
            edit
          </Link>
          <a href="#" onClick={this.delete.bind(this)}>
            Delete
          </a>
        </div>
      </div>
    );
  }
})

export default ShowRoute;
