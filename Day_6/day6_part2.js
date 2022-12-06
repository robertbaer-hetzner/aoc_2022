
function part2() {
  let arrayPart2 = buildarray();
  let firstmarker = getFirstMarker(arrayPart2,14);
  document.getElementById("box2").innerHTML += "Result Part 2:  " + firstmarker + "\n\n";
  return false;
  }