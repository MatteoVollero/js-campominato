var numeroMine = 16;


//Il computer deve generare 16 numeri casuali tra 1 e 100.
//Creo una function che genera 16 numeri casuali
function generaNumeri(numeroIterazioni, min, max){
  var mine = [];
  var numero = Math.floor((Math.random() * max) + min);
  mine.push(numero);

  //genero i numeri
  for(var i = 1 ; i < numeroIterazioni ; i ++){
    numero = Math.floor((Math.random() * max) + min);

    console.log(isInArray(mine,numero));
    while(isInArray(mine,numero) == true){
      numero = Math.floor((Math.random() * max) + min);
    }

    mine.push(numero);
  }

  return mine;
}
//Function che controlla la presenza di duplicati
function isInArray(mine,numero){

  for(var i = 0 ; i < mine.length ; i ++){
    if(mine.indexOf(numero) != -1){
      console.log("numero presente ---> " + numero);
      return true; //Vuole dire che il numero è presente
    } else {
      console.log("numero assente ---> " + numero);
      return false;//Vuole dire che non è presente
    }
  }
}

//Genero i numeri
var mine = generaNumeri(numeroMine,1,100);

console.log("[DEBUG] ---> controllo array " + mine.sort(function(a,b){return a-b;}));
