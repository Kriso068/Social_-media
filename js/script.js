

const carres = document.querySelectorAll(".carre");
const actives = document.querySelectorAll("p");
const back = document.querySelector(".rotate")




carres.forEach(carre =>{
    carre.addEventListener("click", function(){
        carre.classList.toggle("active")

        actives.classList.toggle("active p")

        back.classList.toggle("active rotate")


    })
})

function changeBgColor(color){
    const bg =document.querySelector(".bg");
    bg.style.background = color;
}



