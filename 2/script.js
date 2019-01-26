window.onload = function(){

    var body = document.body;

    body.querySelectorAll("a").forEach(function(elemento,indice){
        elemento.href = elemento.href.replace("http://","https://");
        if(elemento.className == "importante"){
            elemento.setAttribute("name","importante"+indice);
        }
    })

    body.querySelectorAll("p").forEach(paragrafo=>{
        paragrafo.className = paragrafo.className == "importante"?"resaltar":"normal";
    });

};