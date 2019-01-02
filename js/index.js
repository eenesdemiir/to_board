dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]);
removeOnSpill: false
  .on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el) {
    el.className += "ex-moved";
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });

function addTask() {
  var inputTask = document.getElementById("taskText").value;
  if(inputTask == ""){
    window.alert("Lütfen boş bırakmayınız");
    return false;
  }
  document.getElementById("to-do").innerHTML +=
    "<li class='task'><p>" + inputTask + "</p></li>";
  document.getElementById("taskText").value = "";
}

function emptyTrash() {
  document.getElementById("trash").innerHTML = "";
}


