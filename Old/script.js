setInterval(function() {
  var left1 = parseInt($('#track1').css('left')),
    left2 = parseInt($('#track2').css('left')),
    left3 = parseInt($('#track3').css('left'));

  if($('#left1').is(":hover")) {
    $('#track1').css('left', left1 + 2);
  } else if($('#left2').is(":hover")) {
    $('#track2').css('left', left2 + 2);
  } else if($('#left3').is(":hover")) {
    $('#track3').css('left', left3 + 2);
  } else if($('#right1').is(":hover")) {
    $('#track1').css('left', left1 - 2);
  } else if($('#right2').is(":hover")) {
    $('#track2').css('left', left2 - 2);
  } else if($('#right3').is(":hover")) {
    $('#track3').css('left', left3 - 2);
  }
}, 10);