/* SETTINGS
if debug is set to true the
- slider is scrollable
- the animation is disabled
- images are labeled with a number
set to true to enable / false to disable
 */
var debug = false;
var imageURL = 'images'; // replace with CDN URL
var numOfImages = 22;

/*
Image Display settings
add image number in a comma separated list to the theme arrays e.g.
var theme = [2, 6, 12];
image 2, 6 and 12 will be using the style 'theme'
There's a default theme/display for landscape and portrait images
*/

// landscape
var landscapeMedium = [];
var landscapeSmall = [3, 8];
var landscapeSupersmall = [4, 5];

// portrait
var portraitMedium = [];
var portraitSmall = [];
var portraitSupersmall = [1];

// Overlaps
var landscapeBottom = [7];
var landscapeTop = [9];
