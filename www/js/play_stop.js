

function load_media(){

    var my_media = new Media('http://cloudscanspeak.net:8000/clouds',
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        },
        function (stat) {
            if (stat == 1) {
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Buffering</div>';
            }
            if (stat == 2) {
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Stop</div>';
            }
        }
    );
    var my_media_arr = new Array(my_media,stat);
    return my_media_arr;
    // Play audio
}

function play_stop() {
var arr_my_media = new Array();
arr_my_media = load_media();
var media_content = arr_my_media[0];
var stat = arr_my_media[1];
media_content.play();
}

