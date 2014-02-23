console.log('We can do this!!!!');

var books = new BooksCollection(exampleBook);

var sampleBook = books.models[0];

sampleBook.pages.add(examplePages);
sampleBook.pictures.add(examplePictures);

sampleBook.pages.each(function(page){
  var results = _.filter(examplePictureSlots, function(slot){ 
      return slot.pageNumber == page.get('pageNumber')});
  console.log(page.get('pageNumber'));
  _.each(results, function(pictureSlot){
  this.pictureSlots.add(pictureSlot);
  })
})

console.log(sampleBook);

// var firstPage = sampleBook.pages.first()

// firstPage.pictureSlots.add(examplePictureSlots[0]);
// firstPage.pictureSlots.add(examplePictureSlots[1]);

// var firstPictureSlot = firstPage.pictureSlots.first();

// console.log(firstPictureSlot.get('verbalCue'));

// console.log(sampleBook.pictures.first());

// firstPictureSlot.set({
//   pictureId: sampleBook.pictures.first().cid
// })

// console.log(firstPictureSlot.get('pictureId'));