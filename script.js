let currentImg = document.querySelector(".current-img");
let imgs = document.querySelectorAll(".all-imgs img");
imgs.forEach(function (img){
    img.addEventListener("click", function(e) {
        currentImg.src = e.target.src;

        currentImg.classList.add("animate-imgs");
        setTimeout(function(){
            currentImg.classList.remove("animate-imgs");

        }, 400)
    });
});
