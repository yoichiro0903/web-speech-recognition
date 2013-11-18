$(function(){

    $('#tts_button').click(tts);

    function tts() 
    {
        var lang = 'ja';
        var tts_url = 'http://translate.google.com/translate_tts?tl=' + lang + '&q=';
        var tts_utterance = $('#utterance')[0].value;
        console.log('utterance:' + tts_utterance);
        tts_utterance = encodeURIComponent(tts_utterance);
        tts_url += tts_utterance;
        console.log('tts_url:' + tts_url);
        var inner_html = '<iframe src="' + tts_url + '" style="display:none;"></iframe>';
    //    var inner_html = '<audio src="' + tts_url + '" autoplay></audio>';
        console.log('html:' + inner_html);
        $('#audio_div')[0].innerHTML = inner_html;
    //    var audio = new Audio("");
    //    audio.autoplay = true;
    //    audio.src = tts_url;
    //    console.log('audio:' + audio);
        
        var href_url = 'URL:<a href="' + tts_url + '">' + tts_url + '</a>';
        $('#url')[0].innerHTML = href_url;  
    }
});