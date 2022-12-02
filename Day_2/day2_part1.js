var items = [];
var points = 0;

function strategyGuide1(turn) {
  if (turn[0] == "A" && turn[1] == "X"){points = points + 4; }
  if (turn[0] == "A" && turn[1] == "Y"){points = points + 8; }
  if (turn[0] == "A" && turn[1] == "Z"){points = points + 3; }
  
  if (turn[0] == "B" && turn[1] == "X"){points = points + 1; }
  if (turn[0] == "B" && turn[1] == "Y"){points = points + 5; }
  if (turn[0] == "B" && turn[1] == "Z"){points = points + 9; }

  if (turn[0] == "C" && turn[1] == "X"){points = points + 7; }
  if (turn[0] == "C" && turn[1] == "Y"){points = points + 2; }
  if (turn[0] == "C" && turn[1] == "Z"){points = points + 6; }
};

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