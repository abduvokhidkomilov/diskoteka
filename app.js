const btn=document.querySelector("button")
const formel=document.querySelector("form")
const body=document.querySelector("body")

 function gradient(){ 
    const random= Math.trunc(Math.random()*255+1)
    return  random;
 }
 btn.addEventListener("click", function(e){
    e.preventDefault()
    body.style.backgroundImage=`linear-gradient(65deg, rgba(${gradient()},${gradient()},${gradient()}), rgba(${gradient()},${gradient()},${gradient()}), rgba(${gradient()},${gradient()},${gradient()} ))`;
 }) 
 
