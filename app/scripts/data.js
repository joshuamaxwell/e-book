var exampleSeries = {
  seriesName: 'Free Series',
}

var exampleBook = {
  readingLevel: '300',
  bookName: 'Time for Bed',
  options: [{
    name: 'Bobby',
    role: 'child1',
    gender: 'male'
  },{
    name: 'Mommy',
    role: 'parental1',
    gender: 'female'
  },{
    name: 'Spartanburg',
    role: 'location'
  }]
}

var examplePage1 = {
  pageNumber: '1', //this could be 'cover'
  copyText: '<%= child1 %> brushes her teeth with <%= parental1 %> watching. In <%= location %>.',
}

var examplePage2 = {
  pageNumber: '2', //this could be 'cover'
  copyText: '<%= child1 %> reads a book with <%= parental1 %> watching. In <%= location %>.',
}

var examplePages = [examplePage1, examplePage2];

var examplePicture1 = {
  caption: 'picture of violet brushing teeth',
  url: 'https://lh4.googleusercontent.com/-YhaGQsz8c-Q/UsB0-lublhI/AAAAAAAA-0I/MU8UP4p5TFw/w1035-h693-no/DSC02140.JPG',
}

var examplePicture2 = {
  caption: 'picture of kids reading book',
  url: 'https://lh6.googleusercontent.com/-4NUZu32mCu4/UsB1gV86O1I/AAAAAAAA-3A/tOoAOkiONQM/w1035-h693-no/DSC02117.JPG',
}

var examplePicture3 = {
  caption: 'picture of kids reading book',
  url: 'https://lh3.googleusercontent.com/-eqhI1CO4yJw/UsDFpEGLLsI/AAAAAAABE3I/JnOTdzGqCq0/w640-h480-no/20131229_195747_Tyler+St.jpg',
}


var examplePictures = [examplePicture1, examplePicture2]

var examplePictureSlots = [{
    verbalCue: 'child reading book',
  },{
    verbalCue: 'maybe another picture here',
  },{
    verbalCue: 'child brushing teeth',
  },{
    verbalCue: 'child in doorway of bathroom', //potty time
  }]