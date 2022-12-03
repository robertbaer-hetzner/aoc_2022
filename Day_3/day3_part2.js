items2 = [];
resultarray2 = [];

function compareStrings2(string1,string2,string3){
  let resultarray2 = [];
  let resultarray = [];
  let comparer = 0;
  if (string2.length >= string1.length){comparer = string2.length;}
  else {comparer = string1.length;}
  for( i=0; i<comparer; i++) {
    for( j=0; j<comparer; j++) {
      if (string1[i] == string2[j]) { if (!(resultarray.includes(string2[j]))){resultarray.push(string2[j])};};
    }
  }
  for( i=0; i<string3.length; i++) {
  if(resultarray.includes(string3[i])){resultarray2.push(string3[i]);}
  }
  getPriorities(resultarray2[0]);
  return points;
}

function buildarray2() {
  boxvalue = document.getElementById('box').value;
  items2.push(boxvalue);  
  items2 = items2.toString().split(/\r?\n/);
  points = 0;
  for( z=0; z<(items2.length-2); z+=3) {compareStrings2(items2[z],items2[z+1],items2[z+2]); }
    document.getElementById("box2").innerHTML += "Summary of three-Elf group: " + points + "\n\n";
    return false;
  }