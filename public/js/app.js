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

function moveToCard(num) {
  var pos = $('#card-' + num).offset();
  var off = pos.left;
  $('#card-section').scrollLeft(off);
}

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
    var zIndex = '';
    var style = 'landscapeLarge';
    var outerLeftMargin = '';
    var outerRightMargin = ''; // if (landscapeLarge.includes(i)) style = 'landscapeLarge';

    if (landscapeMediumLarge.includes(i)) style = 'landscapeMediumLarge';
    if (landscapeMedium.includes(i)) style = 'landscapeMedium';
    if (landscapeSmall.includes(i)) style = 'landscapeSmall';
    if (landscapeSupersmall.includes(i)) style = 'landscapeSupersmall';
    if (portraitLarge.includes(i)) style = 'portraitLarge';
    if (portraitMedium.includes(i)) style = 'portraitMedium';
    if (portraitMediumLarge.includes(i)) style = 'portraitMediumLarge';
    if (portraitSmall.includes(i)) style = 'portraitSmall';
    if (portraitSupersmall.includes(i)) style = 'portraitSupersmall';
    if (overlapTop.includes(i)) style = 'overlapTop';
    if (overlapTopSmall.includes(i)) style = 'overlapTopSmall';
    if (overlapMiddle.includes(i)) style = 'overlapMiddle';
    if (overlapMiddleSmall.includes(i)) style = 'overlapMiddleSmall';
    if (overlapBottom.includes(i)) style = 'overlapBottom';
    if (overlapBottomSmall.includes(i)) style = 'overlapBottomSmall'; // if (overlapLandscapeMedium.includes(i)) style = 'overlapLandscapeMedium';

    if (overlapPortraitTop.includes(i)) style = 'overlapPortraitTop';
    if (overlap25.includes(i)) style += ' overlap25';
    if (overlap75.includes(i)) style += ' overlap75';

    for (var j = 0; j <= 20; j++) {
      var space = "left".concat(j * 10, "px");
      if (eval(space).includes(i)) style += ' ' + space;
    } // for (let j = 250; j <= 400; j=j+50) {
    //     let space = `left${j}px`;
    //     console.log('yes');
    //     if (eval(space).includes(i)) style += ' ' + space;
    // }


    if (left5px.includes(i)) style += ' left5px';
    if (left700px.includes(i)) style += ' left700px';
    if (zIndex2.includes(i)) zIndex += 'zIndex2';

    for (var _j = 0; _j <= 20; _j++) {
      var _space = "leftMargin".concat(_j * 10, "px");

      if (eval(_space).includes(i)) outerLeftMargin += ' ' + _space;
    }

    for (var _j2 = 0; _j2 <= 20; _j2++) {
      var _space2 = "rightMargin".concat(_j2 * 10, "px");

      if (eval(_space2).includes(i)) outerRightMargin += ' ' + _space2;
    }

    cardSection.append("<div class=\"card--content ".concat(zIndex, " ").concat(outerLeftMargin, " ").concat(outerRightMargin, "\" id=\"card-").concat(i, "\"><img data-src=\"").concat(imageURL, "/").concat(String(i).padStart(3, '0'), ".jpg\" class=\"").concat(style, " lazyload\" alt=\"\">").concat(debug ? "<div class=\"number\">".concat(i, "</div>") : '', "</div>")); // RESPONSIVE cardSection.append(`<div class="card--content">
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

  if (debug) {
    if (window.location.hash) {
      var hash = window.location.toString().split('#')[1];
      console.log(hash);
      moveToCard(hash);
    } // $(window).bind('hashchange', function () { //detect hash change
    //     var hash = window.location.hash.substring(1);
    //     moveToCard(hash);
    // });

  }
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