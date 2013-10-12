
exports.translate = function(req, res){
  message = req.body.message
  console.log(message);

  message = message.replace(/ですか/g, 'でっか');

  var MeCab = new require('mecab-async');
  var mecab = new MeCab();
  mecab.wakachi(message, function(err, words) {
    if (err) throw err;
    console.log(words);

    var result = ''

    for (var i in words) {
      var word = words[i]
      word = word.replace(/わたし|私|ぼく|僕/g, 'わて');
      word = word.replace(/本当/g, 'ほんま');
      word = word.replace(/違う/g, 'ちゃう');
      word = word.replace(/です/g, 'でおまんがな');
      word = word.replace(/じゃん/g, 'やん');
      result = result + word;
    }

    res.json({ result: result });
  });

};
