function teste() {
    var x = prompt("Digite um número");
     
    if (x < 10) {
        alert('É menor que 10.')
    } else {
        alert("É maior que 10.")
    }
}
//loop
var y = 0;
while(y < 10){
    document.write("loading " + y + "<br/>");
    y++;
}