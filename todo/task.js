
const tasksList = document.getElementById("tasks__list");
tasksList.innerHTML = (localStorage.getItem("tasksList") == null)? document.getElementById("tasks__list").innerHTML: localStorage.getItem("tasksList");
const inputTask = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");

// for localStorage data add EventListener
const removeTasks = Array.from(document.querySelectorAll(".task__remove"));
removeTasks.forEach((element)=>{
    if (element != null){
        element.addEventListener("click", (event)=>{
            event.target.closest(".task").remove();
            localStorage.removeItem("tasksList");
            localStorage.setItem("tasksList", document.getElementById("tasks__list").innerHTML);
        });
    }
})

function removeTask(task){
    let removeSign = task.querySelector(".task__remove");
    if (removeSign != null){
        removeSign.addEventListener("click", (event)=>{
            event.target.closest(".task").remove();
            localStorage.removeItem("tasksList");
            localStorage.setItem("tasksList", document.getElementById("tasks__list").innerHTML);
        });
    }
    localStorage.setItem("tasksList", document.getElementById("tasks__list").innerHTML);
}


function createTask() {
    let task = document.createElement("div");
    task.setAttribute("class", "task");
    task.innerHTML = `
    <div class="task__title">
        ${inputTask.value}
    </div>
    <a href="#" class="task__remove">&times;</a> 
    `;
    tasksList.append(task);
    inputTask.value = '';
    removeTask(task);
}

createTaskElement = (event) => {
    if (inputTask.value.trim().length > 1){
        createTask();
        event.stopPropagation();
        event.preventDefault();
    } 
}

btn.addEventListener("click", createTaskElement) 

