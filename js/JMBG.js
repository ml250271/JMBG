/*var day1;
var day2;
var month1;
var month2;
var year1;
var year2;
var year3;
var region1;
var region2;
var uniqueW1;
var uniqueW2;
var uniqueW3;
var uniqueM1;
var uniqueM2;
var uniqueM3;
var control;*/
/*function isValidDate(value) {
    var dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}*/

var jmbgInput = document.getElementById("jmbgInput");
var ValueJMBG = jmbgInput.value;

function getNumbers() {
var array = ValueJMBG.split("");
console.log(array);
}


function isThirteen() {
    
console.log(ValueJMBG);
    if ( ValueJMBG.length === 13) {
        console.log("13 cifara");
            
            } 
    else {
        document.getElementById("rezultat").innerHTML = "JMBG treba da ima 13 cifara."
        
    }
    
 }



 

