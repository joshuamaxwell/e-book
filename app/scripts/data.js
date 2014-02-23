var exampleSeries = {
  seriesName: 'Free Series',
}

var exampleBook = {
  readingLevel: '300',
  bookName: 'Time for Bed',
  characters: {
    child: {
      name: 'Bobby',
      gender: 'male'
   },
    parent: {      
      name: 'Mommy',
      gender: 'female'
    }
  }      
}






var examplePages = [{
  pageNumber: 'cover', //this could be 'cover'
  dynamic: true,
  copyText: '',
},{
  pageNumber: 'b', //this could be 'cover'
  dynamic: true,
  copyText: '',
},{
  pageNumber: '1', //this could be 'cover'
  dynamic: true,
  copyText: 'It is late.<br>It is time for bed.<br>It is time to go to bed.',
},{
  pageNumber: '2', //this could be 'cover'
  dynamic: true,
  copyText: '<%= child %> is funny.<br>Do not play, <%= child %>. <br>It is time to go to bed.',
},{
  pageNumber: '3', //this could be 'cover'
  dynamic: true,
  copyText: 'Come <%= child %>.<br>It is time.<br>It is time to wash.',
},{
  pageNumber: '4', //this could be 'cover'
  dynamic: true,
  copyText: 'Good, <%= child %>.<br>You can help.<br>Find the top.',
},{
  pageNumber: '5', //this could be 'cover'
  dynamic: true,
  copyText: 'Good <%= child %>.<br>Jump in bed.<br>You are good..',
},{
  pageNumber: '6', //this could be 'cover'
  dynamic: true,
  copyText: 'It is time.<br>It is time to read.<br>It is good to read.',
},{
  pageNumber: '7', //this could be 'cover'
  dynamic: true,
  copyText: 'It is time.<br>It is time to go to sleep.<br>You are good.',
},{
  pageNumber: '8', //this could be 'cover'
  dynamic: true,
  copyText: 'I love you, <%= child %>.<br>I love you, <%= parent %>.',
}]





















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
    verbalCue: 'child yawning',
  },{
    verbalCue: 'child playing',
  },{
    verbalCue: 'child being silly in bathroom',
  },{
    verbalCue: 'getting ready for bathtime', 
  },{
    verbalCue: "child laying out next day's clothes", 
  },{
    verbalCue: 'child crawling into bed',     
   },{
    verbalCue: 'reading in bed',      
   },{
    verbalCue: 'goodnight kiss',      
   },{
    verbalCue: 'turning off lights',              
  }]