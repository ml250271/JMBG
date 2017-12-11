
/*function isValidDate(value) {
    var dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}*/

/*var jmbgInput = document.getElementById("jmbgInput");
var ValueJMBG = jmbgInput.value;*/
var jmbgInput = document.getElementById("jmbgInput");
function getNumbers() {
var jmbgInput = document.getElementById("jmbgInput");
var ValueJMBG = jmbgInput.value;
var array = ValueJMBG.split("");
console.log(array);
    if (isThirteen) {
        var a1 = array[0];
        var a2 = array[1];
        var a3 = array[2];
        var a4 = array[3];
        var a5 = array[4];
        var a6 = array[5];
        var a7 = array[6];
        var a8= array[7];
        var a9 = array[8];
        var a10 = array[9];
        var a11 = array[10];
        var a12 = array[11];
        var a13 = array[12];
        var k;
         
        s = 7*a1 + 6*a2 + 5*a3 + 4*a4 + 3*a5 + 2*a6 + 7*a7 + 6*a8 + 5*a9 + 4*a10 + 3*a11 + 2*a12 ;         
        k = 11 - s%11;
        console.log(s,k);
        
        if ( a13 == k) {
          document.getElementById("rezultat").innerHTML = "Kontrolni broj je validan." 
            
        }
        else {
          document.getElementById("rezultat").innerHTML = "Kontrolni broj nije validan."   
        }
        
        
        
    }
    else {
        document.getElementById("rezultat").innerHTML = "JMBG treba da ima 13 cifara."
    }
}





function isThirteen() {
    var ValueJMBG = jmbgInput.value;
    if ( ValueJMBG.length === 13) {
        console.log("13 cifara");
            
            } 

    console.log(ValueJMBG);
    
 }







 

