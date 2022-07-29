
const tasksList = document.getElementById("tasks__list");
const toDos = (localStorage.getItem("tasksList") !== null)? JSON.parse(localStorage.getItem("tasksList")): [];
const inputTask = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");

function createTask(value=inputTask.value) {
    let task = document.createElement("div");
    task.setAttribute("class", "task");

    let taskTitle = document.createElement("div");
    taskTitle.setAttribute("class", "task__title");
    taskTitle.textContent = value;
    task.append(taskTitle);

    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "task__remove");
    a.innerHTML = "&times;";
    task.append(a);
    removeTask(task);
    tasksList.append(task);
}

function removeTask(task){
    let removeSign = task.querySelector(".task__remove");
    if (removeSign != null){
        removeSign.addEventListener("click", (event)=>{
            event.target.closest(".task").remove();
            let taskIndex = toDos.indexOf(task.querySelector(".task__title").textContent.trim())
            toDos.splice(taskIndex, 1);
            localStorage.removeItem("tasksList");
            localStorage.setItem("tasksList", JSON.stringify(toDos));
        });
    }
    localStorage.setItem("tasksList", JSON.stringify(toDos));
}


// add tasks from localStorage
toDos.forEach((element => {
    createTask(element);
}))

// add task from input
function appendTask() {
    toDos.push(inputTask.value.trim());
    createTask();
    inputTask.value = '';
}

createTaskElement = (event) => {
    if (inputTask.value.trim().length > 1){
        appendTask();
        event.stopPropagation();
        event.preventDefault();
    } 
}

btn.addEventListener("click", createTaskElement) 

