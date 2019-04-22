

//these two variables will be soon changed ...
const parentElement = [
    '[data-testid="fbfeed_story"]',
    "fbfeed_story"
];
const sponsoredElement = [
    // "z_1p4ow-s_n_"
    "b"
];
const keyWordsToLookFor = [
    "Sponsored",
    "Sponsorizat",
    "9 hrs",
    "Sponsored In Other Languages"
]
var counter = 0;

//this code is for geting data file from containig folder
// var str = chrome.runtime.getURL("./data.json");
// console.log(str);

// for the first time call
console.log("Started cleaning up AD mess from facebook!!");
document.addEventListener('DOMNodeInserted', cleanUp);

function cleanUp(){
    var elements = document.querySelectorAll(parentElement);
    for(let element of elements){
        var sponsoredClass = element.querySelectorAll(sponsoredElement);
        for(let spEl of sponsoredClass){
            let text = spEl.textContent.split("").filter(_=> _!== "-").join("");
            if(keyWordsToLookFor.includes(text)){
                console.log(element);
                element.remove();
                counter++;
            }
        }
    }
}
