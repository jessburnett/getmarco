function toggleIntroVideo (){
    event.preventDefault();
    var introVideoPlaceholder = document.getElementById("intro-video-still");
    var introVideo = document.getElementById("intro-video");
    
    if (introVideo.style.display === 'block') {
        introVideo.style.display = 'none';
    } else {
        introVideo.style.display = 'block';
    }
    
    if (introVideoPlaceholder.style.display === 'none') {
        introVideoPlaceholder.style.display = 'block';
    } else {
        introVideoPlaceholder.style.display = 'none';
    }
}