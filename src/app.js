// 'use strict';

window.$ = window.jQuery = require('jquery'); // add jquery
require('lazysizes');

$(function () {
    if (debug) {
        $('#animation-wrapper').addClass('debug');
    } else {
        setTimeout(() => {
            $('#animation-wrapper').addClass('animate').css('animation-duration', animationDuration+"s");
        }, 3000);
        // $(window).on('resize', function () {

        // }
    }

    let cardSection = $('#card-section');

    for (let i = 1; i <= numOfImages; i++) {
        let style = 'landscapeLarge';

        // if (landscapeLarge.includes(i)) style = 'landscapeLarge';
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

        cardSection.append(`<div class="card--content"><img data-src="${imageURL}/${String(i).padStart(3, '0')}.jpg" class="${style} lazyload" alt="">${debug ? `<div class="number">${i}</div>` : ''}</div>`);

        // RESPONSIVE cardSection.append(`<div class="card--content">
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
        let imageUrl = $(this).attr('data-src');
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
        if (!debug)  $('#animation-wrapper').toggleClass('paused');
    });

    setInterval(function () { lazySizes.loader.checkElems() }, 1000);


})
