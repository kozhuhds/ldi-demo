var Reveal = require('reveal.js');
var $ = require('jbone');
var VIDEO_TYPE = require('../../constants.js').VIDEO_TYPE;
var AUDIO_TYPE = require('../../constants.js').AUDIO_TYPE;

var slides = {
    0: {
        steps: [
            { delay: 15, cmd: Reveal.next },
            { delay: 50, cmd: Reveal.next },
            { delay: 120, cmd: Reveal.next },
            { delay: 178, cmd: Reveal.next }
        ],
        mediaType: VIDEO_TYPE
    },
    1: {
        steps: [
            { delay: 32, cmd: Reveal.next },
            { delay: 84, cmd: Reveal.next},
            { delay: 93, cmd: function () {
                Reveal.next(); Reveal.next();
            } },
            { delay: 110, cmd: Reveal.next},
            { delay: 120, cmd: Reveal.next },
            { delay: 130, cmd: Reveal.next },
            { delay: 139, cmd: Reveal.next },
            { delay: 175, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    2: {
        steps: [
            { delay: 30, cmd: Reveal.next },
            { delay: 40, cmd: Reveal.next },
            { delay: 52, cmd: Reveal.next },
            { delay: 64, cmd: Reveal.next },
            { delay: 68, cmd: Reveal.next },
            { delay: 100, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    3: {
        steps: [
            { delay: 9, cmd: Reveal.next },
            { delay: 24, cmd: function () {
                $('.block-1-sl-4 ul li').eq(3).addClass("active");
                $('.block-3-sl-4 ul li').eq(0)
                    .html("hobby: golfing")
                    .addClass("active");
            } },
            { delay: 60, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    4: {
        steps: [
            { delay: 16, cmd: Reveal.next },
            { delay: 36, cmd: Reveal.next },
            { delay: 40, cmd: Reveal.next },
            { delay: 44, cmd: Reveal.next },
            { delay: 48, cmd: Reveal.next },
            { delay: 52, cmd: Reveal.next },
            { delay: 56, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next },
            { delay: 172, cmd: Reveal.next },
            { delay: 184, cmd: Reveal.next },
            { delay: 190, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    5: {
        steps: [
            { delay: 33, cmd: Reveal.next },
            { delay: 64, cmd: Reveal.next },
            { delay: 77, cmd: Reveal.next },
            { delay: 80, cmd: Reveal.next },
            { delay: 100, cmd: Reveal.next },
            { delay: 140, cmd: Reveal.next },
            { delay: 164, cmd: Reveal.next }

        ],
        mediaType: AUDIO_TYPE
    },
    6: {
        steps: [
            { delay: 48, cmd: Reveal.next },
            { delay: 60, cmd: Reveal.next },
            { delay: 88, cmd: Reveal.next },
            { delay: 112, cmd: Reveal.next },
            { delay: 136, cmd: Reveal.next },
            { delay: 140, cmd: Reveal.next }

        ],
        mediaType: AUDIO_TYPE
    },
    7: {
        steps: [
            { delay: 36, cmd: Reveal.next },
            { delay: 72, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    8: {
        steps: [
            { delay: 28, cmd: Reveal.next },
            { delay: 36, cmd: Reveal.next },
            { delay: 64, cmd: Reveal.next },
            { delay: 120, cmd: Reveal.next },
            { delay: 156, cmd: Reveal.next },
            { delay: 212, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    9: {
        steps: [
            { delay: 8, cmd: Reveal.next },
            { delay: 56, cmd: Reveal.next },
            { delay: 80, cmd: Reveal.next },
            { delay: 86, cmd: Reveal.next },
            { delay: 110, cmd: Reveal.next },
            { delay: 128, cmd: Reveal.next },
            { delay: 136, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    10: {
        steps: [
            { delay: 24, cmd: Reveal.next },
            { delay: 28, cmd: Reveal.next },
            { delay: 32, cmd: Reveal.next },
            { delay: 36, cmd: Reveal.next },
            { delay: 40, cmd: Reveal.next },
            { delay: 84, cmd: Reveal.next },
            { delay: 110, cmd: Reveal.next },
            { delay: 120, cmd: Reveal.next },
            { delay: 132, cmd: Reveal.next },
            { delay: 176, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    11: {
        steps: [
            { delay: 36, cmd: Reveal.next },
            { delay: 44, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next },
            { delay: 108, cmd: Reveal.next },
            { delay: 110, cmd: Reveal.next },
            { delay: 136, cmd: Reveal.next },
            { delay: 168, cmd: Reveal.next },
            { delay: 188, cmd: Reveal.next },
            { delay: 204, cmd: Reveal.next },
            { delay: 220, cmd: Reveal.next },
            { delay: 304, cmd: Reveal.next },
            { delay: 372, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    12: {
        steps: [
            { delay: 44, cmd: Reveal.next },
            { delay: 68, cmd: Reveal.next },
            { delay: 97, cmd: Reveal.next },
            { delay: 114, cmd: Reveal.next },
            { delay: 134, cmd: Reveal.next },
            { delay: 153, cmd: Reveal.next },
            { delay: 205, cmd: Reveal.next },
            { delay: 254, cmd: Reveal.next },
            { delay: 277, cmd: Reveal.next },
            { delay: 292, cmd: Reveal.next },
            { delay: 304, cmd: Reveal.next },
            { delay: 315, cmd: Reveal.next },
            { delay: 320, cmd: Reveal.next },
            { delay: 352, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    13: {
        steps: [
            { delay: 130, cmd: Reveal.next },
            { delay: 140, cmd: function () {
                $('.fund-block').addClass('moved');
            }},
            { delay: 161, cmd: Reveal.next }

        ],
        mediaType: AUDIO_TYPE
    },
    14: {
        steps: [
            { delay: 28, cmd: Reveal.next },
            { delay: 56, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next },
            { delay: 92, cmd: Reveal.next },
            { delay: 124, cmd: Reveal.next },
            { delay: 192, cmd: Reveal.next },
            { delay: 232, cmd: Reveal.next },
            { delay: 284, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    15: {
        steps: [
            { delay: 21, cmd: Reveal.next },
            { delay: 39, cmd: Reveal.next },
            { delay: 70, cmd: Reveal.next },
            { delay: 100, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    16: {
        steps: [
            { delay: 123, cmd: Reveal.next },
            { delay: 140, cmd: Reveal.next }
        ],
        mediaType: VIDEO_TYPE
    }
};

module.exports = {
    getSlides: function () {
        return slides
    }
};