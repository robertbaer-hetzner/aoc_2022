var items = [];
var points = 0;
function splitMiddle(str){

  const result = [str.slice(0, str.length / 2), str.slice(str.length / 2)];
  return result;

}

function compareStrings(string){
 let resultarray = [];
 let lengthofString = string[0].length; 
 let string1 = string[0].split('');
 let string2 = string[1].split('');

  for( i=0; i<lengthofString; i++) {
    for( j=0; j<lengthofString; j++) {
      if (string1[i] == string2[j]) { if (!(resultarray.includes(string2[j]))){resultarray.push(string2[j])};};
    }
  }
  resultarray.map(getPriorities);
}

function getPriorities(letter){
  switch(letter){
    case "A": 
      points = points + 27;
      break;
    case "B": 
      points = points + 28;
      break;
    case "C": 
      points = points + 29;
      break;
    case "D":
      points = points + 30;
      break;
    case "E":
      points = points + 31;
      break;
    case "F":
      points = points + 32;
      break;
    case "G":
      points = points + 33;
      break;
    case "H":
      points = points + 34;
      break;
    case "I":
      points = points + 35;
      break;
    case "J":
      points = points + 36;
      break;
    case "K":
      points = points + 37;
      break;
    case "L":
      points = points + 38;
      break;
    case "M":
      points = points + 39;
      break;
    case "N":
      points = points + 40;
      break;
    case "O":
      points = points + 41;
      break;
    case "P":
      points = points + 42;
      break;
    case "Q":
      points = points + 43;
      break;
    case "R":
      points = points + 44;
      break;
    case "S":
      points = points + 45;
      break;
    case "T":
      points = points + 46;
      break;
    case "U":
      points = points + 47;
      break;
    case "V":
      points = points + 48;
      break;
    case "W":
      points = points + 49;
      break;
    case "X":
      points = points + 50;
      break;
    case "Y":
      points = points + 51;
      break;
    case "Z":
      points = points + 52;
      break;
    case "a":
      points = points + 1;
      break;
    case "b":
      points = points + 2;
      break;
    case "c":
      points = points + 3;
      break;
    case "d":
      points = points + 4;
      break;
    case "e":
      points = points + 5;
      break;
    case "f":
      points = points + 6;
      break;
    case "g":
      points = points + 7;
      break;
    case "h":
      points = points + 8;
      break;
    case "i":
      points = points + 9;
      break;
    case "j":
      points = points + 10;
      break;
    case "k":
      points = points + 11;
      break;
    case "l":
      points = points + 12;
      break;
    case "m":
      points = points + 13;
      break;
    case "n":
      points = points + 14;
      break;
    case "o":
      points = points + 15;
      break;
    case "p":
      points = points + 16;
      break;
    case "q":
      points = points + 17;
      break;
    case "r":
      points = points + 18;
      break;
    case "s":
      points = points + 19;
      break;
    case "t":
      points = points + 20;
      break;
    case "u":
      points = points + 21;
      break;
    case "v":
      points = points + 22;
      break;
    case "w":
      points = points + 23;
      break;
    case "x":
      points = points + 24;
      break;
    case "y":
      points = points + 25;
      break;
    case "z":
      points = points + 26;
      break;

  }
}



function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/).map(splitMiddle);
    items.map(compareStrings);
    /*
   Lowercase item types a through z have priorities 1 through 26.
   Uppercase item types A through Z have priorities 27 through 52.
    */

    document.getElementById("box2").innerHTML += "Summary of every Elfs rucksack points: " + points + "\n\n";
    return false;
  }