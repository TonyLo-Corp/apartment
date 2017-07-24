// Modal Image Gallery
function onClick(element) {
    "use strict"; //Annoying thing that brackets want me to add, supposively helps with preventing problems later
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon

var mySidebar = document.getElementById("mySidebar");


function w3_open() {
    "use strict";
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    }
        else {
            mySidebar.style.display = 'block';
        }
}

//Close the sidebar with the close button
function w3_close() {
    "use strict";
    mySidebar.style.display = "none";
}

// Google Maps
function myMap() {
    "use strict";
    myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapOptions = {
        center: myCenter,
        zoom: 12, scrollwheel: false, draggable: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
    
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}

// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides"); //
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  //Current picture has the opacity turned off
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}



//Script for the slideshow on attractions nearby:
