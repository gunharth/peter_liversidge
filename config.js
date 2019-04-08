// Global settings
let debug = false; // true/false = disable animation, show image numbers and make slideshow scrollable
let imageURL = 'https://c2e4cb1771a0077a98fc-4a7113686177a72add40cfb4616f719c.ssl.cf3.rackcdn.com'; // replace with CDN URL
let numOfImages = 585;
let animationDuration = 2000; // total seconds for entire slideshow

/*
Image Display
add image number in a comma separated list to the theme arrays e.g.
let theme = [2, 6, 12]; image 2, 6 and 12 will be using the style 'th^eme'
*/
// landscapeLarge = default display for all images 1050x700
let landscapeMediumLarge = [2, 4, 5, 6, 18, 26, 32, 44, 66, 67, 91, 92, 231, 250, 252, 290, 291, 292, 294, 387, 398, 399, 446, 447, 456, 459, 460, 474, 477, 483, 505, 514, 549, 552, 557, 564, 574]; // 930x620
let landscapeMedium = [14, 19, 20, 28, 29, 30, 33, 46, 48, 55, 57, 96, 97, 117, 121, 122, 187, 239, 249, 323, 334, 335, 337, 349, 351, 359, 412, 413, 420, 463, 464, 465, 466, 470, 476, 487, 488, 497, 498, 502, 507, 541, 553, 568, 575, 577, 581, 583]; // 690x460
let landscapeSmall = [3, 17, 27, 34, 53, 61, 68, 115, 124, 152, 153, 200, 271, 274, 282, 287, 297, 315, 319, 320, 321, 326, 328, 339, 341, 347, 348, 365, 369, 376, 381, 400, 405, 414, 416, 418, 423, 424, 430, 432, 442, 443, 444, 454, 469, 526, 527, 528, 461, 473, 478, 516, 521, 530, 532, 533, 537, 542, 550, 554, 558, 565, 576, 584]; // 540x360
let landscapeSupersmall = [50, 62, 89, 101, 120, 126, 176, 177, 178, 179, 180, 185, 186, 189, 190, 194, 199, 234, 241, 247, 248, 253, 258, 262, 269, 277, 278, 300, 310, 311, 312, 317, 342, 345, 354, 357, 368, 371, 380, 391, 329, 409, 411, 419, 420, 422, 429, 435, 437, 438, 453, 457, 458, 542, 543, 475, 489, 499, 508, 515, 531, 544, 560, 562, 569, 570, 582]; // 450x300

// portrait
let portraitLarge = [1, 10, 13, 23, 35, 40, 79, 87, 98, 102, 110, 132, 143, 148, 164, 210, 227, 251, 256, 270, 289, 295, 296, 338, 344, 346, 355, 356, 358, 361, 362, 363, 476, 531]; // 467x700
let portraitMediumLarge = [11, 39, 42, 72, 131, 145, 146, 217, 241, 242, 259, 340, 350, 479, 551]; // 414x620
let portraitMedium = [15, 24, 25, 36, 38, 80, 118, 130, 197, 198, 229, 378, 401, 493, 580]; // 360x540
let portraitSmall = [12, 37, 109, 136, 255, 293, 308, 333, 374, 379, 416, 480, 492]; // 320x480
let portraitSupersmall = [41, 129, 134, 144, 150, 245, 257, 279, 280, 394, 397, 436, 506]; // 420x360


// left outer image spacers setting the left margins of images. (actually shifting the entire outer div and all following images)
// can be used to move a regular image on top of a previous image or shift overlaps to the left
// default is 0, range from 10px to the left to 200px to the left
// current examples: Image 35 (portrait) to overlap 34 (into railings) and Image 55 to overlap 54 (sizes remain same)
let leftMargin0px = []; // is default but in here for programming logic
let leftMargin10px = [];
let leftMargin20px = [349];
let leftMargin30px = [];
let leftMargin40px = [];
let leftMargin50px = [];
let leftMargin60px = [];
let leftMargin70px = [];
let leftMargin80px = [35];
let leftMargin90px = [];
let leftMargin100px = [323];
let leftMargin110px = [];
let leftMargin120px = [271];
let leftMargin130px = [578];
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
let rightMargin30px = [463, 464, 465, 578];
let rightMargin40px = [];
let rightMargin50px = [];
let rightMargin60px = [515];
let rightMargin70px = [];
let rightMargin80px = [];
let rightMargin90px = [];
let rightMargin100px = [571];
let rightMargin110px = [];
let rightMargin120px = [];
let rightMargin130px = [504];
let rightMargin140px = [];
let rightMargin150px = [];
let rightMargin160px = [];
let rightMargin170px = [];
let rightMargin180px = [];
let rightMargin190px = [585];
let rightMargin200px = [];


