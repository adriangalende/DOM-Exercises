window.onload = function(){

    const MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];

    var body = document.body;

    var mountains = document.getElementById("mountains");

    if(!mountains){
        let div = document.createElement("DIV");
        div.id = "mountains";
        body.appendChild(div,body.firstChild);
    }

    function createRowStructure(mountain){
        var result=document.createElement("TR");
        for(key in mountain){
            let td = document.createElement("TD")
            let td_text = document.createTextNode(mountain[key])
            td.append(td_text);
            result.append(td);
        }
        return result;
    }

    function pushMountain(mountain){
        return createRowStructure(mountain);
    }

    var table = document.createElement("TABLE")
    table.className = "table";
    MOUNTAINS.forEach(mountain=>{
        table.append(pushMountain(mountain));
    })
    body.append(table);


};