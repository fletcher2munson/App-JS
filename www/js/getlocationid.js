            var onSuccess = function(position) {

                var lat = parseFloat(position.coords.latitude);
                var lng = parseFloat(position.coords.longitude);
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);

                geocoder.geocode({'latLng': latlng}, function(results,status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                                                if (results[0]) {
                            var add = results[0].formatted_address;
                            var value = add.split(",");

                            count=value.length;
                            zip=value[count-1];
                            country=value[count-2];
                            city=value[count-3];
                            sug1=value[count-4];
                            sug2=value[count-5];

                            document.getElementById("locationID").innerHTML = country + ", " + city;

                        }
                        else {
                            alert ("address not found");
                        }
                    }
                    else {
                        alert ('Geolocation failed due to: ' + status);
                    }

                });


            };

//            onError Callback receives a PositionError object

            function onError(error) {
            alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
            };
            
            function getLocationID(){
                navigator.geolocation.getCurrentPosition(onSuccess, onError);    
            };
            