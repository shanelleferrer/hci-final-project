let mybutton = document.getElementById("button");
function museumFunction() {
    document.documentElement.scrollTo = museum;
}

function svgClick() {
    console.log("clicked")
    window.location.href= './collection.html';
}
document.getElementById("click-one").addEventListener("click", svgClick);
document.getElementById("click-two").addEventListener("click", svgClick);
document.getElementById("click-three").addEventListener("click", svgClick);
document.getElementById("click-four").addEventListener("click", svgClick);


window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
        } else {
        document.getElementById("backToTopBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }