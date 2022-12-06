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

function getFirstMarker(array,number){
    let marker = 0;
    for (let i = 0; i < (array.length-3); i += 1) { if (uniqueCharacters(array.slice(i,i+number).join('')) == true){ marker = i+number; break; } }
    return marker;
}

function part1() {
    
    let arrayPart1 = buildarray();
    let firstmarker = getFirstMarker(arrayPart1,4);
    document.getElementById("box2").innerHTML += "Result Part 1:  " + firstmarker + "\n\n";
    return false;
  }