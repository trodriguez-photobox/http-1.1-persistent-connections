console.log("Loading script...")

var timer = null;

window.onload = function() {
    console.log("Binding event listeners...")
    document.getElementById('start').onclick = start;
    document.getElementById('stop').onclick = stop;
}

function start() {
    console.log("Firing requests...");

    var interval = document.getElementById('interval').value;

    timer = window.setInterval(fireRequest, interval * 1000);
}

function fireRequest() {
    var url = document.getElementById('url').value;

    console.log(new Date() + ": requesting " + url)
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if(xhttp.status == 200) {
                    console.log(new Date() + ": received response");
                } else {
                    console.error(new Date() + ": request failed");
                }
            }
    };
    xhttp.open("GET", url + "?_=" + new Date().getTime(), true);
    xhttp.send();
}

function stop() {
    console.log("Stopping requests ...");

    if(timer != null) {
        window.clearTimeout(timer);
    }
}
