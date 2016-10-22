$(function () {
console.log('DOM fully loaded and parsed');

  function createTweetElement(tweetObj) {
  	var $tweet = $("<article>").addClass("tweet");
  	var $header = $("<header>");
  	var $avatar = $("<img>").addClass("avatar").attr("src", tweetObj.user.avatars.small);
  	var $username = $("<h2>").addClass("user").text(tweetObj.user.name);
  	var $handle = $("<span>").addClass("handle").text(tweetObj.user.handle);
  	var $content = $("<div>").text(tweetObj.content.text);
    var days_elapsed = Math.floor((Date.now() - tweetObj.created_at)/(1000*60*60*24));
    var $footer = $("<footer>");
  	var $createdAt = $("<span>").text(days_elapsed + " days ago");
  	
  	$header.append($avatar);
    $header.append($username);
    $header.append($handle);
    $tweet.append($header);
    $tweet.append($content);
    $tweet.append($footer);

    var testHTML = $tweet;

  	return testHTML;

  }

  function renderTweets(tweets) {

    for (var i = 0; i < data.length; i++) {
    tweetObj = data[i];
    var $tweet = createTweetElement(tweetObj);
    $('#tweets-container').prepend($tweet);
    console.log($('#tweets-container'))
    }
  }

renderTweets(data);

});

