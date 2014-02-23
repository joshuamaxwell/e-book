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





















var examplePictures = [{
  caption: 'picture of Amara brushing teeth',
  imgUrl: '/images/brushing-teeth.JPG',
},{
  caption: 'picture of kids reading book',
  imgUrl: '/images/bedtime-story.JPG',
},{
  caption: 'bedtime kisses',
  imgUrl: '/images/bedtime-kiss.JPG',
},{
  caption: 'picture of kid yawning',
  imgUrl: '/images/child-yawn.JPG',
},{
  caption: 'laying out tomorrows clothes',
  imgUrl: '/images/laying-out-clothes.JPG',
},{
  caption: 'turning lights off',
  imgUrl: '/images/lights-off.JPG',
},{
  caption: 'being silly in the bathroom',
  imgUrl: '/images/silly-bathroom.JPG',        
}]




var examplePictureSlots = [{
    verbalCue: 'child yawning',
    pageNumber: ['cover','b']
  },{
    verbalCue: 'child playing',
    pageNumber: ['1']
  },{
    verbalCue: 'child being silly in bathroom',
    pageNumber: ['2']
  },{
    verbalCue: 'getting ready for bathtime', 
    pageNumber: ['3']
  },{
    verbalCue: "child laying out next day's clothes", 
    pageNumber: ['4']
  },{
    verbalCue: 'child crawling into bed',     
    pageNumber: ['5']
   },{
    verbalCue: 'reading in bed',      
    pageNumber: ['6']
   },{
    verbalCue: 'goodnight kiss',      
    pageNumber: ['7']
   },{
    verbalCue: 'turning off lights',              
    pageNumber: ['8']
  }]