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

$(function () {
  var adj = [
  'Fun-Seeking',
  'Family Stage',
  'Trendy',
  'Status Seeking',
  'Conservative',
  'Socially Responsible',
  'Environmentally Conscious',
  'Family Oriented',
  'Technical'
  ];

  var noun = [
  'Sports Enthusiast',
  'Influencer',
  'Homeowner',
  'self actualizer',
  'affluent achiever',
  'thriving grey',
  'settled suburban',
  'nest builder',
  'senior citizen',
  'have-not',
  'contented conformer',
  'traditionalist'
  ]


  $('#theButton').click(function() {
  });

  var getAdjective = function() {
    return adj[Math.floor(Math.random() * adj.length)];
  };
  var getNoun = function() {
    return noun[Math.floor(Math.random() * noun.length)];
  };

  setInterval(function () {
    $(".profiles__word").fadeOut(400, function () {
      $('.adj').html(getAdjective());
      $('.noun').html(getNoun());
      $(this).fadeIn(400);
    });
  }, 3000);
});

