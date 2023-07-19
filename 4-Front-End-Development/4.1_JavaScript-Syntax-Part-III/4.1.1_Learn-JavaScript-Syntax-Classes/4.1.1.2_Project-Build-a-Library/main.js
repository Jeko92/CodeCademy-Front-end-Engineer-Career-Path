class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedout = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedout;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(bool) {
    this._isCheckedout = bool;
  }

  toggleCheckedOutStatus() {
    return (this._isCheckedout = !this._isCheckedout);
  }

  getAverageRating(ratings) {
    return (
      this.ratings.reduce((sum, curRating) => sum + curRating, 0) /
      this.ratings.length
    ).toFixed(2);
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}
class Book extends Media {
  constructor(author, pages, title) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}
class CD extends Media {
  constructor(artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  544,
  "A short History of Nearly Everything"
);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
console.log(
  `Average rating of Book "History of Everything": ${historyOfEverything.getAverageRating()}/5 \n`
);

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
console.log(`Is "Speed" movie checked out? ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(
  `Average rating of Movie "Speed": ${speed.getAverageRating()}/5 \n`
);
