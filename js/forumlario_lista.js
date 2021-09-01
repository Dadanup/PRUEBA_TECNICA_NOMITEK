var cambiar_1=new Array("-","CDMX","Edo. de México","Guadalajara","Monterrey");
var cambiar_2=new Array("-","Houston","Chicago","California","Denver");
var cambiar_3=new Array("-","Toronto","Montreal","Vancouver","Calgary");

var total = [
[],
cambiar_1,
cambiar_2,
cambiar_3
];

function cambiar_estado(){ 
   var pais 
   pais = document.f1.pais[document.f1.pais.selectedIndex].value 
   //miro a ver si el pais está definido 
   if (pais != 0) { 
      //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
      //selecciono el array de provincia adecuado 
      estados_t=total[pais]
      //calculo el numero de provincias 
      n_estados = estados_t.length 
      //marco el número de provincias en el select 
      document.f1.estado.length = n_estados 
      //para cada provincia del array, la introduzco en el select 
      for(i=0;i<n_estados;i++){ 
         document.f1.estado.options[i].value=estados_t[i] 
         document.f1.estado.options[i].text=estados_t[i] 
      }	
   }else{ 
      //si no había provincia seleccionada, elimino las provincias del select 
      document.f1.estado.length = 1 
      //coloco un guión en la única opción que he dejado 
      document.f1.estado.options[0].value = "-" 
      document.f1.estado.options[0].text = "-" 
   } 
   //marco como seleccionada la opción primera de provincia 
   document.f1.estado.options[0].selected = true 
}
