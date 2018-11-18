//Listen for alarm every 1 minute
chrome.alarms.onAlarm.addListener(function (getJSON) {
    //Get the specified URL stored in local storage
    chrome.storage.local.get("url", function (obj) {
        var category = "";
        chrome.storage.local.get("selectedCategory", function (result) {
            category = result.selectedCategory;
        });
        var req = new XMLHttpRequest();
        req.open("GET", obj.url, true);
        req.send();
        req.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200)
            {
                var jsonData = JSON.parse(this.responseText);
                parseJSON(jsonData, category); //if data retreival is successful, call "parseJSON" function 
            }
        };
    });
});

//This function parses the JSON data retrieved from the server and stores it all in an array
function parseJSON(jsonData, category) {
    var dataStorage = {}; //create an array to hold information from reddit
    chrome.storage.local.get("data", function (obj) {
        //now store the information obtained from the URL array, looping through all 25(default value) posts
        for (var i = 0; i < 25; i++)
        {
            if (category === "All Categories")
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
            }
            else if (category === "Case")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/case/gi);
                if (result)
                {
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
                }
            }
            else if (category === "Controller")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/controller/gi);
                if (result)
                {
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
                }
            }
            else if (category === "Cooler")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/cooler/gi);
                if (result)
                {
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
                }
            }
            else if (category === "CPU")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/cpu/gi);
                if (result)
                {
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
                }
            }
            else if (category === "FAN")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/fan/gi);
                if (result)
                {
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
                }
            }
            else if (category === "GPU")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/gpu/gi);
                if (result)
                {
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
                }
            }
            else if (category === "HDD")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/hdd/gi);
                if (result)
                {
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
                }
            }
            else if (category === "Headphones")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/headphone/gi);
                if (result)
                {
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
                }
            }
            else if (category === "Keyboard")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/keyboard/gi);
                if (result)
                {
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
                }
            }
            else if (category == "Monitor")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/monitor/gi);
                if (result)
                {
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
                }
            }
            else if (category === "Mouse")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/mouse/gi);
                if (result)
                {
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
                }
            }
            else if (category === "PSU")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/psu/gi);
                if (result)
                {
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
                }
            }
            else if (category === "RAM")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/ram/gi);
                if (result)
                {
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
                }
            }
            else if (category === "SSD")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/ssd/gi);
                if (result)
                {
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
                }
            }
            else if (category === "MOBO")
            {
                //get the title and url of each post
                var title = JSON.stringify(jsonData.data.children[i].data.title);
                var result = title.match(/mobo/gi);
                if (result)
                {
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
                }
            }
            //if anything else is in the table and there was no collision, it is to be removed from the table.
            //No actual removal occurs, just a new table is created and the old items are no longer in the new table.
        }
        console.log(dataStorage);
        chrome.storage.local.set({ data: dataStorage });
    });

}

//Remove quotes from urls obtained by JSON
function removeQuotes(string) {
    return string.toString().replace(/"/g, "");
}

var notificationID = null;
//creates a notification on the desktop
function notification(thumbnail, url, title) {
    //if the 
    if (thumbnail == "self" || thumbnail == "default" || thumbnail == "nsfw" || thumbnail == "image")
    {
        chrome.notifications.create(url, {
            type: "basic",
            iconUrl: "icon.png",
            title: "",
            message: title,
            iconUrl: "icon.png",
            buttons: [{ title: "/r/buildapcsales", iconUrl: "icon.png" }],
            requireInteraction: true
        });
    }
    else
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', thumbnail, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            chrome.notifications.create(url, {
                type: "basic",
                iconUrl: window.URL.createObjectURL(this.response),
                title: "",
                message: title,
                buttons: [{ title: "/r/buildapcsales", iconUrl: "icon.png" }],
                requireInteraction: true
            });
        };
        xhr.send(null);
    }
}

//User may click on the notification to take them to where the product sale was posted
chrome.notifications.onClicked.addListener(function (notifID) {
    chrome.tabs.create({ url: notifID });
});

chrome.notifications.onButtonClicked.addListener(function (replyBtnClick) {
    chrome.storage.local.get("url", function (obj) {
        obj.url = (obj.url).replace(".json", "");
        chrome.tabs.create({ url: obj.url });
    });
});

