function buildarray(items){
    items = [];
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    return items;
}

function part1() {
    
    let arrayPart1 = buildarray();
    
    document.getElementById("box2").innerHTML += "Result Part 1:  " + "\n\n";
    return false;
  }