window.onload = function(){

    function mezclarArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function addItem(item,indice_imagenes){
        let h3 = document.createElement("H3");
        let h3_text = document.createTextNode(item);
        h3.append(h3_text);
        indice_imagenes.append(h3);
    }


    var indice_imagenes = document.querySelectorAll("DIV").forEach(div => {
        if(div.id == "indice_imagenes"){
            return div;
        }
    })

    if(!indice_imagenes){
        indice_imagenes = document.createElement("DIV");
        indice_imagenes.id = "indice_imagenes";
        document.body.appendChild(indice_imagenes,document.body.firstChild);
    }

    var imagenes = document.querySelectorAll("img");


    var ul = document.createElement("UL");
    indice_imagenes.append(ul);

    array_alt_imagenes = [] ;
    imagenes.forEach(imagen => { array_alt_imagenes.push(imagen.alt) });

    imagenes = mezclarArray(array_alt_imagenes);

    imagenes.forEach(imagen => {
        let li = document.createElement("LI");
        addItem(imagen, li);
        ul.append(li);
    });



};