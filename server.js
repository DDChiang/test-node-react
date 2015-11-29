var express = require('express'),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  path = require('path');

//******************************************
//* SERVER INITIALIZATION
//* Setup all middleware
//******************************************
var app = express();
// View Engine
app.set( 'view engine', 'ejs' );

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//******************************************
//* FRONTEND APPLICATION
//******************************************
//allow serving public files
app.use('/', express.static(path.join(__dirname, 'public')));

var ejs = require('ejs');


require('node-jsx').install(); // For loading the main JSX file
var Application = require('./app/main.js');

// All other routes are sent to the React application
app.get('*', function(req, res) {
  var layout = ejs.compile(fs.readFileSync(path.resolve('views/index.ejs'), 'utf8'));

  Application.start({path: req.url}, function(err, root) {
    if ( err ) {
      res.sendStatus(500);
    } else {
      res.status(200).send(layout({
        script: 'scripts/bundle.js',
        stylesheet: 'css/main.min.css',
        applicationStart: 'Application.start();',
        root: root
      }));
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
