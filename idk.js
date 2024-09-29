const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;

    if (taskText === "" || taskDate === "") return;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${taskDate}</td>
        <td>${taskText}</td>
        <td>
            <a class="edit" onclick="editTask(this)">Edit</a>
            <a class="delete" onclick="deleteTask(this)">Delete</a>
        </td>
    `;
    taskList.appendChild(row);
    taskInput.value = "";
    dateInput.value = "";
}

function editTask(btn) {
    const row = btn.parentElement.parentElement;
    const taskDate = row.children[0].textContent;
    const taskText = row.children[1].textContent;

    row.children[0].innerHTML = `<input type="date" value="${taskDate}">`;
    row.children[1].innerHTML = `<input type="text" value="${taskText}">`;

    const actionCell = row.children[2];
    actionCell.innerHTML = `
        <a class="save" onclick="saveTask(this)">Save</a>
    `;
}

function saveTask(btn) {
    const row = btn.parentElement.parentElement;
    const newDate = row.children[0].querySelector('input').value;
    const newText = row.children[1].querySelector('input').value;

    if (newText === "" || newDate === "") return;

    row.children[0].textContent = newDate;
    row.children[1].textContent = newText;

    const actionCell = row.children[2];
    actionCell.innerHTML = `
        <a class="edit" onclick="editTask(this)">Edit</a>
        <a class="delete" onclick="deleteTask(this)">Delete</a>
    `;
}

function deleteTask(btn) {
    const row = btn.parentElement.parentElement;
    taskList.removeChild(row);
}
