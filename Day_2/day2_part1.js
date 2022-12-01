
var items = [];
var sumarray = [];
function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    var caloriesSum = 0;
    items.forEach(element => {
      if (element == "") { sumarray.push(caloriesSum); caloriesSum = 0; }
      else {caloriesSum = caloriesSum + parseInt(element);}
    });
    
    document.getElementById("box2").innerHTML += "The Maximum of Caloriens from one elf is: " + Math.max.apply(Math, sumarray) + "\n\n";
    return false;
  }