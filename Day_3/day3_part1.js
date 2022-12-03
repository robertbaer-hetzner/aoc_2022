let items = [];
let points = 0;
function splitMiddle(str){

  const result = [str.slice(0, str.length / 2), str.slice(str.length / 2)];
  return result;

}

function compareStrings(string){
  let resultarray = [];
  let string1 = string[0].split('');
  let string2 = string[1].split('');

  for( i=0; i<string[0].length; i++) {
    for( j=0; j<string[0].length; j++) {
      if (string1[i] == string2[j]) { if (!(resultarray.includes(string2[j]))){resultarray.push(string2[j])};};}
  }
  resultarray.map(getPriorities);
}

function getPriorities(letter){
    let numberPoints = 0;
    if (letter == letter.toUpperCase()) {numberPoints = letter.charCodeAt(0) - 38;}
    else {numberPoints = letter.charCodeAt(0) - 96;}
    points = points + numberPoints;
     /*
     Lowercase item types a through z have priorities 1 through 26. "charCodeAt(0) - 96 = 1"
     Uppercase item types A through Z have priorities 27 through 52.
     */
}


function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/).map(splitMiddle);
    items.map(compareStrings);
    document.getElementById("box2").innerHTML += "Summary of every Elfs rucksack points: " + points + "\n\n";
    return false;
  }