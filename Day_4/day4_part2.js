items2 = [];

function buildarray2() {
  boxvalue = document.getElementById('box').value;
  items2.push(boxvalue);  
  items2 = items2.toString().split(/\r?\n/);
  return false;
  }