/**
 * Created by Agus on 6/5/2017.
 */
function sumarNumeros() {

}


function evaluarValor(valor, id_elemento) {
    valor = valor.replace (",", '.')

 if(isNaN(valor))
     alert("el valor no es numerico");
    document.getElementById(id_elemento).value = "";
}
function mostrar_ocultar(opcion) {
    if (opcion == 'mostrarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'block';
        
    }
    if (opcion == 'ocultarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }

function conversion_grados_radianes (nombre_unidad, valor_unidad) {
    var varRadianes, varGrados;
    if (nombre_unidad == 'grados'){
        varGrados = valor_unidad;
        varRadianes = Math.PI/180*valor_unidad;
                  }
    if (nombre_unidad == 'radianes'){
        varRadianes = valor_unidad;
        varGrados = 180/Math.PI*valor_unidad;
        
    }
    document.getElementsByName("input")[0].value = varRadianes;
    document.getElementsByName("input")[1].value = varGrados;
    
}
    
/**
 * Conversión de unidades
 * @method conversordeunidades
 * @param nombre_unidad
 * @param valor_unidad
 * @return Valor que retorna
 */


function conversordeunidades (nombre_unidad, valor_unidad) {
    var metro, pie, pulgada, yarda;
    
    valor_unidad = valor_unidad.replace(",", ".");

    if(isNaN(valor_unidad)){
        alert("El valor ingresado es invalido");
        metro = "";
        pie = pulgada = yarda = null;

    }
    else{

        if (nombre_unidad == 'metro'){
        pie = valor_unidad*3.28084;
        pulgada = valor_unidad*39.3701;
        yarda = valor_unidad*1.09361;
        metro = valor_unidad;
    }


    if (nombre_unidad == 'pie'){
        pie = valor_unidad;
        metro = valor_unidad/3.28084;
        pulgada = metro*39.3701;
            yarda = metro*1.09361;
    }
    if (nombre_unidad == 'pulgada'){
        pulgada = valor_unidad;
        metro = valor_unidad/39.3701;
        pie = metro*3.28084;
        yarda = metro*1.09361;
    }
    if (nombre_unidad == 'yarda'){
        yarda = valor_unidad;
        pie = valor_unidad*3.28084;
        pulgada = valor_unidad*39.3701;
        metro = valor_unidad/1.09361;
    }

    document.getElementById("pie").value = pie;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
    document.getElementById("metro").value = metro;

        }
    } }