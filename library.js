class Media{
  constructor(title){
    this._title = title; 
    this._isCheckedOut = false; 
    this._ratings = []; 
  }
  get title(){
    return this._title; 
  }
  
  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(value){
    this._isCheckedOut = value; 
  }

  getAverageRating(){
    let ratingsSum = this.ratings.reduce((acc, rating) => acc + rating);
    return ratingsSum /this.ratings.length; 
  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut; 
  }
  addRating(value) {
    this.ratings.push(value);

  }
}
class Book extends Media{
  constructor(title, author, pages){
    super(title); 
    this._author = author; 
    this._pages = pages; 
  }
  get author(){
    return this._author; 
  }
  get pages(){
    return this._pages; 
  }
}

class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director; 
    this._runTime= runTime; 
  }

  get director(){
    return this._director; 
  }

  get runTime(){
    return this._runTime; 
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist(){
    return this._artist; 
  }

  get songs(){
    return this._songs; 
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544); 
historyOfEverything.toggleCheckOutStatus(); 
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5); 
historyOfEverything.addRating(5); 
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.title); 
console.log(historyOfEverything.author);
