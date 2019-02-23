function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();
  console.log("loadingcookies");
  console.log("foundde")

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  console.log("foun")
  gettingAllCookies.then((cookies) => {
    console.log("found_tea")

    //set the header of the panel
    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Cookies at: "+tab.title);
    var cookieTable = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);
    console.log("found_cookies")

    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdValue = document.createElement("td");
        let contentName = document.createTextNode(cookie.name.replace("_", " "));
        let contentValue = document.createTextNode(cookie.value.substring(0, 30));
        tdName.appendChild(contentName);
        tdValue.appendChild(contentValue);
        cookieTable.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdValue);
        console.log("found_cookies")
      }
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No cookies in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
  });
}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab);
