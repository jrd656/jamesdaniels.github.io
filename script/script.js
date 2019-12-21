//general folder for general js


const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset)
        prllx.style.opacity = (1 - offset/500);
    })
})



// console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
//         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";