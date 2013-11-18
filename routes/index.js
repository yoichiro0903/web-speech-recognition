
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// exports.translate = function(req, res){
//   message = req.body.message
//   console.log(message);

//   message = message.replace(/ですか/g, 'でっか');
//   message = message.replace(/んです/g, 'ねん');
//   message = message.replace(/それじゃあ/g, 'ほな');

//   var MeCab = new require('mecab-async');
//   var mecab = new MeCab();
//   mecab.parse(message, function(err, words) {
//     if (err) throw err;

//     var result = ''
//     console.log(words);
//     for (var i in words) {
//       var word = words[i][0]
//       var kind = words[i][1]

//       word = word.replace(/わたし|私/g, 'うち');
//       word = word.replace(/ぼく|僕|オレ|俺|おれ/g, 'わて');
//       word = word.replace(/あなた|きみ/g, 'あんさん');
//       word = word.replace(/君/g, 'はん');
//       word = word.replace(/本当/g, 'ほんま');
//       word = word.replace(/違う/g, 'ちゃう');
//       word = word.replace(/です/g, 'でおまんがな');
//       word = word.replace(/じゃ/g, 'や');
//       word = word.replace(/じゃあ/g, 'ほな');
//       word = word.replace(/だ/g, 'や');
//       result = result + word;
//     }

//     res.json({ result: result });
//   });

// };


