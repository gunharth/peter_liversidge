// Global settings
let debug = false; // true/false = disable animation, show image numbers and make slideshow scrollable
let imageURL = 'https://dc25412352441a0cf1a4-e9ea8609657e3b110c144de2fe090057.ssl.cf3.rackcdn.com'; // replace with CDN URL
let numOfImages = 585;
let animationDuration = 4800; // total seconds for entire slideshow

/*
Image Display
add image number in a comma separated list to the theme arrays e.g.
let theme = [2, 6, 12]; image 2, 6 and 12 will be using the style 'theme'
*/

// landscapeLarge = default display for all images 1050x700
let landscapeMediumLarge = []; // 930x620
let landscapeMedium = []; // 690x460
let landscapeSmall = []; // 540x360
let landscapeSupersmall = []; // 450x300

// portrait
let portraitLarge = [1,10,12,14,15,17,35,36,39,40,41,42]; // 467x700
let portraitMediumLarge = []; // 414x620
let portraitMedium = []; // 360x540
let portraitSmall = []; // 320x480
let portraitSupersmall = []; // 420x360

// Overlaps
let landscapeMiddle = [];
let landscapeTop = [];
let landscapeBottom = [];
