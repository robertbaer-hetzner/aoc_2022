var items = [];
var points2 = 0;

function strategyGuide2(turn){
  if (turn[1] == "X" && turn[0] == "A"){points2 = points2 + 3; }
  if (turn[1] == "X" && turn[0] == "B"){points2 = points2 + 1; }
  if (turn[1] == "X" && turn[0] == "C"){points2 = points2 + 2; }
  
  if (turn[1] == "Y" && turn[0] == "A"){points2 = points2 + 4; }
  if (turn[1] == "Y" && turn[0] == "B"){points2 = points2 + 5; }
  if (turn[1] == "Y" && turn[0] == "C"){points2 = points2 + 6; }

  if (turn[1] == "Z" && turn[0] == "A"){points2 = points2 + 8; }
  if (turn[1] == "Z" && turn[0] == "B"){points2 = points2 + 9; }
  if (turn[1] == "Z" && turn[0] == "C"){points2 = points2 + 7; } 
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