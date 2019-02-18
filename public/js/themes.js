/* SETTINGS
if debug is set to true the
- slider is scrollable
- the animation is disabled
- images are labeled with a number
set to true to enable / false to disable
 */
let debug = false;
let imageURL = 'images'; // replace with CDN URL
let numOfImages = 22;

/*
Image Display settings
add image number in a comma separated list to the theme arrays e.g.
let theme = [2, 6, 12];
image 2, 6 and 12 will be using the style 'theme'
There's a default theme/display for landscape and portrait images
*/

// landscape
let landscapeLarge = [2];
let landscapeMedium = [];
let landscapeSmall = [3, 8];
let landscapeSupersmall = [4, 5];

// portrait
let portraitLarge = [1];
let portraitMedium = [];
let portraitSmall = [];
let portraitSupersmall = [];

// Overlaps
let landscapeBottom = [7];
let landscapeTop = [9];
