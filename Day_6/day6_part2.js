
function part2() {
  let arrayPart2 = buildarray();

  firstmarker = 0;
  for (let i = 0; i < (arrayPart2.length-3); i += 1){
      slidingWindow = arrayPart2[i] + arrayPart2[i+1] + arrayPart2[i+2] + arrayPart2[i+3] + arrayPart2[i+4] + arrayPart2[i+5] + arrayPart2[i+6] + arrayPart2[i+7] + arrayPart2[i+8] + arrayPart2[i+9] + arrayPart2[i+10] + arrayPart2[i+11] + arrayPart2[i+12] + arrayPart2[i+13] ;
      if (uniqueCharacters(slidingWindow) == true){firstmarker = i+14; break;}
  }
  document.getElementById("box2").innerHTML += "Result Part 2: " + firstmarker + "\n\n";
  return false;
  }