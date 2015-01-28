

function load_media(){

    my_media = new Media('http://cloudscanspeak.net:8000/clouds',
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        },
        function (stat) {
            stream_stat=stat;
            if (stat == 1) {
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Buffering</div>';
            }
            if (stat == 2) {
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Stop</div>';
            }
        }
    );
    return my_media;
    // Play audio
}

function play_stop() {
alert(stream_stat);
if (stream_stat == 4) my_media.stop();
else my_media.play();

}

