var correo = "";

function validar() {

   var usuario= "";

   correo = document.getElementById("correo_val").value;

   if(correo=="omar@gmail.com"){
       usuario+= "<a class= 'ingresar_button' href='mapaT.html'>"+
       "<input class='w-100 ingresar_button' type='button' value='Ingresar'>"+
       "<a>";
       
   }
   else {
       usuario+= "<a class= 'ingresar_button' href='mapaU.html'>"+
       "<input class='w-100 ingresar_button' type='button' value='Ingresar'>"+
       "<a>";        
   }


   document.getElementById("result").innerHTML=usuario
   

}