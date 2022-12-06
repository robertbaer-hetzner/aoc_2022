function buildarray(items){
    items = [];
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split('');
    return items;
}

function uniqueCharacters(str)
{ 
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}

function part1() {
    
    let arrayPart1 = buildarray();
    let firstmarker = 0;
    for (let i = 0; i < (arrayPart1.length-3); i += 1) { if (uniqueCharacters(arrayPart1.slice(i,i+4).join('')) == true){ firstmarker = i+4; break; } }
    document.getElementById("box2").innerHTML += "Result Part 1:  " + firstmarker + "\n\n";
    return false;
  }