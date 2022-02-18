var Numero = 20
for (let i = 0; i <= Numero; i++){
    console.log(i);
}
console.log('------------------------------------------------')
var Numero = 20
for (let i = 0; i <= Numero; i++){
    if(i % 2 === 0){
    console.log(i);}
}
console.log('------------------------------------------------')
var Numero = 20
for (let i = 0; i <= Numero; i++){
    if(i % 2 !== 0){
    console.log(i);}
}
console.log('------------------------------------------------')
var Numero = 100
for (let i = 0; i <= Numero; i+=5){
    console.log(i);
}
console.log('------------------------------------------------')
function squareNumbers() {
    var retorno = [];
    for(let i = 1; i <= 10; i++){
    retorno.push(i**2);   
    } 
return retorno;} 
console.log(squareNumbers());
console.log('------------------------------------------------')
for (let i = 20; i >= 1; i--){
    console.log(i);
}
console.log('------------------------------------------------')

for (let i = 20; i >= 1; i--){
    if(i % 2 === 0){
    console.log(i);}
}
console.log('------------------------------------------------')
for (let i = 20; i >= 1; i--){
    if(i % 2 !== 0){
    console.log(i);}
}

console.log('------------------------------------------------')
function squareNumbers() {
    var retorno = [];
    for(let i = 10; i >= 1; i--){
    retorno.push(i**2);   
    } 
return retorno;} 
console.log(squareNumbers());