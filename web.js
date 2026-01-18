window.addEventListener("load", function() {
    const img = document.getElementById("profilePic");

    setTimeout(() => {
        img.classList.add("show-image");
    }, 300); 
});

document.addEventListener("click", () => {
    const audio = document.getElementById("bg-music");
    audio.play();
}, { once: true });


