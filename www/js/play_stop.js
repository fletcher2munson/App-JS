
function play_stop_function(){
    var my_media = new Media('http://cloudscanspeak.net:8000/clouds',
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        },
        function (stat) {
            if (status == 1) {
                document.getElementById("play_stop_button").innerHTML = "Buffering";
            }
            if (status == 2) {
                document.getElementById("play_stop_button").innerHTML = "Streaming";
            }
        }
    );
    // Play audio
    my_media.play({playAudioWhenScreenIsLocked : false });
}