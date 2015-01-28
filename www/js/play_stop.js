

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
            if (stat == 1) {
                stream_stat=stat;
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Buffering</div>';
                document.getElementById("stream_status_monitor").innerHTML = "Starting";

            }
            if (stat == 2) {
                stream_stat=stat;
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Stop</div>';
                document.getElementById("stream_status_monitor").innerHTML = "Running";
            }
            if (stat == 3) {
                stream_stat=stat;
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Paused</div>';
                document.getElementById("stream_status_monitor").innerHTML = "Paused";
            }
            if (stat == 4) {
                stream_stat=stat;
                document.getElementById("play_stop_button").innerHTML = '<div class="app-button">Play</div>';
                document.getElementById("stream_status_monitor").innerHTML = "Stopped";
            }
        }
    );
    return my_media;
    // Play audio
}

function play_stop() {
my_media.play();
}

