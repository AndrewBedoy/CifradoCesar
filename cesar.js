
function encrypt() {
    var text = document.getElementById("text").value.toUpperCase();
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";
    //1
    
    if (shift < 0 || shift > 26 || isNaN(shift)) {
        document.getElementById("result").value = "Error: Por favor, ingrese un valor de módulo válido (entre 0 y 26).";
        return;
    }
    
    var letras = [];
    for (var i = 65; i <= 90; i++) {
        letras.push(i);
    }
    letras.push(209); //2 
    
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        
        if (charCode === 32) { //3 
            result += " ";
            continue; //4 
        }
        
        var index = letras.indexOf(charCode);
        
        if (index !== -1) { //5 
            var encryptedIndex = (index + shift) % letras.length;
            result += String.fromCharCode(letras[encryptedIndex]);
        } else {
            result += text.charAt(i); //6   
        }
    }
    document.getElementById("result").value = result;
}

function decrypt() {
    var text = document.getElementById("text").value.toUpperCase();
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";
    
    //7 
    if (shift < 0 || shift > 26 || isNaN(shift)) {
        document.getElementById("result").value = "Error: Por favor, ingrese un valor de módulo válido (entre 0 y 26).";
        return;
    }
    
    var letras = [];
    for (var i = 65; i <= 90; i++) {
        letras.push(i);
    }
    letras.push(209); //8 
    
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        
        if (charCode === 32) { //9 
            result += " ";
            continue; //10 
        }
        
        var index = letras.indexOf(charCode);
        
        if (index !== -1) { //11 
            var decryptedIndex = (index - shift + letras.length) % letras.length;
            result += String.fromCharCode(letras[decryptedIndex]);
        } else {
            result += text.charAt(i); //12    
        }
    }
    document.getElementById("result").value = result;
}

