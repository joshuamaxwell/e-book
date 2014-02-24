var PageView=Backbone.View.extend({renderTemplate:_.template($("#page-spread-template").text()),className:"spread",initialize:function(){$(".book-pages").append(this.el),this.render(),console.log("the pageview collection is:  ",this.collection),this.listenTo(this.collection,"change",this.render()),this.listenTo(this.model,"change add",this.render())},render:function(){console.log("pageviews rendering......");var a=this.collection.get("characters").child.name,b=this.collection.get("characters").parent.name,c={parent:b,child:a};this.model.set({copyText:this.model.renderCopyText(c)}),this.$el.html(this.renderTemplate(this.model))}}),BookView=Backbone.View.extend({tagName:"form",className:"book-set-up",renderTemplate:_.template($("#book-set-up").text()),initialize:function(){this.render(),$(".jumbotron").prepend(this.el),this.$el.addClass("form-horizontal"),this.$el.attr({role:"form"})},render:function(){this.$el.html(this.renderTemplate(this.model))}}),Page=Backbone.Model.extend({initialize:function(){this.renderCopyText=this.get("renderCopyText")}}),PagesCollection=Backbone.Collection.extend({model:Page}),Book=Backbone.Model.extend({initialize:function(){this.pages=new PagesCollection,this.pictures=new PicturesCollection}}),BooksCollection=Backbone.Collection.extend({model:Book}),Picture=Backbone.Model.extend({}),PicturesCollection=Backbone.Collection.extend({model:Picture}),exampleSeries={seriesName:"Free Series"},exampleBook={readingLevel:"300",bookName:"Time for Bed",characters:{child:{name:"Your child",gender:"male"},parent:{name:"the parent",gender:"female"}}},examplePages=[{pageNumber:"1",imgUrl:"/e-book/images/book-photos/child-yawn.jpg",verbalCue:"child being silly in bathroom",dynamic:!0,renderCopyText:_.template('<span class="child"><%= child %></span> is funny.<br>Do not play, <span class="child"><%= child %></span>. <br>It is time to go to bed.')},{pageNumber:"3",imgUrl:"/e-book/images/book-photos/silly-bathroom.jpg",verbalCue:"getting ready for bathtime",dynamic:!0,renderCopyText:_.template('Come <span class="child"><%= child %></span>.<br>It is time.<br>It is time to wash.')},{pageNumber:"4",imgUrl:"/e-book/images/28be8245.add-a-photo-img.png",verbalCue:"child laying out next day's clothes",dynamic:!0,renderCopyText:_.template('Good, <span class="child"><%= child %></span>.<br>You can help.<br>Find the top.')},{pageNumber:"5",imgUrl:"/e-book/images/28be8245.add-a-photo-img.png",verbalCue:"child crawling into bed",dynamic:!0,renderCopyText:_.template('Good <span class="child"><%= child %></span>.<br>Jump in bed.<br>You are good.')},{pageNumber:"6",imgUrl:"/e-book/images/28be8245.add-a-photo-img.png",verbalCue:"reading in bed",dynamic:!0,renderCopyText:_.template("It is time.<br>It is time to read.<br>It is good to read.")},{pageNumber:"7",imgUrl:"/e-book/images/28be8245.add-a-photo-img.png",verbalCue:"goodnight kiss",dynamic:!0,renderCopyText:_.template("It is time.<br>It is time to go to sleep.<br>You are good.")},{pageNumber:"8",imgUrl:"/e-book/images/28be8245.add-a-photo-img.png",verbalCue:"turning off lights",dynamic:!0,renderCopyText:_.template('I love you, <span class="child"><%= child %></span>.<br>I love you, <span class="parent"><%= parent %></span>.')}],examplePictures=[{caption:"picture of Amara brushing teeth",imgUrl:"/e-book/images/brushing-teeth.JPG"},{caption:"picture of kids reading book",imgUrl:"/e-book/images/bedtime-story.JPG"},{caption:"bedtime kisses",imgUrl:"/e-book/images/bedtime-kiss.JPG"},{caption:"picture of kid yawning",imgUrl:"/e-book/images/child-yawn.JPG"},{caption:"laying out tomorrows clothes",imgUrl:"/e-book/images/laying-out-clothes.JPG"},{caption:"turning lights off",imgUrl:"/e-book/images/lights-off.JPG"},{caption:"being silly in the bathroom",imgUrl:"/e-book/images/silly-bathroom.JPG"}];console.log("We can do this!!!!");var books=new BooksCollection(exampleBook),sampleBook=books.models[0];new BookView({model:sampleBook}),sampleBook.pages.add(examplePages),sampleBook.pages.each(function(a){new PageView({model:a,collection:sampleBook})}),sampleBook.pictures.add(examplePictures),$(".parent-name-input").on("keyup",function(){console.log("keyup in parent",this);var a=this.value;$(".parent").html(a),console.log("now is",sampleBook.get("characters").parent.name)}),$(".child-name-input").on("keyup",function(){console.log("keyup in child");var a=this.value;$(".child").html(a)});