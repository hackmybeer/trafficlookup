console.log("network.js loaded!");

var nURL = window.location.href;
console.log("nURL_1 =" + nURL);
/*
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
