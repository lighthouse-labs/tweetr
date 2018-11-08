$( document ).ready(function() {



function renderTweets(tweets) {
  // const $container = $('#tweet-container')
  tweets.forEach(function (tweet, index){
    let $tweet = createTweetElement(tweet);
    $('#tweet-container').append($tweet);
  })
  // return $container;
}


function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  let $header = $("<header>").addClass("tweet tweethover");
  let $span = $("<span>");
  $span.text(data.user.handle);

  let $img = $("<img>");
  $img.attr("src", data.user.avatars.regular);
  let $h1 = $("<h1>");
  $h1.text(data.user.name);

  $header.append($span);
  $header.append($img);
  $header.append($h1);
  $tweet.append($header);

  let $div = $("<div>").addClass("tweet");
  $div.text(data.content.text);
  $tweet.append($div);

  let $spanFooter = $("<span>");
  $spanFooter.text(data.created_at);
  $tweet.append($spanFooter);


  return $tweet;
}


// Test / driver code (temporary)

 // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('$tweet').append($("<header>"))
// $('article').append($("<header>").addClass("tweet"));
// $('article').append($("<div>").addClass("tweet"));
// $('article').append($("<footer>").addClass("tweet"));
// function loadTweets (cb) {
//   $.ajax('/tweets', { method: 'GET' })
//   .then(function (tweetData) {
//     console.log('TWEETSDATA: ', tweetData);
//     cb(tweetData)
//   });
// }

loadTweets(renderTweets)

function loadTweets (cb) {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (tweetData) {
    console.log('TWEETSDATA: ', tweetData);
    cb(tweetData)
  });
}



function formSubmission (){
  $('form').on('submit', function (event){
    event.preventDefault();
    let $form = $('form');
    if($form === null){
      alert('please create a tweet')
    } else {
    const $formSerialized = $('form').serialize();
    $.ajax( "/tweets", {
      method:"POST",
      data: $formSerialized
    })
    .then(console.log("success"));
    }
  })
}
formSubmission();


});