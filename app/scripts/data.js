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
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'child yawning',
  dynamic: true,
  renderCopyText: _.template( '' ),
},{
  pageNumber: 'b', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'child playing',
  dynamic: true,
  renderCopyText: _.template( '' ),
},{
  pageNumber: '1', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'child playing',
  dynamic: true,
  renderCopyText: _.template( 'It is late.<br>It is time for bed.<br>It is time to go to bed.' ),
},{
  pageNumber: '2', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'child being silly in bathroom',
  dynamic: true,
  renderCopyText: _.template( '<span class="child"><%= child %></span> is funny.<br>Do not play, <span class="child"><%= child %></span>. <br>It is time to go to bed.' ),
},{
  pageNumber: '3', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'getting ready for bathtime', 
  dynamic: true,
  renderCopyText: _.template( 'Come <span class="child"><%= child %></span>.<br>It is time.<br>It is time to wash.' ),
},{
  pageNumber: '4', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: "child laying out next day's clothes", 
  dynamic: true,
  renderCopyText: _.template( 'Good, <span class="child"><%= child %></span>.<br>You can help.<br>Find the top.' ),
},{
  pageNumber: '5', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'child crawling into bed',     
  dynamic: true,
  renderCopyText: _.template( 'Good <span class="child"><%= child %></span>.<br>Jump in bed.<br>You are good..' ),
},{
  pageNumber: '6', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'reading in bed',      
  dynamic: true,
  renderCopyText: _.template( 'It is time.<br>It is time to read.<br>It is good to read.' ),
},{
  pageNumber: '7', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'goodnight kiss',      
  dynamic: true,
  renderCopyText: _.template( 'It is time.<br>It is time to go to sleep.<br>You are good.' ),
},{
  pageNumber: '8', //this could be 'cover'
  imgUrl: '/images/add-a-photo-img.png',
  verbalCue: 'turning off lights',              
  dynamic: true,
  renderCopyText: _.template( 'I love you, <span class="child"><%= child %></span>.<br>I love you, <span class="parent"><%= parent %></span>.' ),
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


