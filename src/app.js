var Reveal = require('reveal.js');
var $ = require('jquery');

Reveal.initialize({
    width: 1000,
    height: 740,
    center: false,
    controls: false,
    //history: true,
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
        $overlay.fadeIn();
        isPlaying = false;
        changeMediaState('pause');
    } else{ //play
        changeMediaState('play');
        $overlay.fadeOut();
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
    $('.js-loader').hide();
});

Reveal.addEventListener('fragmentshown', function(e) {
    //var $el = $(e.fragment);
});

Reveal.addEventListener('fragmenthidden', function(e) {
    //var $el = $(e.fragment);
});

$('.next-btn').on('click', function (e) {
    e.stopPropagation();
    Reveal.next();
});