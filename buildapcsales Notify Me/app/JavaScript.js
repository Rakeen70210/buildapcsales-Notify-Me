//Wait for the document(popup.html) to fully load before executing any javascript
document.addEventListener('DOMContentLoaded', function () {
    //"Clear all Notifications" logic
    var clear = document.getElementById('Button2');
    clear.addEventListener('click', function () {
        chrome.notifications.getAll(function (notifications) {
            notifications.forEach(function (object) {
                chrome.notifications.clear(object, function () {
                    console.log("cleared: " + object);
                });
            });
        });
    });

    var start = document.getElementById('button1');
    // onClick's logic below:
    start.addEventListener('click', function () {
        //clear storage
        chrome.storage.local.clear(function () {
            console.log("storage cleared");
        });
        //clear alarms
        chrome.alarms.clearAll(function () {
            console.log("alarm cleared");
        });

        var categories = document.getElementById("Select1");
        var selectedCategory = categories.options[categories.selectedIndex].text;

        url = "https://www.reddit.com/r/buildapcsales/new/.json";

        //Get the JSON data by using the specified url
        jsonData = getJSON(url, selectedCategory);

        //Store the url in local storage and set the alarm to activate every 1 minute
        chrome.storage.local.set({ "url": url });
        chrome.storage.local.set({ "selectedCategory": selectedCategory });
        chrome.alarms.create("alarm", { delayInMinutes: 1, periodInMinutes: 1 });
    });
});

//This function takes in a specified url with proper ".json" tag at the end of the url and proceeds to get JSON data back from the server
function getJSON(url, selectedCategory) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsonData = JSON.parse(this.responseText);
            //if data retreival is successful, call "parseJSON" function 
            parseJSON(jsonData, selectedCategory);
        }
    };
}

//This function parses the JSON data retrieved from the server and stores it all in an array
function parseJSON(jsonData, category) {
    var dataStorage = {}; //create an array to hold information from reddit

    //now store the information obtained from the URL array, looping through all 25(default value) posts
    for (var i = 0; i < 25; i++) {
        if (category === "All Categories") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var url = JSON.stringify(jsonData.data.children[i].data.url);
            var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
            //store the title and its respective url in each index of the array
            dataStorage[title] = url;
        }
        else if (category === "Case") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/case/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "Controller") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/controller/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "Cooler") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/cooler/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "CPU") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/cpu/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "FAN") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/fan/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "GPU") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/gpu/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "HDD") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/hdd/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "Headphones") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/headphone/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "Keyboard") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/keyboard/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category == "Monitor") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/monitor/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "Mouse") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/mouse/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "PSU") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/psu/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "RAM") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/ram/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "SSD") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/ssd/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }
        else if (category === "MOBO") {
            //get the title and url of each post
            var title = JSON.stringify(jsonData.data.children[i].data.title);
            var result = title.match(/mobo/gi);
            if (result) {
                var url = JSON.stringify(jsonData.data.children[i].data.url);
                var thumbnail = JSON.stringify(jsonData.data.children[i].data.thumbnail);
                //store the title and its respective url in each index of the array
                dataStorage[title] = url;
            }
        }

    }

    chrome.storage.local.set({ data: dataStorage });
}