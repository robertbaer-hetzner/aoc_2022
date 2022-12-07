
function part2() {
  let arrayPart2 = buildarray();
  let directories = []; 

  arrayPart2.forEach((line, index) => {
    if (line.substring(0, 4) == '$ ls') {
      const remainingLines = arrayPart2.slice(index+1);
      const dirSize = mapDirectory(remainingLines);
      directories.push(dirSize);
    }
  });

  let diskSize = 70000000;
  let requiredSpace = 30000000;
  
  let extraSpaceNeeded = requiredSpace - (diskSize - directories[0]);
  let possibleDirs = directories.filter(size => size >= extraSpaceNeeded);
  let solve = Math.min(...possibleDirs);

  document.getElementById("box2").innerHTML += "Result Part 2: " + solve + "\n\n";
  return false;
  }