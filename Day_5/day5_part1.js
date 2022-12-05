function buildarray(items){
    items = [];
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    return items;
}

function splitMulti(str, tokens){
    var tempChar = tokens[0]; 
    for(var i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

function buildarrayForCrates(crates){
    input = [];
    crates = [];
    sortedcrates = [[],[],[],[],[],[],[],[],[]];
    moves = [];
    movescorrect = [];
    solve = [];
    rotator = 0;
    boxvalue = document.getElementById('box').value;
    input.push(boxvalue);
    input = input.toString().split('\n\n');

    // Sorting the Stacks "Number [Crate1] [Crate2] ..."
    for (var i = 0, charsLength = input[0].length; i < charsLength; i += 4) {
        crates.push(input[0].substring(i, i + 3));
    }
    for (var i = 0, charsLength = crates.length; i < charsLength; i += 1){
        if (rotator == 9) {rotator = 0;}
        sortedcrates[rotator] += crates.at(-1);
        crates.pop();
        rotator++;
    }
    for (var i = 0, charsLength = sortedcrates.length; i < charsLength; i += 1){sortedcrates[i] = sortedcrates[i].split(' ').join('');sortedcrates[i] = splitMulti(sortedcrates[i], ['[', ']']).filter(n => n);}
    sortedcrates.reverse();

    // creating Array for the moves ['MovexFromyToZ']
    moves = input[1].toString().split(' ');
    rotator = 0;
    let rotator2 = 0;
    for(let i = 1; i < moves.length; i += 2){
        if (rotator2 == 3) {rotator2 = 0; rotator++; i -= 1;}
        movescorrect[rotator] += moves[i] + " ";
        rotator2++;
     };
    for(let i = 0; i < movescorrect.length; i += 1){
        movescorrect[i] = movescorrect[i].substring(9);
        if (!(i == (movescorrect.length -1))){movescorrect[i] = movescorrect[i].slice(0, -6);}
        movescorrect[i] = movescorrect[i].split(' ');
        if (i == (movescorrect.length -1)) {movescorrect[i] = movescorrect[i].filter(n => n);}
    }
    for (let i = 0; i < movescorrect.length; i += 1){
        for (let x = 0; x < movescorrect[i][0]; x += 1){
            sortedcrates[parseInt(movescorrect[i][2])-1].push(sortedcrates[parseInt(movescorrect[i][1])-1].at(-1));
            sortedcrates[parseInt(movescorrect[i][1])-1].pop();
         }
    }

    // get solve String
    for (let i = 0; i < sortedcrates.length; i += 1){solve.push(sortedcrates[i].at(-1));}
    return solve;
}

function part1() {
    
    let arrayPart1 = buildarrayForCrates();
    //console.log(arrayPart1);
    document.getElementById("box2").innerHTML += "Result Part 1: " + arrayPart1.join('') + "\n\n";
    return false;
  }