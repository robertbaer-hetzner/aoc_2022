
function part2() {
  let arrayPart2 = buildarray();
  let firstmarker = 0;
  for (let i = 0; i < (arrayPart2.length-3); i += 1) { if (uniqueCharacters(arrayPart2.slice(i,i+14).join('')) == true){ firstmarker = i+14; break; } }

  document.getElementById("box2").innerHTML += "Result Part 2: " + firstmarker + "\n\n";
  return false;
  }