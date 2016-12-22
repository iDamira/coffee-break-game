$(document).ready(function(){
  console.log("js connected");

var $btnAbout = $('.btn-about');
var $btnScore = $('.btn-score');

// initial state of .score
$('.score').hide();

$btnScore.on('click', function() {
  $('.score').show();
  $('.about').hide();
});

$btnAbout.on('click', function() {
  $('.score').hide();
  $('.about').show();
});

});
