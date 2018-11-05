var Review = require('./review.js');

class Hotel {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.reviews = [];
  }

  reviewCount() {
    return this.reviews.length;
  }

  rating() {
    var result = 0;
    for(var i of this.reviews) {
      result += i.rating;
    }
    if(result != 0) {
      result /= this.reviews.length;
    }
    return result;
  }

  ratingAsStars() {
    var result = '';
    for(var i = 1; i <= Math.round(this.rating()); i ++) {
      result += '⭐️';
    }
    return result;
  }

  addReview(review) {
    this.reviews.push(review);
  }

  urlSlug() {
    var result = '';
    var words = this.name.split(' ');
    for(var i of words) {
      result += i.toLowerCase() + '_';
    }
    result += this.city.toLowerCase();
    //result.slice(0, -1);
    return result;
  }
}
module.exports = Hotel;
