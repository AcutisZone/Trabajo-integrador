
function Limpieza() {
    document.getElementById("datos1").style.display = "none";
    document.getElementById("datos2").style.display = "none";
    document.getElementById("datos3").style.display = "none";
    document.getElementById("datos4").style.display = "none";
    document.getElementById("elegir").style.display = "none";
}


document.getElementById("informacion_personal").addEventListener("click",function () {
    console.log("entro a la funcion");  
    Limpieza();
    document.getElementById("datos1").style.display = "block";
});

document.getElementById("Estudios").addEventListener("click",function () {
    console.log("entro a la funcion"); 
    Limpieza(); 
    document.getElementById("datos2").style.display = "block";
});

document.getElementById("Experiencia Laboral").addEventListener("click",function () {
    console.log("entro a la funcion"); 
    Limpieza(); 
    document.getElementById("datos3").style.display = "block";
});

document.getElementById("Habilidades").addEventListener("click",function () {
    console.log("entro a la funcion"); 
    Limpieza(); 
    document.getElementById("datos4").style.display = "block";
});
/* No pude hacer funcionar la llamada de API;
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))*/
    
