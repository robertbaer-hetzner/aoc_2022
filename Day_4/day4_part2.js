function checkAtAllOverlapping(sections){
  sections = sections.split(',');
  let elf1 = sections[0].split('-');
  let elf2 = sections[1].split('-');
  elf1 = range((parseInt(elf1[1]) - parseInt(elf1[0]) + 1),parseInt(elf1[0]));
  elf2 = range((parseInt(elf2[1]) - parseInt(elf2[0]) + 1),parseInt(elf2[0]));
  if (elf1.includes(elf2[0]) || elf1.includes(elf2[1]) || elf2.includes(elf1[0]) || elf2.includes(elf1[0])) {overlaps++;}
}

function part2() {
  overlaps = 0;
  let arrayPart2 = buildarray(); 
  arrayPart2.map(checkAtAllOverlapping);
  document.getElementById("box2").innerHTML += "Result Part 2 " + overlaps + "\n\n";
  return false;
  }