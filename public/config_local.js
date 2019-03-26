// Global settings
let debug = true; // true/false = disable animation, show image numbers and make slideshow scrollable
let imageURL = 'https://dc25412352441a0cf1a4-e9ea8609657e3b110c144de2fe090057.ssl.cf3.rackcdn.com'; // replace with CDN URL
let numOfImages = 585;
let animationDuration = 2000; // total seconds for entire slideshow

/*
Image Display
add image number in a comma separated list to the theme arrays e.g.
let theme = [2, 6, 12]; image 2, 6 and 12 will be using the style 'th^eme'
*/
// landscapeLarge = default display for all images 1050x700
let landscapeMediumLarge = [2, 4, 5, 6, 18, 26, 32, 44, 66, 67, 91, 92]; // 930x620
let landscapeMedium = [14, 19, 20, 28, 29, 30, 33, 46, 48, 55, 57, 96, 97, 117, 121, 122, 187]; // 690x460
let landscapeSmall = [3, 17, 27, 34, 53, 61, 68, 115, 124, 152, 153, 200]; // 540x360
let landscapeSupersmall = [50, 62, 89, 101, 120, 126, 176, 177, 178, 179, 180, 185, 186, 189, 190, 194, 199]; // 450x300

// portrait
let portraitLarge = [1, 10, 23, 35, 40, 79, 87, 98, 102, 110, 164, 210, 227]; // 467x700
let portraitMediumLarge = [39, 42, 72, 131, 217]; // 414x620
let portraitMedium = [15, 24, 25, 36, 38, 80, 118, 130, 197, 198]; // 360x540
let portraitSmall = [12, 37, 59, 109, 136]; // 320x480
let portraitSupersmall = [41, 129, 134, 144, 150]; // 420x360

// left outer image spacers setting the left margins of images. (actually shifting the entire outer div and all following images)
// can be used to move a regular image on top of a previous image or shift overlaps to the left
// default is 0, range from 10px to the left to 200px to the left
// current examples: Image 35 (portrait) to overlap 34 (into railings) and Image 55 to overlap 54 (sizes remain same)
let leftMargin0px = []; // is default but in here for programming logic
let leftMargin10px = [];
let leftMargin20px = [];
let leftMargin30px = [];
let leftMargin40px = [];
let leftMargin50px = [];
let leftMargin60px = [];
let leftMargin70px = [];
let leftMargin80px = [35];
let leftMargin90px = [];
let leftMargin100px = [];
let leftMargin110px = [];
let leftMargin120px = [];
let leftMargin130px = [];
let leftMargin140px = [];
let leftMargin150px = [55];
let leftMargin160px = [];
let leftMargin170px = [];
let leftMargin180px = [];
let leftMargin190px = [];
let leftMargin200px = [];
// same as above but used for the right margin of outer images
// playing around with both leftMargin and rightMargin options you can go as far as overlaping a third image with a first image if
// the second image is set to overlapp and has a massive left/right margin
let rightMargin0px = []; // is default but in here for programming logic
let rightMargin10px = [];
let rightMargin20px = [];
let rightMargin30px = [];
let rightMargin40px = [];
let rightMargin50px = [];
let rightMargin60px = [];
let rightMargin70px = [];
let rightMargin80px = [];
let rightMargin90px = [];
let rightMargin100px = [];
let rightMargin110px = [];
let rightMargin120px = [];
let rightMargin130px = [];
let rightMargin140px = [];
let rightMargin150px = [];
let rightMargin160px = [];
let rightMargin170px = [];
let rightMargin180px = [];
let rightMargin190px = [];
let rightMargin200px = [];


// left image spacers setting the left padding - default is 40px
let left0px = [6, 24, 25, 28, 46, 52, 55, 58, 59, 60, 67, 71, 77, 81, 91, 92, 96, 97, 98, 99, 100, 121, 122, 125, 128, 130, 132, 135, 143, 145, 153, 171, 173, 175, 183, 186, 190, 192, 193, 197, 200, 201, 205];
let left5px = [];
let left10px = [16, 29, 35, 39, 40, 49, 65, 84, 85, 93, 110, 111, 112, 113, 123, 131, 148, 149, 152, 154, 157, 159, 160, 161, 162, 163, 164, 165, 184, 211, 212, 213, 215];
let left20px = [48, 88, 123, 127, 176, 177, 178, 179, 180];
let left30px = [62];
let left40px = []; // is default but in here for programming logic
let left50px = [];
let left60px = [];
let left70px = [66];
let left80px = [123];
let left90px = [4];
let left100px = [18];
let left110px = [];
let left120px = [117];
let left130px = [];
let left140px = [125];
let left150px = [];
let left160px = [127];
let left170px = [130];
let left180px = [68];
let left190px = [];
let left200px = [];
// let left250px = [];
// let left300px = [];
// let left350px = [];
// let left400px = [36];
let left700px = [1];

// Overlaps
let overlapTop = [7, 33, 43, 103, 114, 140, 146, 168, 198, 224];
let overlapTopSmall = [12, 74, 79, 120, 129, 134, 206, 207, 208, 214];
let overlapMiddle = [18, 20, 22, 26, 30, 47, 50, 53, 62, 69, 76, 82, 94, 118, 142, 144, 155, 166, 174, 182, 202, 204];
let overlapMiddleSmall = [14, 59, 64, 90, 106, 124];
let overlapBottom = [3, 56, 86, 105, 126, 137, 138, 158, 169, 188, 195, 209, 216, 219, 221];
let overlapBottomSmall = [108, 112, 116, 172, 223, 226];

// Image 59 (portrait) to overlap images either side at full height
let overlapPortraitTop = [59];

// Overlaps positioning - default is 50%
let overlap25 = [14, 22, 35, 43, 47, 82, 126, 142, 145, 166];
let overlap75 = [12, 62, 76, 118, 195];

// added for Image 26 to be overlapped by 25 - sizes of both to remain as they are
let zIndex2 = [25];
