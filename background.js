
// for the first time call
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
    console.log("scrolled");
    var elements = document.querySelectorAll('[data-testid="fbfeed_story"]');
    for(let element of elements){
        var sponsoredClass = element.getElementsByClassName("z_1p4ow-s_n_");
        var sponsoredText = "";
        for(let spEl of sponsoredClass){
            sponsoredText += spEl.textContent;
        }
        if(sponsoredText === "Sponsored"){
            element.remove();
            console.log("Removed!");
        }
    }
}
