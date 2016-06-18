import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');

const Post = Class.create({
  name: 'Post',
  collection: Posts,
  fields: {

  }
});

export default Post;
