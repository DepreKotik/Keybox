import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import libsquoosh from 'gulp-libsquoosh';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import { deleteAsync } from "del";

// Styles

export const styles = () => {
  return gulp.src('develop/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//Copy

const copy = (done) => {
  gulp
    .src(
      ["develop/images/**/*.{jpg,png}", "develop/images/svg/*.svg", "develop/js/*.js", "develop/fonts/*.ttf"],
      {
        base: "develop",
      }
    )
    .pipe(gulp.dest("assets"));
  done();
};

//Images

const webp = () => {
  return gulp.src('develop/images/**/*.{jpg,png}')
  .pipe(libsquoosh({webp: {} }))
  .pipe(gulp.dest('assets/images'));
}

//Svg

const sprite = () => {
  return gulp.src('source/img/svg/inline-svg/*.svg')
  .pipe(
    svgstore({
    inlineSvg: true,
  })
  )
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('assets/img'));
}

//Clean

const clean = () => {
  return deleteAsync("assets");
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: '../keybox'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('develop/sass/**/*.scss', gulp.series(styles));
  gulp.watch('./*.html').on('change', browser.reload);
}

//Start

export const start = gulp.series(
  clean,
  copy,
  styles,
  server,
  watcher
);
