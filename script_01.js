"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */
let arr;
arr =[];


output(arr)

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","das","krasse","Miez","Miau"))
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT =".";
    let str =   word1 + GAP + 
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 + 
                PUNCT;
    
    return str;  
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


