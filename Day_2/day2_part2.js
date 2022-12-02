

var items = [];
function buildarray2() {
    var points2 = 0;
    /*
    A = Rock
    B = Paper
    C = Scissor

    Rock 1
    Paper 2
    Scissor 3

    X = Lose
    Y = Draw
    Z = Win

    Win = 6 P
    Draw = 3 P 
    Lose = 0 P
    */
    for (var counter2 = 0; counter2 < items.length; counter2++) {
      if (items[counter2][1] == "X" && items[counter2][0] == "A"){points2 = points2 + 3; }
      if (items[counter2][1] == "X" && items[counter2][0] == "B"){points2 = points2 + 1; }
      if (items[counter2][1] == "X" && items[counter2][0] == "C"){points2 = points2 + 2; }
      
      if (items[counter2][1] == "Y" && items[counter2][0] == "A"){points2 = points2 + 4; }
      if (items[counter2][1] == "Y" && items[counter2][0] == "B"){points2 = points2 + 5; }
      if (items[counter2][1] == "Y" && items[counter2][0] == "C"){points2 = points2 + 6; }

      if (items[counter2][1] == "Z" && items[counter2][0] == "A"){points2 = points2 + 8; }
      if (items[counter2][1] == "Z" && items[counter2][0] == "B"){points2 = points2 + 9; }
      if (items[counter2][1] == "Z" && items[counter2][0] == "C"){points2 = points2 + 7; } 
      console.log(points2 + " " + items[counter2][0] + " " + items[counter2][1]);
    }  
    document.getElementById("box2").innerHTML += "If everything goes exactly according to the second strategy guide: " + points2 + "\n\n";
    return false;
  }