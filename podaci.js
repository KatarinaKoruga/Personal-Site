
function provjera() {
    var uzorak_ime = document.querySelector("#ime").value;
    var uzorak_prezime = document.querySelector("#prezime").value;
    var uzorak_email = document.querySelector("#email").value;
    var uzorak_lozinka = document.querySelector("#lozinka").value;
    var uzorak_potvrdalozinka = document.querySelector("#potvrdalozinka").value;
    var provjera = true;

if( uzorak_ime === "" || uzorak_ime === null) {
    document.getElementById("poruka").innerHTML
    = "Niste unijeli Vaše ime"
    return false;
}
 else { provjera=true; }

if( uzorak_prezime === "" || uzorak_prezime === null) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML
    = "Niste unijeli Vaše prezime"
    return false;
}
 else { provjera=true; }

if( uzorak_email === "" || uzorak_email === null) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML
    = "Niste unijeli Vašu e-mail adresu"
    return false;
}
 else { provjera=true; }
//provjera da li mail sadrzi @
if(uzorak_email.indexOf("@") < 0) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML
    = "Vaša adresa nije ispravno unijeta"
    return false;
}

//provjerava da li mail sadrzi .
if(uzorak_email.indexOf(".") < 0) {
    document.getElementById("poruka2").innerHTML
    = "Vaša adresa nije ispravno unijeta"
    return false;
}

if( uzorak_lozinka === "" || uzorak_lozinka === null) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML= ""
    document.getElementById("poruka3").innerHTML
    = "Niste unijeli Vašu lozinku"
    return false;
}
 else { provjera=true; }
if( uzorak_potvrdalozinka === "" || uzorak_potvrdalozinka === null) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML= ""
    document.getElementById("poruka3").innerHTML= ""
    document.getElementById("poruka4").innerHTML
    = "Niste potvrdili Vašu lozinku"
    return false;
}
 else { provjera=true; }

//provjerava da li su sifre iste
if (uzorak_lozinka === uzorak_potvrdalozinka) {
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML= ""
    document.getElementById("poruka3").innerHTML= ""
    document.getElementById("poruka4").innerHTML= ""
    return true;
}
else{
    document.getElementById("poruka").innerHTML= ""
    document.getElementById("poruka1").innerHTML= ""
    document.getElementById("poruka2").innerHTML= ""
    document.getElementById("poruka3").innerHTML= ""
    document.getElementById("poruka4").innerHTML
    = "Niste unijeli identične lozinke"
    return false;
}

if(provjera==true )  {
    
alert('Poslali ste Vašu formu!');
var date = new Date();
sessionStorage.setItem("vrijeme", date);
sessionStorage.setItem('email',document.getElementById("email").value);
window.open("cuvanje.html");  
    }
}
