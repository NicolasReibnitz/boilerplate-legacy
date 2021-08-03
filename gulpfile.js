/* eslint-disable no-undef */
/* eslint-disable es5/no-shorthand-properties */
/* eslint-disable es/no-destructuring */
/* eslint-disable es5/no-destructuring */
/* eslint-disable es/no-block-scoped-variables */
/* eslint-disable es5/no-block-scoping */
var gulp = require('gulp');

const { build, buildOnly, makelive, upload, setup, zipSCORM } = require('@das.laboratory/gulp-plugin-interactive');
const putOnline = gulp.series(zipSCORM, upload, makelive);

exports.buildOnly = buildOnly;
exports.build = build;
exports.putOnline = putOnline;
exports.makelive = makelive;
exports.upload = upload;
exports.setup = setup;
exports.zip = zipSCORM;
