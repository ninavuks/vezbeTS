//primitivniiiiiiiiiii tipovi
let godine:number=22;
//i don't know about you, but I'm feeling 22!

//stringgg
let ime:string="Nina";


//boolean :>
let studira:boolean=true;


//~~~~~~~~~~~~~~~~KOMPLEKSNIIIIIIIIIIIII TIPOVI~~~~~~~~~~~~~~~~

//          1.  niz!                  //
let predmeti:string[]=["car", "carica", "princ", "princeza", "vitez"];

    //niz INTEGERA
    let ocene:number[]=[7,8,9,10];

//          2. TUPLES :<             //
let ntorka:[string, number]=["Oskar", 1996];

//          3. ENUMm :<<<<<<<<       //

enum Modul{
    TEPOS, //0
    SI,    //1
    IS,    //2
    II,    //...
    PA,
    IT
}

let konkretniModul:Modul=Modul.TEPOS;

//            4 .     O B J E K T I              //

let student:{ime:string, godine:number, studira:boolean} = {
    ime:"Nina", 
    godine:20, 
    studira:true
};

//            5. UNIJA TIPOVA                 //

let brojIliString:number|string=10;

//            6. Any tip                        //

let biloSta:any="Ovo moze bit bilo koji string";

//          7. VOID :( </3                      //

function sayHello():void{
    console.log("hellooooooooooooooo woooooooooorld");

}

//         8. null i undefined vrednost         //

let n:null = null;
let u:undefined=undefined;

//          9. Type Assertions                  //

let nekaVrednost:any="Ovo je stringngng";
let duzinaStringa:number=(nekaVrednost as String).length;

//ISPISUJEMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
console.log(godine,ime,studira);
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
