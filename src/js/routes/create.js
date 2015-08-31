import React from 'react';
import { Navigation } from 'react-router';
import PostForm from '../components/post-form';

let CreateRoute = React.createClass({
  mixins: [Navigation],

  save(title, author, body) {
    let model = this.props.collection.add({title, author, body});

    model.save().then(() => {
      this.transitionTo('show', {id: model.id});
    });
  },

  render() {
    return (
      <PostForm onSave={this.save.bind(this)}/>
    );
  }
});

export default CreateRoute;
