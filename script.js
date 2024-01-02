
    const formulario = document.querySelector(".contato-box");
    const mascara = document.querySelector(".mascara-video")
    

    function cliqueinoBotao() {
        formulario.style.left = "570px"
        mascara.style.visibility = "visible"
    }
   
    function sumirFormulario(){
        formulario.style.left = "-220px"
        mascara.style.visibility = "hidden"
    }

