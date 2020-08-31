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

var punteggio = 0;

var difficolta = parseInt(prompt("Inserisci una difficolta 0(facile) 1(normale) 2(difficile)"));

while(difficolta < 1 || difficolta > 2){
  alert("Hai inserito un numero sbagliato :(");
  difficolta = parseInt(prompt("Inserisci una difficolta 0(facile) 1(normale) 2(difficile)"));
}

switch(difficolta){
  case 0:
          //Genero i numeri
          var mine = generaNumeri(numeroMine,1,100);
          console.log("[DEBUG] ---> controllo array " + mine.sort(function(a,b){return a-b;}));
          //Chiedo all'untente di inserire 84 un numero a suo piacimento
          for(var i = 0 ; i < 84; i ++, punteggio ++){
            var numeroInserito = -1;
            //Chiedo il numero e controllo che sia del range corretto
            while(numeroInserito < 1 || numeroInserito > 100){
              numeroInserito = parseInt(prompt("Inserire un numero compreso tra 1 e 100"));
            }

            //Tramite questa funzione verifico se il giocatore effettua un punto o perde
            if(isInArray(mine,numeroInserito) == true){
              console.log("+++++++++++++++++++++++++++++++ HAI PERSOOOOOOO +++++++++++++++++++++++++++++++");
              break;
            }
          }
          console.log("+++++++++++++++++++++++++++++++ YOU WON +++++++++++++++++++++++++++++++");
          break;

  case 1:
          //Genero i numeri
          var mine = generaNumeri(numeroMine,1,80);
          console.log("[DEBUG] ---> controllo array " + mine.sort(function(a,b){return a-b;}));
          //Chiedo all'untente di inserire 84 un numero a suo piacimento
          for(var i = 0 ; i < (80-16); i ++, punteggio ++){
            var numeroInserito = -1;
            //Chiedo il numero e controllo che sia del range corretto
            while(numeroInserito < 1 || numeroInserito > 100){
              numeroInserito = parseInt(prompt("Inserire un numero compreso tra 1 e 100"));
            }

            //Tramite questa funzione verifico se il giocatore effettua un punto o perde
            if(isInArray(mine,numeroInserito) == true){
              console.log("+++++++++++++++++++++++++++++++ HAI PERSOOOOOOO +++++++++++++++++++++++++++++++");
              break;
            }
          }
          console.log("+++++++++++++++++++++++++++++++ YOU WON +++++++++++++++++++++++++++++++");
          break;

  case 2:
          //Genero i numeri
          var mine = generaNumeri(numeroMine,1,50);
          console.log("[DEBUG] ---> controllo array " + mine.sort(function(a,b){return a-b;}));
          //Chiedo all'untente di inserire 84 un numero a suo piacimento
          for(var i = 0 ; i < (50-16); i ++, punteggio ++){
            var numeroInserito = -1;
            //Chiedo il numero e controllo che sia del range corretto
            while(numeroInserito < 1 || numeroInserito > 100){
              numeroInserito = parseInt(prompt("Inserire un numero compreso tra 1 e 100"));
            }

            //Tramite questa funzione verifico se il giocatore effettua un punto o perde
            if(isInArray(mine,numeroInserito) == true){
              console.log("+++++++++++++++++++++++++++++++ HAI PERSOOOOOOO +++++++++++++++++++++++++++++++");
              break;
            }
          }
          console.log("+++++++++++++++++++++++++++++++ YOU WON +++++++++++++++++++++++++++++++");
          break;
}

console.log("SCORE: " + punteggio);
