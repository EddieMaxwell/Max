const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener("click", function() {
    if (!btn.classList.contains('slide')) {
        button.classList.add('slide');
        video.pause();
    } else {
        button.classList.remove('slide');
        video.play();
    }
});


//const preloader = document.querySelector('preloader');
//window.addEventListener('load', function() {
//preloader.classList.add("hide-preloader");
//});