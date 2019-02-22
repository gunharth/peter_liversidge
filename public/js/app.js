(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict';
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // add jquery

__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");

$(function () {
  if (debug) {
    $('#animation-wrapper').addClass('debug');
  } else {
    setTimeout(function () {
      $('#animation-wrapper').addClass('animate').css('animation-duration', animationDuration + "s");
    }, 3000); // $(window).on('resize', function () {
    // }
  }

  var cardSection = $('#card-section');

  for (var i = 1; i <= numOfImages; i++) {
    var style = 'landscapeLarge'; // if (landscapeLarge.includes(i)) style = 'landscapeLarge';

    if (landscapeMediumLarge.includes(i)) style = 'landscapeMediumLarge';
    if (landscapeMedium.includes(i)) style = 'landscapeMedium';
    if (landscapeSmall.includes(i)) style = 'landscapeSmall';
    if (landscapeSupersmall.includes(i)) style = 'landscapeSupersmall';
    if (portraitLarge.includes(i)) style = 'portraitLarge';
    if (portraitMedium.includes(i)) style = 'portraitMedium';
    if (portraitMediumLarge.includes(i)) style = 'portraitMediumLarge';
    if (portraitSmall.includes(i)) style = 'portraitSmall';
    if (portraitSupersmall.includes(i)) style = 'portraitSupersmall';
    if (landscapeMiddle.includes(i)) style = 'landscapeMiddle';
    if (landscapeTop.includes(i)) style = 'landscapeTop';
    if (landscapeBottom.includes(i)) style = 'landscapeBottom';
    cardSection.append("<div class=\"card--content\"><img data-src=\"".concat(imageURL, "/").concat(String(i).padStart(3, '0'), ".jpg\" class=\"").concat(style, " lazyload\" alt=\"\">").concat(debug ? "<div class=\"number\">".concat(i, "</div>") : '', "</div>")); // RESPONSIVE cardSection.append(`<div class="card--content">
    //                         <img
    //                             data-sizes="auto"
    //                             data-src="${imageURL}/${String(i).padStart(3, '0')}.jpg"
    //                             data-srcset="
    //                                 ${imageURL}/${String(i).padStart(3, '0')}.jpg 480w,
    //                                 ${imageURL}/${String(i).padStart(3, '0')}.jpg 1440w"
    //                             class="${style} lazyload" alt="">
    //                             ${debug ? `<div class="number">${i}</div>` : ''}
    //                         </div>`);
  }

  $('#card-section').on('click', 'img', function (e) {
    e.preventDefault();
    if (!debug) $('#animation-wrapper').toggleClass('paused');
    var imageUrl = $(this).attr('data-src');
    $('#overlay-image div').css('background-image', 'url(' + imageUrl + ')');
    $('#overlay').fadeIn();
    $('#overlay-loader').delay(1000).fadeOut();
    $('#overlay-image div').delay(1000).fadeIn();
  });
  $('#overlay-image').on('click', function (e) {
    e.preventDefault();
    $('#overlay').fadeOut();
    $('#overlay-loader').show();
    $('#overlay-image div').hide();
    if (!debug) $('#animation-wrapper').toggleClass('paused');
  });
  setInterval(function () {
    lazySizes.loader.checkElems();
  }, 1000);
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