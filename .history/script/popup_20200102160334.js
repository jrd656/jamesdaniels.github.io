
var testDiv = document.getElementById("parallax-bottom");
var testDiv1 = document.querySelector("div.parallax-bottom");
var popupdiv = document.getElementById("pop-up")
const popupdivs = document.querySelectorAll(".popupanchor");

// [distance from top of page] + [distance to top of element] = height of element
var delphi = window.pageYOffset + testDiv1.getBoundingClientRect().top;


console.log(delphi);

console.log("test Div : " + testDiv1);


window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    if (offset < 2400) {
        popupdiv.style.display = "none";
        // console.log("We're not as far down as 2400");  
        console.log("distance to top of delphi: "+ delphi); 
    }

    if (offset > 2800) {
        popupdiv.style.display = "inline-block";
        // console.log("We're beyond 2000");
        console.log("distance to top of delphi: "+ delphi); 
    }


    console.log("height from top - delphi: "+ offset-delphi);
})