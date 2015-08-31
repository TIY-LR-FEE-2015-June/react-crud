import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  rootUrl: 'http://tiny-lr.herokuapp.com/collections/rt-blog'
});
