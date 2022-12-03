let items = [];

function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/).map(splitMiddle);

    document.getElementById("box2").innerHTML += "Summary of every Elfs rucksack points: " + points + "\n\n";
    return false;
  }