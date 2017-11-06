$(document).ready(function() {
  var width = $(window).width();
  var height = $(window).height();
  $('body').scrollTo('50%');

  $('.centerViewport').click(function(event) {
    console.log('click');
    $('body').scrollTo('50%', 800);
  });

  $('span.like').click(function(event) {
    $(this).toggleClass('active');
  });
});

