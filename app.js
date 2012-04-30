var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs'),
    url = require('url'),
    mongo = require('mongodb');

QueryCommand = mongo.QueryCommand,
Cursor = mongo.Cursor,
Collection = mongo.Collection;

var uristring = process.env.MONGOLAB_URI;
var mongoUrl = url.parse(uristring);

app.listen(process.env.PORT);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

mongo.Db.connect (uristring, function (err, db) {
  console.log ("Attempting connection to " + mongoUrl.protocol + "//" + mongoUrl.hostname + " (complete URL supressed).");

  db.collection ("filive_live", function (err, collection) {

      if (err) {
        console.log ("Could not open filive_live collection.");
        process.exit(1);
      }

      console.log ("Success connecting to " + mongoUrl.protocol + "//" + mongoUrl.hostname + ".");

      io.sockets.on('connection', function (socket) {
          //var latest = collection.find({}).sort({ '$natural': -1 }).limit(10);
          var latest = collection.find({}).sort({ 'created_at': -1 }).limit(10);
          
          latest.toArray(function(err, ldocs) {
              var gdoc = null;
              ldocs.forEach(function(ldoc) { 
                socket.emit('data', ldoc);
                gdoc = ldoc;
              });

              var cursor = collection.find({'_id': { '$gt': gdoc._id }}, { tailable: true });
              (function next() {
                  process.nextTick(function() {
                      cursor.nextObject(function(err, doc) {
                          if (err) console.log(err);
                          if (doc) socket.emit('data', doc);
                          next();
                      });
                  });
              })();
          });

      });
  });
});

