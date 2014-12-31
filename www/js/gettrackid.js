
        function getTrackID(){
            var socket = new WebSocket("ws://cloudscanspeak.net:1982/websocket");
            socket.onopen = function (event) {
            }
            socket.onmessage = function (event){
              document.getElementById("trackID").innerHTML = event.data; 
            }
            socket.onerror = function (event) {
              alert("something wrong" + event.data);
            }
        }