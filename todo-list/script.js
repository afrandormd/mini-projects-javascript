// check brower supports local storage / not
if (typeof(Storage) !== "undefined") {
    // get data from local storage and read to list
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    for (let i = 0; i < tasks.length; i++) {
        addTaskToList(tasks[i])
    }
}

// add event listener from "tambahkan" button
let addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", () => {
    let newTaskInput = document.getElementById("new-task")
    let newTask = newTaskInput.value
    if (newTask) {
        addTaskToList(newTask)
        newTaskInput.value = ""
    }
})

// add new task inside list and to local storage
function addTaskToList(task) {
    let taskList = document.getElementById("task-list")
    let newTaskItem = document.createElement("li")
    newTaskItem.innerText = task
    taskList.appendChild(newTaskItem)
    
    // add button for delete task
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "✅"
    deleteBtn.addEventListener("click", () => {
    deleteTaskFromList(newTaskItem, task)
    })
    newTaskItem.appendChild(deleteBtn)
    
    taskList.appendChild(newTaskItem)

    // save task to local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// delete one task from list and local storage
function deleteTaskFromList(taskItem, task) {
    taskItem.remove()
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    let index = tasks.indexOf(task)
    if (index !== -1) {
        tasks.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
}
