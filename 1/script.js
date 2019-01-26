window.onload = function(){
    /**
     *
     */
    var body = document.body;

    var bloque_informacion = init();

/**
 * Buscamos si existe un bloque con el id
 * Si no existe lo crea y lo añade justo encima del body de la página
 */
function init(){
    var bloque_informacion = document.getElementById('informacion');

    if(!bloque_informacion){
        bloque_informacion = document.createElement('DIV');
        bloque_informacion.id = 'informacion';
        body.insertBefore(bloque_informacion, body.firstChild);
    }
    return bloque_informacion;
}

function addTexto(texto){
    let p = document.createElement('h3');
    let texto_p = document.createTextNode(texto);
    p.append(texto_p);
    return p;
}


var elemento_buscado = function(elemento){
    return body.querySelectorAll(elemento);
}

function contadorCosas(){

}


//Número de enlaces
    var numero_enlaces = elemento_buscado("a").length;
    bloque_informacion.append(addTexto("Hay "+  numero_enlaces + " enlaces"));
//Número parágrafos (p)
    bloque_informacion.append(addTexto("Hay "+ elemento_buscado("p").length + " parágrafos"));
//Enlace al que apunta el penúltimo enlace
    bloque_informacion.append(addTexto("La dirección al que apúnta el penúltimo enlace --> " + elemento_buscado("a")[numero_enlaces-2].href))
//Enlace al que apunta el último enlace
    bloque_informacion.append(addTexto("La dirección al que apúnta el último enlace --> " + elemento_buscado("a")[numero_enlaces-1].href))


//Número de enlaces que apuntan a http://www.jurassicpark.com
    var contador = 0;
    elemento_buscado("a").forEach(elemento =>{
        contador += elemento.href.includes("http://www.jurassicpark.com")? 1:0;
    });

    bloque_informacion.append(addTexto("Hay " + contador + " enlace/s que apuntan a http://www.jurassicpark.com"));

//Número de parágrafos que contienen a
    contador = 0;
    elemento_buscado("p").forEach(elemento=>{
        contador += elemento.getElementsByTagName('a').length;
    });


    bloque_informacion.append(addTexto("Hay " + contador + " párrafos que contienen a"));

};