

//these two variables will be soon changed ...
const parentElement = [
    '[data-testid="fbfeed_story"]',
    "fbfeed_story"
];
const sponsoredElement = [
    "z_1p4ow-s_n_"
];

// for the first time call
console.log("Started cleaning up AD mess from facebook!!");
cleanUp();

// Clean up every time user scrolls
let last_known_scroll_position = 0;
let ticking = false;
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      cleanUp();
      ticking = false;
    });
    ticking = true;
  }
});


function cleanUp(){
    var elements = document.querySelectorAll(parentElement);
    for(let element of elements){
        var sponsoredClass = element.getElementsByClassName(sponsoredElement);
        var sponsoredText = "";
        for(let spEl of sponsoredClass){
            sponsoredText += spEl.textContent;
        }
        if(sponsoredText === "Sponsored"){
            element.remove();
        }
    }
}
