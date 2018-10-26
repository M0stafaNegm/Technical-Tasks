var myNodelist = document.getElementsByTagName("LI");

var close = document.getElementsByClassName("close");

var Edit = document.getElementsByClassName("Edit");

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var span1 = document.createElement("span");
  txt = document.createTextNode("E");
  span1.className = "Edit";
  span1.appendChild(txt);
  li.appendChild(span1);

  li.onclick = function () {
    if (this.className == 'checked') {
      this.className = undefined;
      return;
    }
    this.className = 'checked';
  }
  i=close.length-1;
    close[i].onclick = function () {
      var div = this.parentElement;
      div.parentElement.removeChild(div);
    }
    i=Edit.length-1;
    Edit[i].onclick = function () {
      var txt = prompt("Edit " + this.parentElement.firstChild.nodeValue + " :");
      if (txt === '') {
        alert("You must write something!");
      } else {
        this.parentElement.firstChild.nodeValue=txt;
      }

      this.parentElement.className = 'checked';
    }

}
