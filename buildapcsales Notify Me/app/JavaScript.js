document.addEventListener('DOMContentLoaded', function ()
{
    var reload = document.getElementById('Button2');

    reload.addEventListener('click', function ()
    {
        chrome.runtime.reload();
        console.log("Extension Reloaded");
    });
});

//Wait for the document(popup.html) to fully load before executing any javascript
document.addEventListener('DOMContentLoaded', function ()
{
    var start = document.getElementById('button1');
    // onClick's logic below:
    start.addEventListener('click', function ()
    {
        //Clear any previously stored data
        chrome.storage.local.clear(function (callback)
        {
            //If there was an error clearing local storage.
            var error = chrome.runtime.lastError;
            if (error)
            {
                console.error(error);
            }
            else
            {
                console.log("local storage cleared");
            }
        });

        var categories = document.getElementById("Select1");
        var selectedCategory = categories.options[categories.selectedIndex].text;

        url = checkCategory(selectedCategory);

        url = url + ".json";

        //Get the JSON data by using the specified url
        getJSON(url);

        //Store the url in local storage and set the alarm to activate every 1 minute
        chrome.storage.local.set({ "url": url });
        chrome.alarms.create("alarm", { delayInMinutes: 1, periodInMinutes: 1 });
    });
});


function checkCategory(category)
{
    if(category === "All Categories")
    {
        return "https://www.reddit.com/r/buildapcsales/new/";
    }
    else if(category === "Case")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=Case&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "Controller")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=Controller&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "Cooler")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=cooler&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "CPU")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=CPU+OR+Processor&restrict_sr=on&sort=new&t=all";
    }
    else if(category === "FAN")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=Fan&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "GPU")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=GPU&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "HDD")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=GPU&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "Headphones")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=headphones&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "Keyboard")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=Keyboard&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category == "Monitor")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=monitor&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "Mouse")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=Mouse&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "PSU")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=PSU&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "RAM")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=RAM&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else  if(category === "SSD")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=SSD&sort=new&restrict_sr=on&feature=legacy_search";
    }
    else if(category === "MOBO")
    {
        return "https://www.reddit.com/r/buildapcsales/search?q=mobo+OR+motherboard&sort=new&restrict_sr=on&t=all";
    }
}
//This function takes in a specified url with proper ".json" tag at the end of the url and proceeds to get JSON data back from the server
function getJSON(url)
{
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    req.onreadystatechange = function ()
    {
        if (this.readyState === 4 && this.status === 200)
        {
            var jsonData = JSON.parse(this.responseText);
            parseJSON(jsonData); //if data retreival is successful, call "parseJSON" function 
        }
    };
}

//This function parses the JSON data retrieved from the server and stores it all in an array
function parseJSON(jsonData)
{
    var dataStorage = {}; //create an array to hold information from reddit

    //now store the information obtained from the URL array, looping through all 25(default value) posts
    for (var i = 0; i < 25; i++)
    {

        //get the title and url of each post
        var title = JSON.stringify(jsonData.data.children[i].data.title);
        var url = JSON.stringify(jsonData.data.children[i].data.url);
        var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
        //store the title and its respective url in each index of the array
        dataStorage[title] = url;
    }

    chrome.storage.local.set({ data: dataStorage });
}