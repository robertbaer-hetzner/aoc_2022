
var items = [];
var sumarray = [];
var topThree = 0;
function buildarray2() {

    for(var i = 0; i < 3; i++){
      const max = Math.max.apply(Math, sumarray);
      topThree = topThree + max;
      sumarray.splice(sumarray.indexOf(max),1);
    }

    document.getElementById("box2").innerHTML += "The Maximum of Caloriens from the top three elfs are: " + topThree;
    return false;
  }