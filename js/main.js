
document.getElementById("buttonUp").addEventListener("click", subir);

function subir(){
  setTimeout(function(){
    window.scrollTo({top:0, behavior:'smooth'});
  },200)
}

let barra = document.querySelector("#scrollbar");
window.onscroll = function captureScroll() {
  //console.log("Vertical: " + window.scrollY);
  let max = document.body.scrollHeight - innerHeight;
  barra.style.width = `${(window.scrollY / max) * 100}%`;
};