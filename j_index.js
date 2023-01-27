
/*var seleccionar = document.getElementsByName("refer").tabindex;*/

function cambia() {
    var seleccionar = document.getElementById("refer").value;
    selected()
};

function selected(seleccionar) {
    var seleccionar = document.getElementById("refer").value;

    if(seleccionar === '1') {
        document.getElementById("refer1").innerHTML = "Ref: Andrea Ocampo, andrea.ocampo@segulatech.com"
    } else { 
        if(seleccionar === '0') {
            document.getElementById("refer1").innerHTML = "Ref:"
        }
        else {
            document.getElementById("refer1").innerHTML = "Ref: Juan Carlos Tesoro, jc.tesoro@ejemplo.com"
        }
    }
};
