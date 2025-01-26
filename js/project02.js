document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const todoList = document.getElementById("todoList");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks(filter = "all") {
        todoList.innerHTML = "";
        const filteredTasks = tasks.filter(task => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true;
        });
        
        filteredTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = `todo-item ${task.completed ? "completed" : ""}`;
            li.draggable = true;
            li.dataset.index = index;

            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div>
                    <button class="edit-btn">✏️</button>
                    <button class="complete-btn">&#10003;</button>
                    <button class="delete-btn">&#10005;</button>
                </div>
            `;

            todoList.appendChild(li);
        });

        addDragAndDrop();
    }

    function addTask(text) {
        tasks.push({ text, completed: false });
        saveTasks();
        renderTasks();
    }

    function toggleTaskCompletion(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function editTask(index, newText) {
        tasks[index].text = newText;
        saveTasks();
        renderTasks();
    }

    function addDragAndDrop() {
        const items = document.querySelectorAll(".todo-item");

        items.forEach(item => {
            item.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", e.target.dataset.index);
                item.classList.add("dragging");
            });

            item.addEventListener("dragend", () => {
                item.classList.remove("dragging");
            });
        });

        todoList.addEventListener("dragover", (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(todoList, e.clientY);
            const draggingItem = document.querySelector(".dragging");
            if (afterElement == null) {
                todoList.appendChild(draggingItem);
            } else {
                todoList.insertBefore(draggingItem, afterElement);
            }
        });

        todoList.addEventListener("drop", (e) => {
            const draggingIndex = e.dataTransfer.getData("text/plain");
            const draggingItem = tasks.splice(draggingIndex, 1)[0];
            const dropIndex = Array.from(todoList.children).indexOf(document.querySelector(".dragging"));
            tasks.splice(dropIndex, 0, draggingItem);
            saveTasks();
            renderTasks();
        });
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll(".todo-item:not(.dragging)")];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            addTask(text);
            taskInput.value = "";
        }
    });

    todoList.addEventListener("click", (e) => {
        const index = e.target.closest("li").dataset.index;
        if (e.target.classList.contains("complete-btn")) {
            toggleTaskCompletion(index);
        } else if (e.target.classList.contains("delete-btn")) {
            deleteTask(index);
        } else if (e.target.classList.contains("edit-btn")) {
            const taskText = e.target.closest("li").querySelector(".task-text");
            const newText = prompt("Edit your task:", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                editTask(index, newText.trim());
            }
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderTasks(button.dataset.filter);
        });
    });

    renderTasks();
});
