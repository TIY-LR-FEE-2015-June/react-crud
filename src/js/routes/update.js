import React from 'react';
import { Navigation } from 'react-router';
import PostForm from '../components/post-form';

let EditRoute = React.createClass({
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

  save(title, author, body) {
    let model = this.getModel();

    model.save({title, author, body}).then(() => {
      this.transitionTo('show', {id: model.id});
    });
  },

  render() {
    return (
      <PostForm post={this.getModel()} onSave={this.save.bind(this)}/>
    );
  }
});

export default EditRoute;
