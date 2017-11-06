$(document).ready(function() {
  var width = $(window).width();
  var height = $(window).height();
  $('body').scrollTo('50%', 800);

  $('.centerViewport').click(function(event) {
    console.log('click');
    $('body').scrollTo('50%', 800);
  });
});

