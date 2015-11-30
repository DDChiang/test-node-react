var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var nodemon = require('nodemon');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify'); 

// var production = process.env.NODE_ENV === 'production';

function javascript(watch) {
	var bundler;
	bundler = browserify('./app/main.js', {
		basedir: __dirname,
		debug: true,	//sub with !production later
		transform: [babelify.configure({presets: ["react", "es2015"]})],
		fullPaths: watch,
		standalone: 'Application'	//must include this so index.ejs can access exported var
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

// Ref: https://github.com/dlmanning/gulp-sass
gulp.task('sass', function() {
	gulp.src(['./app/sass/*.scss', './app/sass/**/*.scss'])
 		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
 		.pipe(rename({suffix: '.min'}))
 		.pipe(gulp.dest('./public/css'))
});

gulp.task('js', function() {
  return javascript(false);	 
});

// GULP WATCH FUNCTIONS 
gulp.task('watchSass', function() {
	gulp.watch(['./app/sass/*.scss', './app/sass/**/*.scss'], ['sass']);
});

gulp.task('watchJs', function() {
  javascript(true)
})

gulp.task('startServer', ['watchJs'], function() {
	nodemon({
		script: './server.js',
	    watch: './',
	    ignore: ['./app']
	})
});

gulp.task('default', ['watchJs', 'watchSass', 'startServer']);



