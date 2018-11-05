class Review {
  constructor(rating, text, date) {
    this.rating = rating;
    this.text = text;
    this.date = Date(date);
  }

  ratingAsStars() {
    var result = '';
    for(var i = 1; i <= this.rating; i ++) {
      result += '⭐️';
    }
    return result;
  }

  toJSON() {
    var data = this;
    data.ratingAsStars = this.ratingAsStars();
    /*return {
      rating: this.rating,
      text: this.text,
      date: this.date,
    }*/
    return data;
  }
}
module.exports = Review;
