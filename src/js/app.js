import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler, Link } from 'react-router';

import App from './routes/app';
import CreateRoute from './routes/create';
import ShowRoute from './routes/show';
import UpdateRoute from './routes/update';
import PostList from './collections/post';

let routes = (
  <Route handler={App} path="/">
    <Route name="index" path="/"/>
    <Route name="create" path="/new" handler={CreateRoute}/>
    <Route name="show" path="/:id" handler={ShowRoute}/>
    <Route name="update" path="/:id/edit" handler={UpdateRoute}/>
  </Route>
);

let collection = new PostList();

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler collection={collection} {...state}/>, document.querySelector('.app'));
});

collection.fetch();
