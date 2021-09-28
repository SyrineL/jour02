// 01
var integer = 102
console.log(integer)
var float = 13.9
console.log(float)

//var integer = 102
//var float = 13.9
//console.log(integer,float)

//02
var basic = 34
console.log(basic)
console.log(basic.lenght)
basic = basic.toString();
console.log(basic)

//var basic=34
//var stringified= basic.toString
//console.log(typeof stringified)
//console.log(stringified)

//03
var num = 1.5
var rounded = 1.5

console.log(Math.round(num))
//var num =1.5
//var rounded = Math:round(num)
//console.log(rounded)

//04
var test = 12 
var bis = 5
console.log(test + bis)
var test = 12 
var bis = 5
console.log(test - bis)
var test = 12 
var bis = 5
console.log(test * bis)
var test = 12 
var bis = 5
console.log(test / bis)
var test = 12 
var bis = 5
console.log(test ** bis)
var test = 12 
var bis = 5
console.log(test % bis)

//05
var test = 143
var bis = 219
console.log(test > bis)
var test = 143
var bis = 219
console.log(test < bis)
var test = 143
var bis = 219
console.log(test >= bis)
var test = 143
var bis = 219
console.log(test <= bis)
var test = 143
var bis = 219
console.log(test == bis)
var test = 143
var bis = 219
console.log(test === bis)
var test = 143
var bis = 219
console.log(test != bis)
var test = 143
var bis = 219
console.log(test !== bis)

//06 - Vérifier si le score est supérieur ou égal à la limite :
	//	- Ok good !
	//	- Oh nooo...
var limit = 50
var score = 64
if (score >= limit) {  
console.log("ok good");
} else {  
console.log("nooo ");
}  

//07

//var testLenght = "I'm very long !"
//console.log(testLenght.length)


var password = "azerty"

if (password.length > 5) {  
    console.log("secure");
    } 



//08

//- Combinez les deux conditions précedents (exercices 6 et 7)
//- Afficher "Everything is good" si les deux conditions sont vraies
//- Afficher "Something is good" si une des deux conditions est vraie
//- Afficher "Nothing is good" si aucune des deux conditions n'est vraie

if (score >= limit && password.length > 5) {
console.log("good")
} else if (score >= limit || password.length > 5) {
    console.log("cool good")
} else {
    console.log("Not good")
}
