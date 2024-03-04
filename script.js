function asignarTextoElemento(elemento, texto) {
    let elementoDeHtml = document.getElementById(elemento);
    elementoDeHtml.innerHTML = texto;
    }
    
    
    
      function encriptar() {
      let textoCaja = document.getElementById("text_area").value;/*catura textarea*/
      let textoEncriptado = textoCaja
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
     // alert(textoEncriptado);
     if (/[A-Z]/.test(textoEncriptado)|| /[^a-zA-Z\s]/.test(textoEncriptado)) {
        asignarTextoElemento("mensaje", "El texto contiene letras mayúsculas o caracter invalido");
        document.getElementById("p_ingrese_texto").style.display = "inline";
        
      }else if (textoEncriptado !== "") {
       // alert("El texto encriptado es: " + textoEncriptado);
        
        document.getElementById("muñeco").style.display = "none"; //ocultar imagen ok
        asignarTextoElemento("respuesta", textoEncriptado );//rta 0k
        asignarTextoElemento("mensaje", " Texto encriptado con exito");
    
       document.getElementById("ingrese_texto").style.display = "none"; //ocultar texto"
       document.getElementById("boton_copiar").style.display = "block"; //mostrar boton copiar
       
      } else {
        asignarTextoElemento("mensaje", "Ningun mensaje fue<br>encontrado");
        asignarTextoElemento("respuesta", "");//limpio respuesta
        if(window.matchMedia("(min-width: 769px)").matches) {
            document.getElementById("imgLupa").style.display = "inline"; // Mostrar imagen solo en pantallas grandes
        }
      }
    }
    
    function desencriptar() {
      let textoCaja = document.getElementById("text_area").value;
      let textoDesencriptado = textoCaja
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
      if (/[A-Z]/.test(textoDesencriptado)|| /[^a-zA-Z\s]/.test(textoDesencriptado)){
        asignarTextoElemento("mensaje", "El texto contiene letras mayúsculas o caracter invalido");
        document.getElementById("p_ingrese_texto").style.display = "inline";
    
        
      }else if (textoDesencriptado !== "") {
     // alert("El texto desencriptado es: " + textoDesencriptado)
      document.getElementById("muñeco").style.display = "none"; //ocultar imagen ok
      asignarTextoElemento("respuesta", textoDesencriptado );//rta 0k
      asignarTextoElemento("mensaje", " Texto desencriptado con exito");
      document.getElementById("ingrese_texto").style.display = "none"; //ocultar texto"
      document.getElementById("boton_copiar").style.display = "block"; //mostrar bot
        
      }  else {
        asignarTextoElemento("mensaje", "Ningun mensaje fue<br>encontrado");
        asignarTextoElemento("respuesta", "");//limpio respuesta
        if(window.matchMedia("(min-width: 769px)").matches) {
            document.getElementById("imgLupa").style.display = "inline"; // Mostrar imagen solo en pantallas grandes
        }
      }
    }
    
    
    function copiar_texto() {
      // Obtener el elemento del párrafo
      let elemento = document.getElementById("respuesta");
    
      // Obtener el texto del párrafo
      let texto = elemento.textContent;
    
      // Copiar el texto al portapapeles
      navigator.clipboard.writeText(texto);
    
      alert("Texto copiado al portapapeles: " + texto);
      document.getElementById("text_area").value = ""; //limpio el textarea
      asignarTextoElemento("respuesta", "");//limpio respuesta
    }