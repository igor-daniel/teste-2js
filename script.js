function adicionaring() {
    var ing = document.getElementById("ingredientes").Value;

    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";

    document.getElementById('lista').innerHTML = listahtml;
}