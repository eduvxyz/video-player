const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector ("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log("le diste clic al botón de play");
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log("le diste clic al botón de pausa");
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10
/*     
*Termina siendo lo mismo
$video.currentTime += 10 
*/
    console.log("adelantaste 10 segundos", $video.currentTime);
}

function handleBackward() {
/*
*Termina haciendo lo mismo     
$video.currentTime -= 10
*/
    $video.currentTime = $video.currentTime - 10 
    console.log("retrocediste 10 segundos", $video.currentTime);
}

$video.addEventListener ('loadedmetadata', handleLoaded)
$video.addEventListener ('timeupdate', handleTimeUpdate)

function handleLoaded () {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
/*     console.log('tiempo actual', $video.currentTime) */
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    /* console.log($progress.value) */
}