$(document).ready(function(){
  console.log("js connected");

var $btnAbout = $('.btn-about');
var $btnScore = $('.btn-score');
var $players = [];
var $currentUser = '';

// initial state of .score
$('.score').hide();
//nav-btns event handlers
$btnScore.on('click', function() {
  $('.score').show();
  $('.about').hide();
});

$btnAbout.on('click', function() {
  $('.score').hide();
  $('.about').show();
});
//end of nav-btns event handlers


// set initial state for play btn
$('.start-game-btn').hide();
//name-btn event listener 1. - save users username
$('.submit-name-btn').on('click', function(){
  $currentUser = $('.form-container').find('input').val();
  $players.push($currentUser);
  $('.start-game-btn').show();
  $(this).hide();
  $('.form-container').find('input').hide();
  //add welcoming mesage with current user's name
  var $greeting = $('<p class="greeting-p">Hello, <span>' + $currentUser +'</span> !<br> Its time to take a Coffee Break!</p>');
  $('.form-container').prepend($greeting);
});




});
