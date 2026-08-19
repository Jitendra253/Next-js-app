console.log("location file loaded")
 function getLocation() {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(
                    showPosition,
                    showError
                );

            } else {
                document.getElementById("result").innerHTML =
                    "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            console.log(position)
        }

        function showError(error) {
            console.log("some error occured")
        }

        getLocation()