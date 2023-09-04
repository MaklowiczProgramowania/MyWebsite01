const htmlDiv = document.getElementById("MS-HTML");
const cssDiv = document.getElementById("MS-CSS");
const jsDiv = document.getElementById("MS-JS");
const gitDiv = document.getElementById("MS-GIT");

const reveal_from_right = () => {
    var reveals = document.querySelectorAll(".reveal_from_right");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 650;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else
        {
            reveals[i].classList.remove("active");
        }
    }
}

const reveal_from_left = () => {
    var reveals = document.querySelectorAll(".reveal_from_left");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 650;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else
        {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal_from_right);
window.addEventListener("scroll", reveal_from_left);

