$(document).ready(function() {
  'use strict';

  $('#button').click(function() {
    $('#photos #photo').empty();
    if ($('#tags').val() === '') {
      return;
    }

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + $('#tags').val() + '&tagmode=any&format=json&jsoncallback=?';
    $.getJSON(url, function(json) {
      for (var item of json.items) {
        $('#photos').append('<div id="photo"><img src="' + item.media.m + ' + " />');
      }
    });

    $('#tags').val('');
  });
});
