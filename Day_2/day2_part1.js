var items = [];
var points = 0;

function strategyGuide1(turn) {

  if (turn[0] == "A") {
    switch(turn[1]){
      case "X": 
        points = points + 4;
        break;
      case "Y": 
        points = points + 8;
        break;
      case "Z": 
        points = points + 3;
        break;
    }
  }
  
  if (turn[0] == "B") {
    switch(turn[1]){
      case "X": 
        points = points + 1;
        break;
      case "Y": 
        points = points + 5;
        break;
      case "Z": 
        points = points + 9;
        break;
    }
  }

  if (turn[0] == "C") {
    switch(turn[1]){
      case "X": 
        points = points + 7;
        break;
      case "Y": 
        points = points + 2;
        break;
      case "Z": 
        points = points + 6;
        break;
    }
  }
}



function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/).map(function(e){ return e.split(" ");});
    /*
    A = Rock , B = Paper , C = Scissor
    X = Rock 1 , Y = Paper 2 , Z = Scissor 3
    Win = 6 P , Draw = 3 P , Lose = 0 P
    */
    items.map(strategyGuide1);
    document.getElementById("box2").innerHTML += "If everything goes exactly according to the strategy guide: " + points + "\n\n";
    return false;
  }