console.log('We can do this!!!!');

var books = new BooksCollection(exampleBook);
console.log(books);

var firstBook = books.models[0];

firstBook.pages.add(examplePages);
firstBook.pictures.add(examplePictures);

var firstPage = firstBook.pages.first()

firstPage.pictureSlots.add(examplePictureSlots[0]);
firstPage.pictureSlots.add(examplePictureSlots[1]);

var firstPictureSlot = firstPage.pictureSlots.first();

console.log(firstPictureSlot.get('verbalCue'));

console.log(firstBook.pictures.first());

firstPictureSlot.set({
  pictureId: firstBook.pictures.first().cid
})

console.log(firstPictureSlot.get('pictureId'));