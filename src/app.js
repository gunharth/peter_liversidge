'use strict';

window.$ = window.jQuery = require('jquery'); // add jquery

$(function () {
    if (debug) {
        $('body').addClass('debug');
    } else {
        setTimeout(() => {
            $('#animation-wrapper').addClass('animate');
        }, 3000);
    }

    let cardSection = $('#card-section');

    for (let i = 1; i <= numOfImages; i++) {
        let style = '';

        if (landscapeMedium.includes(i)) style = 'landscapeMedium';
        if (landscapeSmall.includes(i)) style = 'landscapeSmall';
        if (landscapeSupersmall.includes(i)) style = 'landscapeSupersmall';

        if (portraitMedium.includes(i)) style = 'portraitMedium';
        if (portraitSmall.includes(i)) style = 'portraitSmall';
        if (portraitSupersmall.includes(i)) style = 'portraitSupersmall';

        if (landscapeBottom.includes(i)) style = 'landscapeBottom';
        if (landscapeTop.includes(i)) style = 'landscapeTop';

        cardSection.append(`<div class="card--content"><img src="${imageURL}/${String(i).padStart(3, '0')}.jpg" class="${style}" alt="">${debug ? `<div class="number">${i}</div>` : ''}</div>`);
    }
    $('img').on('click', function (e) {
        $('#animation-wrapper').toggleClass('paused');
    });
})
