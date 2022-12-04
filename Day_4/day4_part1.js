let overlaps = 0; 
function buildarray(items){
    items = [];
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    return items;
}

function range(size, startAt) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function checkFullOverlapping(sections){
  sections = sections.split(',');
  let elf1 = sections[0].split('-');
  let elf2 = sections[1].split('-');
  elf1 = range((parseInt(elf1[1]) - parseInt(elf1[0]) + 1),parseInt(elf1[0]));
  elf2 = range((parseInt(elf2[1]) - parseInt(elf2[0]) + 1),parseInt(elf2[0]));
  if (elf1.every(element => {return elf2.includes(element);}) || elf2.every(element => {return elf1.includes(element);})) {overlaps++;}

}

function part1() {
    
    let arrayPart1 = buildarray();
    arrayPart1.map(checkFullOverlapping); 
    document.getElementById("box2").innerHTML += "Result Part 1:  " + overlaps + "\n\n";
    return false;
  }