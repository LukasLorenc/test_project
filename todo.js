


function onLoad(){
  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

getElementsFromStorage();

}

function update(){
  // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log(" "+ this.parentElement.innerHTML);
    var text = this.parentElement.innerHTML.split("<span");
    deleteElementFromStorage(text[0]);
  }
}
}

function deleteElementFromStorage(todo){
   var todos;
  if(typeof(Storage) !== "undefined") {
    if (localStorage.todoString) {
      todos = localStorage.todoString;
      localStorage.todoString = "";
      var todoArray = todos.split("&&&");
      for(var i = 0 ; i < todoArray.length ; i++){
        if (todo !== todoArray[i]) {
          if(localStorage.todoString === ""){
            localStorage.todoString = todoArray[i];
          }else{
            localStorage.todoString = (localStorage.todoString+"&&&"+todoArray[i]);
          }
        }
      }
    }
  }
}

function addElementToLocalStorage(todo){
  if(typeof(Storage) !== "undefined") {
        if (localStorage.todoString) {
            localStorage.todoString = (localStorage.todoString+"&&&"+todo);
        } else {
            localStorage.todoString = todo;
        }
    }
}
function getElementsFromStorage(){
  var todos;
  if(typeof(Storage) !== "undefined") {
    if (localStorage.todoString) {
      todos = localStorage.todoString;

      var todoArray = todos.split("&&&");
      for(var i = 0 ; i < todoArray.length ; i++){
        addElement(todoArray[i]);
      }
    }
  }
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  addElementToLocalStorage(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  update();
}

function addElement(todo){
    var li = document.createElement("li");
  var inputValue = todo;
  var t = document.createTextNode(todo);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  update();
}