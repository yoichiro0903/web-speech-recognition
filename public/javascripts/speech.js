var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
  console.log(event);
}

$.translate = function() {
  var message = $('#message').val();

  var ajax = $.ajax({
    url: '/translate',
    type: 'POST',
    dataType: 'json',
    data: {
      message: message
    }
  });
  
  ajax.always( function(data) {
    console.log(data);
    var result = data.result;
    $('#translate #result').html(result);
  });

}

