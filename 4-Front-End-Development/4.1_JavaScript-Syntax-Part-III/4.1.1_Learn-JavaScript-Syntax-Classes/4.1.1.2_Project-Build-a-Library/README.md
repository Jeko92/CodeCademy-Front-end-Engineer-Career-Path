# Media Library

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named `Media` with three subclasses: `Book`, `Movie`, and `CD`.

## Book

- **Properties:** `author` (string), `title` (string), `pages` (number), `isCheckedOut` (boolean, initially `false`), and `ratings` (array, initially empty).
- **Getters:** all properties have a getter
- **Methods:** `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

## Movie

- **Properties:** `director` (string), `title` (string), `runTime` (number), `isCheckedOut` (boolean, initially `false`), and `ratings` (array, initially empty)
- Getters: all properties have a getter
- Methods: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

## CD

- **Properties:** `artist` (string), `title` (string), `isCheckedOut` (boolean, initially false), and `ratings` (array, initially empty), songs (array of strings)
- **Getters:** all properties have a getter
- **Methods:** `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

## To-do's for extending functionality

- Add more properties to each class (`movieCast`, `songTitles`, etc.)
- Create a `CD` class that extends `Media`.
- In `.addRating()`, make sure input is between `1` and `5`.
- Create a method called `shuffle` for the `CD` class. The method returns a randomly sorted array of all the songs in the `songs` property.
- Create class called `Catalog` that holds all of the `Media` items in our library.
