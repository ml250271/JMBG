/*
var day;
var month;
var year;
var region;
var uniqueW;
var uniqueM;
var control;
var DDMMGGGRRBBBK = [];
var forformula = [A,B,C,D,E,F,G,H,I,J,K,L,,M];
*/

var jmbgInput =  document.getElementById("jmbgInput");

function isThirteen() {
    var jmbgVal = jmbgInput.value;
    console.log(jmbgVal);
    if ( jmbgVal.length === 13) {
        if ( day > 0 && day < 31 ) {
            console.log(day + "day is valid")
            
        } 
        else {
              document.getElementById("rezultat").innerHTML = "Datum nije validan";
        }
        
    } else {
        document.getElementById("rezultat").innerHTML = "JMBG treba da ima 13 cifara."
        
    }
    
 }


 

