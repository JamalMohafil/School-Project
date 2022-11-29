var search = document.getElementById("search");
var clic = document.getElementById("click");
var close =document.getElementById("close");
var nav = document.getElementById('navv');
clic.onclick = ()=>{
search.style.display = "block";
}
addEventListener
close.addEventListener('click',()=>{
    search.style.display = "none";

})

var hamburger = document.querySelector('.hamburger');

hamburger.onclick = function (){
     var navBar = document.querySelector('.nav-bar');
navBar.classList.toggle("activee")
    }