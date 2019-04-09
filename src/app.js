// 'use strict';

window.$ = window.jQuery = require('jquery'); // add jquery
require('lazysizes');

function moveToCard(num) {
    let pos = $('#card-'+num).offset();
    let off = pos.left;
    $('#card-section').scrollLeft(off);
}

$(function () {

    if (debug) {
        $('#animation-wrapper').addClass('debug');
        $('#intro-overlay').hide();
    } else {
        $('#intro-overlay-loader').fadeOut();

        // setTimeout(() => {
        //     $('#animation-wrapper').addClass('animate').css('animation-duration', animationDuration+"s");
        // }, 3000);
    }

    let cardSection = $('#card-section');

    for (let i = 1; i <= numOfImages; i++) {
        let zIndex = '';
        let style = 'landscapeLarge';
        let outerLeftMargin = '';
        let outerRightMargin = '';

        // if (landscapeMediumLarge.includes(i)) style = 'landscapeMediumLarge';
        // if (landscapeMedium.includes(i)) style = 'landscapeMedium';
        // if (landscapeSmall.includes(i)) style = 'landscapeSmall';
        // if (landscapeSupersmall.includes(i)) style = 'landscapeSupersmall';

        // if (portraitLarge.includes(i)) style = 'portraitLarge';
        // if (portraitMedium.includes(i)) style = 'portraitMedium';
        // if (portraitMediumLarge.includes(i)) style = 'portraitMediumLarge';
        // if (portraitSmall.includes(i)) style = 'portraitSmall';
        // if (portraitSupersmall.includes(i)) style = 'portraitSupersmall';

        // if (overlapTop.includes(i)) style = 'overlapTop';
        // if (overlapTopSmall.includes(i)) style = 'overlapTopSmall';
        // if (overlapMiddle.includes(i)) style = 'overlapMiddle';
        // if (overlapMiddleSmall.includes(i)) style = 'overlapMiddleSmall';
        // if (overlapBottom.includes(i)) style = 'overlapBottom';
        // if (overlapBottomSmall.includes(i)) style = 'overlapBottomSmall';

        // if (overlapPortraitTop.includes(i)) style = 'overlapPortraitTop';


        // if (overlap25.includes(i)) style += ' overlap25';
        // if (overlap75.includes(i)) style += ' overlap75';

        // for(let j = 0; j <= 20; j++) {
        //     let space = `left${j * 10}px`;
        //     if (eval(space).includes(i)) style += ' ' + space;
        // }
        // if (left5px.includes(i)) style += ' left5px';
        // if (left700px.includes(i)) style += ' left700px';
        // if (right1000px.includes(i)) style += ' right1000px';

        // if (zIndex2.includes(i)) zIndex += 'zIndex2';

        // for (let j = 0; j <= 20; j++) {
        //     let space = `leftMargin${j * 10}px`;
        //     if (eval(space).includes(i)) outerLeftMargin += ' ' + space;
        // }
        // for (let j = 0; j <= 20; j++) {
        //     let space = `rightMargin${j * 10}px`;
        //     if (eval(space).includes(i)) outerRightMargin += ' ' + space;
        // }

        cardSection.append(`<div class="card--content ${style} ${zIndex} ${outerLeftMargin} ${outerRightMargin}"${debug ? ` id="card-${i}"` : ''}><img data-src="${imageURL}/${String(i).padStart(3, '0')}.jpg" src="images/transparent.png" class="lazyload" alt="">${debug ? `<div class="number">${i}</div>` : ''}</div> `);

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

    $('#intro-overlay-image').on('click', function (e) {
        e.preventDefault();
        $('#intro-overlay-content').css('background-image', 'none').addClass('textview');
        $('#intro-overlay-text').fadeIn();
    });
    $('#backToHome').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#intro-overlay-content').removeAttr('style').removeClass('textview');
        $('#intro-overlay-text').hide();
    });
    $('#intro-overlay-content').on('click', '#startSlideshow', function (e) {
        if($(e.target).parents().hasClass('textview')) {
            e.preventDefault();
            e.stopPropagation();
            $('#intro-overlay').fadeOut(1000, function() {
                setTimeout(() => {
                    $('#animation-wrapper').addClass('animate').css('animation-duration', animationDuration+"s");
                }, 2000);
            });
        }
    });

    setInterval(function () { lazySizes.loader.checkElems() }, 300);
    if (debug) {
        if (window.location.hash) {
            var hash = window.location.toString().split('#')[1];
            console.log(hash);
            moveToCard(hash);
        }
        // $(window).bind('hashchange', function () { //detect hash change
        //     var hash = window.location.hash.substring(1);
        //     moveToCard(hash);
        // });
    }

});
