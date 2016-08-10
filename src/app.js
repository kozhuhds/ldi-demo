var Reveal = require('reveal.js');
var $ = require('jbone');

Reveal.initialize({
    width: 1000,
    height: 740,
    center: false,
    controls: false,
    history: true,
    //keyboard: false
});

var stepIndex = 0,
    loopIndex = 0,
    isPlaying = false,
    AUDIO_TYPE = "audio",
    VIDEO_TYPE = "video",
    mediaIsReady = false,
    $audio = $('audio');



var togglePlay  = function () {
    if(!mediaIsReady) {
        loadingMediaLoop();
        return
    }
    var $overlay = $('#overlay');

    if(isPlaying) { //pause
        $overlay.css('display', 'block');
        isPlaying = false;
        changeMediaState('pause');
    } else{ //play
        changeMediaState('play');
        $overlay.css('display', 'none');
        isPlaying = true;
        playLoop();
    }
};

$(document).on('click', togglePlay);
$(AUDIO_TYPE)[0].onwaiting = togglePlay;
$(VIDEO_TYPE)[0].onwaiting = togglePlay;

//var initMedia = function () {
//    var mediaType = slides[Reveal.getIndices().h].mediaType;
//
//    if(mediaType === AUDIO_TYPE) {
//
//    } else if(mediaType === VIDEO_TYPE) {
//
//    }
//};



var slides = {
    0: {
        steps: [
            { delay: 12, cmd: Reveal.next },
            { delay: 44, cmd: Reveal.next },
            { delay: 120, cmd: Reveal.next },
            { delay: 180, cmd: Reveal.next }
        ],
        mediaType: VIDEO_TYPE
    },
    1: {
        steps: [
            { delay: 28, cmd: Reveal.next },
            { delay: 88, cmd: Reveal.next},
            { delay: 95, cmd: function () {
                Reveal.next(); Reveal.next();
            } },
            { delay: 119, cmd: Reveal.next},
            { delay: 124, cmd: Reveal.next },
            { delay: 137, cmd: Reveal.next },
            { delay: 149, cmd: Reveal.next },
            { delay: 179, cmd: Reveal.next }
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
            { delay: 12, cmd: Reveal.next },
            { delay: 24, cmd: Reveal.next },
            { delay: 64, cmd: Reveal.next }
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
            { delay: 184, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    5: {
        steps: [
            { delay: 36, cmd: Reveal.next },
            { delay: 68, cmd: Reveal.next },
            { delay: 72, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next },
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
            { delay: 72, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next }

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
            { delay: 84, cmd: Reveal.next },
            { delay: 86, cmd: Reveal.next },
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
            { delay: 128, cmd: Reveal.next },
            { delay: 132, cmd: Reveal.next },
            { delay: 180, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    11: {
        steps: [
            { delay: 36, cmd: Reveal.next },
            { delay: 44, cmd: Reveal.next },
            { delay: 76, cmd: Reveal.next },
            { delay: 108, cmd: Reveal.next },
            { delay: 136, cmd: Reveal.next },
            { delay: 168, cmd: Reveal.next },
            { delay: 188, cmd: Reveal.next },
            { delay: 204, cmd: Reveal.next },
            { delay: 220, cmd: Reveal.next },
            { delay: 304, cmd: Reveal.next },
            { delay: 305, cmd: Reveal.next },
            { delay: 372, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    12: {
        steps: [
            { delay: 44, cmd: Reveal.next },
            { delay: 52, cmd: Reveal.next },
            { delay: 84, cmd: Reveal.next },
            { delay: 104, cmd: Reveal.next },
            { delay: 124, cmd: Reveal.next },
            { delay: 140, cmd: Reveal.next },
            { delay: 196, cmd: Reveal.next },
            { delay: 232, cmd: Reveal.next },
            { delay: 256, cmd: Reveal.next },
            { delay: 268, cmd: Reveal.next },
            { delay: 280, cmd: Reveal.next },
            { delay: 296, cmd: Reveal.next },
            { delay: 308, cmd: Reveal.next },
            { delay: 320, cmd: Reveal.next },
            { delay: 352, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    13: {
        steps: [
            { delay: 144, cmd: Reveal.next },
            { delay: 157, cmd: Reveal.next },
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
            { delay: 24, cmd: Reveal.next },
            { delay: 44, cmd: Reveal.next },
            { delay: 56, cmd: Reveal.next },
            { delay: 104, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    },
    16: {
        steps: [
            { delay: 2, cmd: Reveal.next },
            { delay: 132, cmd: Reveal.next }
        ],
        mediaType: AUDIO_TYPE
    }
};



var playLoop = function () {
    var currSlide = null;
    console.log(loopIndex);
    if (isPlaying && mediaIsReady) {
        currSlide = Reveal.getIndices().h;

        if (slides[currSlide].steps[stepIndex]) {
            setTimeout(playLoop, 250);
            if (slides[currSlide].steps[stepIndex].delay === loopIndex) {
                //loopIndex = 0;
                slides[currSlide].steps[stepIndex++].cmd();
            }
        }
        loopIndex++;
    }
};

var changeMediaState = function (action) {
    var mediaType = slides[Reveal.getIndices().h].mediaType;

    if(mediaType === AUDIO_TYPE) {
        $audio[0][action]();
    } else if(mediaType === VIDEO_TYPE) {
        $(Reveal.getCurrentSlide()).find('video')[0][action]();
    }
};

var loadingMediaLoop = function (slideIndex) {
    console.log("loading...", $audio[0].readyState );
    var indexh = slideIndex || Reveal.getIndices().h;
    var mediaType = slides[indexh].mediaType;


    mediaIsReady = (mediaType === AUDIO_TYPE && $audio[0].readyState === 4)
        || (mediaType === VIDEO_TYPE &&  $(Reveal.getCurrentSlide()).find('video')[0].readyState === 4);


    if (mediaIsReady) {
        indexh > 0 && changeMediaState('play');
        setTimeout(playLoop, 250);
    } else {
        setTimeout(loadingMediaLoop, 250);
    }
};

loadingMediaLoop();




Reveal.addEventListener('slidechanged', function(e) {
    console.log("SLIDE CHANGED");
    mediaIsReady = false;
    stepIndex = 0;
    loopIndex = 0;

    var mediaFileNumber = e.indexh + 1;
    if(slides[e.indexh].mediaType === AUDIO_TYPE) {
        $audio.find('source').attr('src', './data/Page ' + mediaFileNumber + ".mp3");

        $audio[0].load();
    }

    loadingMediaLoop(e.indexh);
});

Reveal.addEventListener('ready', function() {
    $('.js-loader').css('display', 'none');
});

//Reveal.addEventListener('fragmentshown', function(e) {
//    //var $el = $(e.fragment);
//});
//
//Reveal.addEventListener('fragmenthidden', function(e) {
//    //var $el = $(e.fragment);
//});

$('.next-btn').on('click', function (e) {
    e.stopPropagation();
    Reveal.next();
});