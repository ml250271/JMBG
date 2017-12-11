var jmbgInput = document.getElementById("jmbgInput");


function getNumbers() {
/*var jmbgInput = document.getElementById("jmbgInput");*/
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
            document.getElementById("validacija").innerHTML = "Kontrolni broj je validan." ;
            makeDate();
            determinSex();
            determinRegion();            
            
            
        }
        else {
          document.getElementById("validacija").innerHTML = "Kontrolni broj nije validan." ;  
            
        }
        
        
        
    }
    else {
        document.getElementById("validacija").innerHTML = "JMBG treba da ima 13 cifara." ;
    }
}





function isThirteen() {
    var ValueJMBG = jmbgInput.value;
    if ( ValueJMBG.length === 13) {
        console.log("13 cifara");
            
            } 

    console.log(ValueJMBG);
    
 }

function makeDate() {
    
        var jmbgInput = document.getElementById("jmbgInput");
        var ValueJMBG = jmbgInput.value;
        var array = ValueJMBG.split("");
        var a1 = array[0];
        var a2 = array[1];
        var a3 = array[2];
        var a4 = array[3];
        var a5 = array[4];
        var a6 = array[5];
        var a7 = array[6];
    
        var birthDate = a1+a2+ "." + a3+a4 + "." + "1" + a5+a6+a7 + "." ; 
         console.log(birthDate);
    
    if ( a5 == 0) {
       var birthDate = a1+a2+ "." + a3+a4 + "." + "2" + a5+a6+a7 + "." ; 
        console.log(birthDate);
    }
  document.getElementById("datum_rodjenja").innerHTML ="Datum rodjenja: " + birthDate;   
}

function determinSex() {
        var jmbgInput = document.getElementById("jmbgInput");
        var ValueJMBG = jmbgInput.value;
        var array = ValueJMBG.split("");
        var a10 = array[9];
        var pol;
        if (a10<5) {
           console.log("muski");
            pol = "muski";
       }
    
        else {
            console.log("zenski");
            pol = "zenski";
        }
   document.getElementById("pol").innerHTML ="Pol: " + pol;
}

function determinRegion() {
        var ValueJMBG = jmbgInput.value;
        var array = ValueJMBG.split("");
        var a8= array[7];
        var a9 = array[8];
        var RegionBr = a8 + a9;
        
    console.log(RegionBr);
        var regija;
    switch (RegionBr) {
            
        
        case ("01"):
            regija = "stranci u BiH";
            break;
        case ("02"):
            regija = "stranci u Crnoj Gori";
            break;
        case ("03"):
            regija = "stranci u Hrvatskoj";
            break;
        case ("04"):
            regija = "stranci u Makedoniji";
            break;
        case ("05"):
            regija = "stranci u Sloveniji";
            break;
        
        case ("07"):
            regija = "stranci u Srbiji (bez pokrajina)";
            break;
        case ("08"):
            regija = "stranci u Vojvodini";
            break;
        case ("09"):
            regija = "stranci na Kosovu";
            break;
          
            
      //    10-19 – Bosna i Hercegovina  
        case ("10"):
            regija = "Banja Luka";
            break;
            
        case ("11"):
            regija = "Bihać";
            break;
            
        case ("12"):
            regija = "Doboj";
            break;
            
        case ("13"):
            regija = "Goražde";
            break;
            
        case ("14"):
            regija = "Livno";
            break;
    
        case ("15"):
            regija = "Mostar";
            break;
        
        case ("16"):
            regija = "Prijedor";
            break;
        
        case ("17"):
            regija = "Sarajevo";
            break;
        
        case ("18"):
            regija = "Tuzla";
            break;
        
        case ("19"):
            regija = "Zenica";
            break;
          
            // * 20-29 – Crna Gora
            
        case ("21"):
            regija = "Podgorica";
            break;
            
        
        case ("26"):
            regija = "Nikšić";
            break;
            
        
        case ("29"):
            regija = "Pljevlja";
            break;
            
        
            
        //    * 30-39 – Hrvatska
        case ("30"):
            regija = "Osijek, Slavonija region";
            break;
            
        case ("31"):
            regija = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
            break;
        
        case ("32"):
            regija = "Varaždin, Međimurje region";
            break;
        
        case ("33"):
            regija = "Zagreb";
            break;
        
        case ("34"):
            regija = "Karlovac";
            break;
        
        case ("35"):
            regija = "Gospić, Lika region";
            break;
        
        case ("36"):
            regija = "Rijeka, Pula, Istra and Primorje regions";
            break;
         case ("37"):
            regija = "Sisak, Banovina region";
            break;
         case ("38"):
            regija = "Split, Zadar, Dubrovnik, Dalmacija region";
            break;
         case ("39"):
            regija = "mešano";
            break;
            
           // * 41-49 – Makedonija  
                     
            case ("41"):
                regija = "Bitolj";
                break;
            case ("42"):
                regija = "Kumanovo";
                break;
            case ("43"):
                regija = "Ohrid";
                break;
            case ("44"):
                regija = "Prilep";
                break;
            case ("45"):
                regija = "Skoplje";
                break;
            case ("46"):
                regija = "Strumica";
                break;
            case ("47"):
                regija = "Tetovo";
                break;
            case ("48"):
                regija = "Veles";
                break;
            case ("49"):
                regija = "Štip";
                break;
            // * 50-59 – Slovenija (samo 50 je korišteno)
        case ("50"):
                regija = "Slovenija";
                break;
            
            // * 70-79 – Centralna Srbija
            
             
            case ("71"):
                regija = "Beograd";
             
                break;
            case ("72"):
                regija = "Šumadija i Pomoravlje";
                break;
            case ("73"):
                regija = "Niš";
                break;
            case ("74"):
                regija = "Južna Morava";
                break;
            case ("75"):
                regija = "Zaječar";
                break;
            case ("76"):
                regija = "Podunavlje";
                break;
            case ("77"):
                regija = "Podrinje i Kolubara";
                break;
            case ("78"):
                regija = "Kraljevo";
                break;
            case ("79"):
                regija = "Užice";
                break;
            
            // * 80-89 – Autonomna Pokrajina Vojvodina
            
            case ("80"):
                regija = "Novi Sad";
                break;
            case ("81"):
                regija = "Sombor";
                break;
            case ("82"):
                regija = "Subotica";
                break;
            case ("83"):
                regija = "Vojvodina";
                break;
            case ("84"):
                regija = "Vojvodina";
                break;
            case ("85"):
                regija = "Zrenjanin";
                break;
            case ("86"):
                regija = "Pančevo";
                break;
            case ("87"):
                regija = "Kikinda";
                break;
            case ("88"):
                regija = "Ruma";
                break;
            case ("89"):
                regija = "Sremska Mitrovica";
                break;
            // * 90-99 – Autonomna Pokrajina Kosovo i Metohija
            
             
            case ("91"):
                regija = "Priština";
                break;
            case ("92"):
                regija = "Kosovska Mitrovica";
                break;

            case ("93"):
                regija = "Peć";
                break;
            case ("94"):
                regija = "Đakovica";
                break;
            case ("95"):
                regija = "Prizren";
                break;
            case ("96"):
                regija = "Kosovsko Pomoravski okrug";
                break;
                 
    }
    
    console.log(regija); 
    document.getElementById("okrug").innerHTML= "Okrug: " + regija;
         

}

/*function writeRegion() {
    
    document.getElementById("ispisiRegion").innerHTML=RegionBr;
}*/




 

