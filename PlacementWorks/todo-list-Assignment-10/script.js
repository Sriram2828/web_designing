var todo = document.getElementById("todo");
var list = document.getElementById("list");

//for inserting the todo to the list
function insert() {
    if (todo.value === "") {
        alert("❌give some planned work dont let the input field empty❌")
    } else {
        var li = document.createElement("li");
        li.innerHTML =
            todo.value + "<button onclick='clearElement(event)'>done</button>";
        list.append(li); // will append the newly created todo element in the list
    }
    // to empty the field after inserting
    todo.value = "";
}

//removing the work done
function clearElement(event) {
    event.target.parentElement.remove(); //parentElement will include consider the parent tag
}
