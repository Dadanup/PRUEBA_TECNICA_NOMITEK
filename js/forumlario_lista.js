
//LISTAS CON LOS ESTADOS DEL options
var cambiar_1=new Array("-","CDMX","Edo. de México","Guadalajara","Monterrey");
var cambiar_2=new Array("-","Houston","Chicago","California","Denver");
var cambiar_3=new Array("-","Toronto","Montreal","Vancouver","Calgary");

var total = [[], cambiar_1, cambiar_2, cambiar_3];

function cambiar_estado(){
   var pais
   pais = document.f1.pais[document.f1.pais.selectedIndex].value
   if (pais != 0) {
      estados_t=total[pais]
      n_estados = estados_t.length
      document.f1.estado.length = n_estados
      for(i=0;i<n_estados;i++){
         document.f1.estado.options[i].value=estados_t[i]
         document.f1.estado.options[i].text=estados_t[i]
      }
   }else{
      document.f1.estado.length = 1
      document.f1.estado.options[0].value = "-"
      document.f1.estado.options[0].text = "-"
   }
   document.f1.estado.options[0].selected = true
}
