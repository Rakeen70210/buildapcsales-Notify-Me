//Listen for alarm every 1 minute
chrome.alarms.onAlarm.addListener(function (getJSON)
{
    //Get the specified URL stored in local storage
    chrome.storage.local.get("url", function (obj)
    {
        var req = new XMLHttpRequest();
        req.open("GET", obj.url, true);
        req.send();
        req.onreadystatechange = function ()
        {
            if (this.readyState === 4 && this.status === 200)
            {
                var jsonData = JSON.parse(this.responseText);
                parseJSON(jsonData); //if data retreival is successful, call "parseJSON" function 
            }
        };
    });
});

//This function parses the JSON data retrieved from the server and stores it all in an array
function parseJSON(jsonData)
{
    var dataStorage = {}; //create an array to hold information from reddit
    chrome.storage.local.get("data", function (obj)
    {
        //now store the information obtained from the URL array, looping through all 25(default value) posts
        for (var i = 0; i < 25; i++)
        {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var url = JSON.stringify(jsonData.data.children[i].data.url);
            var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);

            //if user has already been notified, i.e. there is collision in the table, keep track of item in new table
            if (obj.data[title] === url)
            {
                dataStorage[title] = url;
                console.log("item already in dataStorage");
            }
                //if user has not been notified and item was not in table, i.e. no collision, add item to new table and notify user
            else if (obj.data[title] === undefined)
            {
                dataStorage[title] = url;
                console.log("adding item to dataStorage");
                console.log(title);

                notification(removeQuotes(thumbnail), removeQuotes(url), title);
            }

            //if anything else is in the table and there was no collision, it is to be removed from the table.
            //No actual removal occurs, just a new table is created and the old items are no longer in the new table.
        }
        console.log(dataStorage);
        chrome.storage.local.set({ data: dataStorage });
    });

}

//Remove quotes from urls obtained by JSON
function removeQuotes(string)
{
    return string.toString().replace(/"/g, "");
}

var notificationID = null;
//creates a notification on the desktop
function notification(thumbnail, url, title)
{
    if (thumbnail == "self" || thumbnail == "default" || thumbnail == "nsfw" || thumbnail == "image")
    {
        chrome.notifications.create(url, {
            type: "basic",
            title: "",
            message: title,
            iconUrl: "icon.png",
            buttons: [{ title: "/r/buildapcsales", iconUrl: "icon.png" }],
            isClickable: true,
            requireInteraction: true
        });
    }
    else
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', thumbnail, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e)
        {
            chrome.notifications.create(url, {
                type: "basic",
                title: "",
                message: title,
                iconUrl: window.URL.createObjectURL(this.response),
                buttons: [{ title: "/r/buildapcsales", iconUrl: "icon.png" }],
                isClickable: true,
                requireInteraction: true
            });
        };
        xhr.send(null);
    }
}

//User may click on the notification to take them to where the product sale was posted
chrome.notifications.onClicked.addListener(function (notifID)
{
    chrome.tabs.create({ url: notifID });
});

chrome.notifications.onButtonClicked.addListener(function (replyBtnClick)
{
    chrome.storage.local.get("url", function (obj)
    {
        obj.url = (obj.url).replace(".json", "");
        chrome.tabs.create({ url: obj.url });
    });
});

