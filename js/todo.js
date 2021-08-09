const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem("todos" , JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button  = document.createElement("button");
    button.innerText = 'X';
    button.addEventListener("click" ,deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit" , handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedToDos = JSON.parse(savedTodos);
     // array item각각에 대해 함수를 실행할 수 있음 
     //arrow function
    
    toDos = parsedToDos;

    //두개는 같음
     parsedToDos.forEach((item) => {
        paintToDo(item);
    });
    //parsedToDos.forEach(paintToDo);
}
