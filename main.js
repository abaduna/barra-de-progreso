const bara = document.querySelector("#barra")
const secion = document.querySelector("section")

const animarBarra  =() =>{
    let scrollBar = -1*secion.getBoundingClientRect().top
    let progrewitrh = (scrollBar /  (secion.getBoundingClientRect().height - document.documentElement.clientHeight)) *100
    
    
   let value = Math.floor(progrewitrh)
   bara.style.width = value + "%"
}   
window.addEventListener("scroll", animarBarra)