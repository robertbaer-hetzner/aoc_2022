var items = [];
function buildarray() {
    boxvalue = document.getElementById('box').value;
    items.push(boxvalue);  
    items = items.toString().split(/\r?\n/);
    console.log(items);
    return false;
  }

var id = null;

function movetextarea() {
  let elem = document.getElementById("box");
  var pos = 44; 
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 35) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + '%';
    }
  }
  var tag = document.createElement("textarea");
  tag.className = "textbox2";
  document.getElementsByTagName("form")[0].append(tag);
}

 
  
