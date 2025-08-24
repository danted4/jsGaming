export const fullscreen = () =>{
    const canvas = document.getElementById('game');
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) { // Safari
      canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE11
      canvas.msRequestFullscreen();
    }
}