// left image spacers - default is 40px
let left0px = [6, 24, 25, 28, 46, 52, 55, 58, 59, 60, 67, 71, 77, 81, 91, 92, 96, 97, 98, 99, 100, 121, 122, 125, 128, 130, 132, 135, 143, 145, 153, 171, 173, 175, 183, 186, 190, 192, 193, 197, 200, 201, 205, 233, 242, 250, 255, 261, 262, 264, 265, 266, 267, 268, 275, 276, 277, 278, 286, 287, 289, 291, 292, 296, 298, 299, 300, 306, 307, 312, 316, 321, 324, 334, 335, 340, 341, 342, 346, 347, 348, 351, 369, 370, 395, 399, 412, 413, 419, 420, 422, 425, 426, 427, 428, 431, 432, 435, 436, 437, 438, 440, 443, 444, 447, 459, 472, 488, 497, 498, 499, 523, 524];
let left5px = [29, 23, 236, 235, 237, 244, 253, 272, 273, 281, 306, 313, 314, 325, 330, 331, 332, 336, 338, 339, 345, 350, 352, 352, 360, 361, 362, 363, 364, 372, 373, 377, 380, 383, 384, 385, 386, 390, 391, 392, 393, 403, 404, 406, 407, 408, 410, 423, 424, 425, 433, 434, 450, 457, 458, 460, 467, 468, 484, 485, 500, 526, 527, 528, 535, 536, 542, 543, 549, 556, 572, 573, 584];
let left10px = [16, 39, 40, 49, 65, 84, 85, 93, 110, 111, 112, 113, 123, 131, 148, 149, 152, 154, 157, 159, 160, 161, 162, 163, 164, 165, 184, 211, 212, 213, 215, 238, 239, 490, 509, 510, 511, 518, 519, 554, 570];
let left20px = [48, 88, 123, 127, 176, 177, 178, 179, 180, 240, 241];
let left30px = [62];
let left40px = []; // is default but in here for programming logic
let left50px = [];
let left60px = [474];
let left70px = [66];
let left80px = [123];
let left90px = [4];
let left100px = [18];
let left110px = [585];
let left120px = [117];
let left130px = [];
let left140px = [125];
let left150px = [];
let left160px = [127];
let left170px = [130];
let left180px = [68];
let left190px = [];
let left200px = [];
let left700px = [1]; // added for image 1

// Overlaps
let overlapTop = [7, 33, 43, 103, 114, 140, 168, 198, 224, 231, 247, 258, 282, 308, 409, 454, 477, 519, 530, 570];
let overlapTopSmall = [12, 74, 79, 120, 129, 134, 206, 207, 208, 214, 279, 317, 365, 368, 400, 466, 480, 495, 537, 550, 559, 579];
let overlapMiddle = [18, 20, 22, 26, 30, 47, 50, 53, 62, 69, 76, 82, 94, 118, 155, 166, 174, 182, 202, 204, 229, 274, 303, 366, 387, 414, 421, 449, 456, 473, 534, 539, 567, 582];
let overlapMiddleSmall = [14, 59, 64, 90, 106, 124, 234, 254, 319, 326, 328, 337, 341, 359, 371, 376, 388, 389, 484, 510, 515, 533, 544];
let overlapBottom = [3, 56, 86, 105, 126, 137, 138, 158, 169, 188, 195, 209, 216, 219, 221, 297, 305, 315, 381, 453, 462, 486, 521, 540, 558];
let overlapBottomSmall = [108, 112, 116, 172, 223, 226, 269, 280, 322, 357, 481, 546, 562, 576];

// Image 59 (portrait) to overlap images either side at full height
let overlapPortraitTop = [59, 251, 256, 262, 284, 293, 301, 310, 33, 355, 394, 405, 491, 506, 513, 548, 551];

// Overlaps positioning - default is 50%
let overlap25 = [14, 22, 43, 47, 82, 126, 166, 337, 456, 462, 477, 539, 567, 570];
let overlap75 = [12, 36, 62, 76, 118, 195, 251, 303, 320, 322, 341, 355, 453, 481, 486, 540, 571];

// added for Image 26 to be overlapped by 25 - sizes of both to remain as they are
let zIndex2 = [25, 470, 501, 583];
