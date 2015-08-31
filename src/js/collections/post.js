import Backbone from 'backbone';
import Post from '../models/post';

export default Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lr.herokuapp.com/collections/rt-blog'
});
