var items = [];
var points2 = 0;

function strategyGuide2(turn){
  if (turn[1] == "X") {
    switch(turn[0]){
      case "A": 
        points2 = points2 + 3;
        break;
      case "B": 
        points2 = points2 + 1;
        break;
      case "C": 
        points2 = points2 + 2;
        break;
    }
  }
  
  if (turn[1] == "Y") {
    switch(turn[0]){
      case "A": 
        points2 = points2 + 4;
        break;
      case "B": 
        points2 = points2 + 5;
        break;
      case "C": 
        points2 = points2 + 6;
        break;
    }
  }

  if (turn[1] == "Z") {
    switch(turn[0]){
      case "A": 
        points2 = points2 + 8;
        break;
      case "B": 
        points2 = points2 + 9;
        break;
      case "C": 
        points2 = points2 + 7;
        break;
    }
  }
}

function buildarray2() {
    /*
    A = Rock , B = Paper , C = Scissor
    X = Rock 1 , Y = Paper 2 , Z = Scissor 3
    Win = 6 P , Draw = 3 P , Lose = 0 P
    */ 
    items.map(strategyGuide2);
    document.getElementById("box2").innerHTML += "If everything goes exactly according to the second strategy guide: " + points2 + "\n\n";
    return false;
  }