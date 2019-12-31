//general folder for general js


const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        prllx.style.opacity = (1 - offset/500);

        var intViewportHeight = window.innerHeight;

        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);

        var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

                       console.log("height, html, body:");
                       console.log( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );


                        var heightOfPage = body.scrollHeight - html.clientHeight;
                        console.log("heightOfPage: " + heightOfPage);

    })
})



// console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";