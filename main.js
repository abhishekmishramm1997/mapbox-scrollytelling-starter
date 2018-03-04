mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWs3NW0iLCJhIjoiY2pkeWlyZXc2MTY2YzJ6czZncXpodHRheiJ9.Mmzc78mQw-K27O8h8vHWmA';

var chapters = {
    'part-1': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [77.1016, 28.6375],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [72.580920, 23.029448],
        zoom: 16.76,
        bearing: 40.00,
        pitch: 60.00,
    },
    'part-4': {
        center: [72.837694, 18.980766],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-5': {
        center: [80.271579, 13.090595],
        zoom: 15.47,
        bearing: 15.00,
        pitch: 40.00,
    },
    'part-6': {
        center: [77.598456, 12.974298],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-7': {
        center: [74.034930, 15.289509],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-8': {
        center: [76.266249, 9.903568],
        zoom: 15.40,
        bearing: -30.00,
        pitch: 29.00,
    }
          
    
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/abhishek75m/cjdzvz2nba7zq2rmt0iyrx873',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}