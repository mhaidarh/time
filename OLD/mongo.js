// Generated by CoffeeScript 1.6.2
/* MongoHQ Test
*/


(function() {
  var Review, Schema, db, mongoose;

  db = require('./config/db');

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  Review = new Schema({
    article: String,
    count: Number,
    date: {
      type: Date,
      "default": Date.now
    },
    images: [String],
    industry: String,
    location: {
      city: String,
      state: String,
      zip: String,
      address: String
    },
    rating: String,
    slug: String,
    snippet: String,
    tags: [String],
    title: String,
    url: String
  });

  mongoose.connect('mongodb://' + db.user + ':' + db.pass + '@' + db.host + ':' + db.port + '/' + db.name);

  mongoose.model('Review', Review);

}).call(this);