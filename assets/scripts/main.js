$(document).ready(function() {
  $('body').scrollTo('50%');

  $('.centerViewport').click(function(event) {
    console.log('click');
    $('body').scrollTo('50%', 800);
  });

  $('span.like').click(function(event) {
    $(this).toggleClass('active');
  });

  $('.friendly').click(function(event) {
    console.log('this');
    $('.friendly .card').toggleClass('flip');
  });
});

