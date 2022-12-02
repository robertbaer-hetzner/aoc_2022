
var items = [];
function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/).map(function(e){ return e.split(" ");});
    var points = 0;
    /*
    A = Rock
    B = Paper
    C = Scissor

    X = Rock 1
    Y = Paper 2
    Z = Scissor 3

    Win = 6 P
    Draw = 3 P 
    Lose = 0 P
    */
    for (var counter1 = 0; counter1 < items.length; counter1++) {
      if (items[counter1][0] == "A" && items[counter1][1] == "X"){points = points + 4; }
      if (items[counter1][0] == "A" && items[counter1][1] == "Y"){points = points + 8; }
      if (items[counter1][0] == "A" && items[counter1][1] == "Z"){points = points + 3; }
      
      if (items[counter1][0] == "B" && items[counter1][1] == "X"){points = points + 1; }
      if (items[counter1][0] == "B" && items[counter1][1] == "Y"){points = points + 5; }
      if (items[counter1][0] == "B" && items[counter1][1] == "Z"){points = points + 9; }

      if (items[counter1][0] == "C" && items[counter1][1] == "X"){points = points + 7; }
      if (items[counter1][0] == "C" && items[counter1][1] == "Y"){points = points + 2; }
      if (items[counter1][0] == "C" && items[counter1][1] == "Z"){points = points + 6; } 
      console.log(points);
    }  
    document.getElementById("box2").innerHTML += "If everything goes exactly according to the strategy guide: " + points + "\n\n";
    return false;
  }