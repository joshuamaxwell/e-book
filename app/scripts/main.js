console.log('We can do this!!!!');

var books = new BooksCollection(exampleBook);

var sampleBook = books.models[0];
new BookView({model: sampleBook});

sampleBook.pages.add(examplePages);

sampleBook.pages.each(function(page){
  new PageView({model: page, collection: sampleBook});
  // console.log(page);
})

sampleBook.pictures.add(examplePictures);


$('.parent-name-input').on('keyup', function(){
  console.log('keyup in parent', this);
  var parentName = this.value;
  $('.parent').html(parentName);
  console.log('now is', sampleBook.get('characters').parent.name); 
  });


$('.child-name-input').on('keyup', function(){
  console.log('keyup in child');
  var childName = this.value;
  $('.child').html(childName);
})

// console.log(sampleBook);

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