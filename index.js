var Review = require('./models/review.js');
var Hotel = require('./models/hotel.js');

var repl = require('repl').start({
  useColors: true
})

repl.context.Review = Review;
repl.context.Hotel = Hotel;
