function hablilitar(){
    nombre=document.getElementById("nombre").value;
    edad=document.getElementById("edad").value;
    genero=document.getElementById("genero").value;
    pais=document.getElementById("pais").value;
    estado=document.getElementById("estado").value;
    v=0;
    if(nombre==""){
        v++;
    }
    if(edad==""){
        v++;
    }
    if(genero==""){
        v++;
    }
    if(pais==""){
        v++;
    }
    if(estado==""){
        v++;
    }
    if(v==0){
        document.getElementById("button").disabled=false;

    }else{
        document.getElementById("button").disabled=true;
    }

}

document.getElementById("nombre").addEventListener('keyup',hablilitar);
document.getElementById("edad").addEventListener('keyup',hablilitar);
document.getElementById("genero").addEventListener('keyup',hablilitar);
document.getElementById("pais").addEventListener('change',hablilitar);
document.getElementById("estado").addEventListener('change',hablilitar);

document.getElementById("button").addEventListener('click',()=>{
    alert("campos llenados");
});
 
