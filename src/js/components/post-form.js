import React from 'react';
import { RouteHandler, Link } from 'react-router';

class App extends React.Component {
  save(e) {
    e.preventDefault();
    let title = React.findDOMNode(this.refs.title).value.trim();
    let author = React.findDOMNode(this.refs.author).value.trim();
    let body = React.findDOMNode(this.refs.body).value.trim();

    this.props.onSave(title, author, body);
  }

  render() {
    let model = this.props.post;
    let {title, author, body} = model ? model.toJSON() : {};

    return (
      <form onSubmit={this.save.bind(this)}>
        <input type="text" value={title} ref="title"/>
        <input type="text" value={author} ref="author"/>
        <textarea ref="body">{body}</textarea>

        <input type='submit' value='Save'/>
      </form>
    );
  }
}

export default App;
