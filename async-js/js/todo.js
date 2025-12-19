let todos = [];
function addTodo(){
    let input=document.getElementById("todoInput");
    let task=input.value.trim();
    if(task===""){
        alert("Please enter a task");
        return;
    }
       todos.push(task);
      input.value = "";

      showTodos();
       function showTodos() {
      let list = document.getElementById("todoList");
      list.innerHTML = "";

      todos.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        // delete button
        let del = document.createElement("button");
        del.textContent = "Delete";
        del.style.marginLeft = "10px";
        del.onclick = () => deleteTodo(index);

        li.appendChild(del);
        list.appendChild(li);
      });
    }

    function deleteTodo(index) {
      todos.splice(index, 1);
      showTodos();
    }
   }