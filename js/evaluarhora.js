const hora = new Date();
console.log(hora.getHours());

let hola = (prompt('Dime hola, mugroso'));
console.log(hola)

if(hora.getHours() <= 13 || hora.getHours() >= 18 ){
    document.write("Buenas tardes :)")

} if (hora.getHours() <= 18 || hora.getHours() >=23 ) {
    document.write("Buenas, ya mero? ")
} if (hora.getHours() <= 23 || hora.getHours() >=6) {
    document.write("ya vete a dormir mugroso ")
} if (hora.getHours() <= 6 || hora.getHours() >=8) {
    document.write("trabajando duro o durando en el trabajo?")
} if (hora.getHours() <= 8 || hora.getHours() >=13) {
    document.write("Buenos dias bb")
}