console.log("fu.js loaded!")
function httpGetAsync()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
            document.getElementById('PublicIP').textContent = xmlHttp.responseText
    }
    xmlHttp.open("GET", "https://myexternalip.com/raw", true); // true for asynchronous
    xmlHttp.send(null);
}
httpGetAsync();
