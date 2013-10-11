
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/translate', function(req, res) {
  message = req.body.message
  console.log(message);

  var MeCab = new require('mecab-async');
  var mecab = new MeCab();
  mecab.wakachi(message, function(err, words) {
    if (err) throw err;
    console.log(words);

    var result = ''

    for (var i in words) {   
      var word = words[i]
      word = word.replace(/わたし|私|ぼく|僕/g, 'わて');
      word = word.replace(/です/g, 'でおまんがな');
      result = result + word;
    }

    res.json({ result: result }); 
  });

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
