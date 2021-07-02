let body= document.querySelector(".container");
let toggle= document.getElementById("toggle");
var x = document.getElementById("myDIV");

toggle.addEventListener('click',e =>{
    if(toggle.checked){
        body.classList.add('dark')
    }else{
        body.classList.remove('dark')
    }

    if (x.innerHTML === "Coding at Night") {
        x.innerHTML = "Coding at Day";
     } else {
        x.innerHTML = "Coding at Night";
  }
})
