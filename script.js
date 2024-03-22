
var list = document.querySelector('ul');

var hideShoppedItems = document.getElementById("hideShoppedItems");

function updateCounts() {
  var totalItems = document.querySelectorAll('ul li').length;
  var checkedItems = document.querySelectorAll('ul li.checked').length;
  var uncheckedItems = totalItems - checkedItems;

  document.getElementById('totalItems').textContent = totalItems;
  document.getElementById('checkedItems').textContent = checkedItems;
  document.getElementById('uncheckedItems').textContent = uncheckedItems;
}

function toggleShoppedItemsVisibility(){
  var shopped = document.querySelectorAll('ul li.checked');
  shopped.forEach(function(item){
    item.style.display = hideShoppedItems.checked ? 'none' : 'block'; 
  });
}

hideShoppedItems.addEventListener('change', function(){
  toggleShoppedItemsVisibility();
});

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    updateCounts();
    toggleShoppedItemsVisibility();
  }
}, false);

document.getElementById("inputItem").addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
  }
});

function addItem(){
  var inputText = document.getElementById("inputItem");
  var item = inputText.value;
  if(item.trim()!==""){
    var shoppingItems = document.getElementById("myitems");
    var listitem = document.createElement("li");
    listitem.textContent = item;
    var delItem = document.createElement("span");
    delItem.textContent = '\u274C';
    delItem.className = "delete-btn";
    delItem.onclick = function(){
      listitem.remove();
      updateCounts();
      toggleShoppedItemsVisibility();
    };
    listitem.appendChild(delItem);
    myitems.appendChild(listitem);
    inputText.value = "";

    updateCounts();
    toggleShoppedItemsVisibility();
  }
}
updateCounts();
toggleShoppedItemsVisibility();




