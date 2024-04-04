//primitivniiiiiiiiiii tipovi
var godine = 22;
//i don't know about you, but I'm feeling 22!
//stringgg
var ime = "Nina";
//boolean :>
var studira = true;
//~~~~~~~~~~~~~~~~KOMPLEKSNIIIIIIIIIIIII TIPOVI~~~~~~~~~~~~~~~~
//          1.  niz!                  //
var predmeti = ["car", "carica", "princ", "princeza", "vitez"];
//niz INTEGERA
var ocene = [7, 8, 9, 10];
//          2. TUPLES :<             //
var ntorka = ["Oskar", 1996];
//          3. ENUMm :<<<<<<<<       //
var Modul;
(function (Modul) {
    Modul[Modul["TEPOS"] = 0] = "TEPOS";
    Modul[Modul["SI"] = 1] = "SI";
    Modul[Modul["IS"] = 2] = "IS";
    Modul[Modul["II"] = 3] = "II";
    Modul[Modul["PA"] = 4] = "PA";
    Modul[Modul["IT"] = 5] = "IT";
})(Modul || (Modul = {}));
var konkretniModul = Modul.TEPOS;
//            4 .     O B J E K T I              //
var student = {
    ime: "Nina",
    godine: 20,
    studira: true
};
//            5. UNIJA TIPOVA                 //
var brojIliString = 10;
//            6. Any tip                        //
var biloSta = "Ovo moze bit bilo koji string";
//          7. VOID :( </3                      //
function sayHello() {
    console.log("hellooooooooooooooo woooooooooorld");
}
//         8. null i undefined vrednost         //
var n = null;
var u = undefined;
//          9. Type Assertions                  //
var nekaVrednost = "Ovo je stringngng";
var duzinaStringa = nekaVrednost.length;
//ISPISUJEMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(ntorka);
console.log(konkretniModul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(nekaVrednost);
console.log(duzinaStringa);
sayHello();
