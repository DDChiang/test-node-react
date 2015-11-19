var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify'); 
var concat = require('gulp-concat');
var fs = require('fs');
var nodemon = require('nodemon');

// var production = process.env.NODE_ENV === 'production';

// basic: compile js
gulp.task('js', function() {
  // browserify({ debug: true })
  //   .transform(babelify)
	 //  .require("./app/main.js", { entry: true })
	 //  .bundle()
	 //  .on("error", function(err) { console.log("Error: " + err.message);})
	 //  .pipe(fs.createWriteStream("./public/scripts/bundle.js"));
  
  return javascript(false);	 
});

function javascript(watch) {
	var bundler;
	bundler = browserify('./app/main.js', {
		basedir: __dirname,
		debug: true,	//sub with !production later
		cache: {},
		transform: [babelify],
		packageCache: {},
		fullPaths: watch
	});

	if ( watch ) {
		bundler = watchify(bundler, {poll: 100});
	}

	var rebundle = function() {
		console.log('rebundling');
		var stream = bundler.bundle();
		stream.on('error', function(err) { console.log("Error: " + err.message);});
		// stream.on('error', handleError('Browserify'));
		stream = stream.pipe(source('bundle.js'));
		return stream.pipe(gulp.dest('./public/scripts/'));
	}

	bundler.on('update', rebundle);

	return rebundle();
}

gulp.task('watchJs', function() {
  javascript(true)
})

gulp.task('startServer', function() {
	nodemon({
		script: './server.js',
	    watch: './',
	    ignore: ['./app']
	})
});

gulp.task('default', ['watchJs', 'startServer']);



