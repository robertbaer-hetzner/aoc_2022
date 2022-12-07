function buildarray(items){
    items = [];
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    items.shift();
    return items;
}

function mapDirectory(lines) {
    let subDirectory = [];
    let depth = 0;

    lines.some(line => {
      if (line.substring(0, 4) == '$ cd' && line.substring(0, 7) !== '$ cd ..') depth++;
      if (line.substring(0, 7) == '$ cd ..') {
        if (depth == 0) return true;
        depth--;
      }
      subDirectory.push(line);
    });
  
    const size = subDirectory.map(item => parseInt(item.split(' ')[0])).filter(Number).reduce((a, c) => a + c);
    return size; 
  }

function part1() {
    let directories = []; 
    let arraypart1 = buildarray();
    
    arraypart1.forEach((line, index) => {
        if (line.substring(0, 4) === '$ ls') {
          const remainingLines = arraypart1.slice(index+1);
          const dirSize = mapDirectory(remainingLines);
          directories.push(dirSize);
        }
      });
      
    let solve = directories.filter(size => size <= 100000).reduce((a, c) => a + c);

    document.getElementById("box2").innerHTML += "Result Part 1:  " + solve + "\n\n";
    return false;
  }