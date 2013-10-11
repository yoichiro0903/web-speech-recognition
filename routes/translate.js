
exports.translate = function(req, res){
  var MeCab = new require('mecab-async');
  var mecab = new MeCab();
  
  mecab.wakachi(req.body, function(err, result) {
    if (err) throw err;
    alert(result);
  });
};
