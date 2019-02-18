(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // add jquery

$(function () {
  if (debug) {
    $('body').addClass('debug');
  } else {
    setTimeout(function () {
      $('#animation-wrapper').addClass('animate');
    }, 3000);
  }

  var cardSection = $('#card-section');

  for (var i = 1; i <= numOfImages; i++) {
    var style = '';
    if (landscapeMedium.includes(i)) style = 'landscapeMedium';
    if (landscapeSmall.includes(i)) style = 'landscapeSmall';
    if (landscapeSupersmall.includes(i)) style = 'landscapeSupersmall';
    if (portraitMedium.includes(i)) style = 'portraitMedium';
    if (portraitSmall.includes(i)) style = 'portraitSmall';
    if (portraitSupersmall.includes(i)) style = 'portraitSupersmall';
    if (landscapeBottom.includes(i)) style = 'landscapeBottom';
    if (landscapeTop.includes(i)) style = 'landscapeTop';
    cardSection.append("<div class=\"card--content\"><img src=\"".concat(imageURL, "/").concat(String(i).padStart(3, '0'), ".jpg\" class=\"").concat(style, "\" alt=\"\">").concat(debug ? "<div class=\"number\">".concat(i, "</div>") : '', "</div>"));
  }

  $('img').on('click', function (e) {
    $('#animation-wrapper').toggleClass('paused');
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Guni/Code/projects/peter_liversidge/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/Guni/Code/projects/peter_liversidge/src/app.scss */"./src/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);