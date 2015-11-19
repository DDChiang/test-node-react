var express = require('express'),
  fs = require('fs'),
  React = require('react'),
  browserify = require('browserify'),
  babelify = require('babelify'),
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

// browserify({ debug: true })
//   .transform(babelify)
//   .require("./app/main.js", { entry: true })
//   .bundle()
//   .on("error", function (err) { console.log("Error: " + err.message); })
//   .pipe(fs.createWriteStream("./public/scripts/bundle.js"));

// All other routes are sent to the React application
app.get('*', function(req, res) {
  var layout = ejs.compile(fs.readFileSync(path.resolve('views/index.ejs'), 'utf8'));

  Application.start({path: req.url}, function(err, root) {
    if ( err ) {
      res.sendStatus(500);
    } else {
      res.status(200).send(layout({
        script: 'scripts/bundle.js',
        applicationStart: 'Application.start();',
        root: root
      }));
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
