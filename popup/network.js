console.log("network.js loaded!");

var nURL = document.getElementById('header-title');
console.log("nURL_1 =" + nURL);



/*
var tabs = require("tabs");
var nURL = tabs.activeTab.title;
console.log("url from activ tab is: " + tabs.activeTab.title);
console.log("nURL_1 =" + nURL);
/*


function getPage(){
  browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
  })
}


function httpGet(nURL)
{
    if (window.XMLHttpRequest)
    {   //for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {   //for IE6, IE5 -> Microsoft sucks -> GitHub nooo why.
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", nURL, false );
    xmlhttp.send();

    console.log("nURL =" + nURL);
    console.log("xmlhttp.send() : + "xmlhttp.send());
}
*/
