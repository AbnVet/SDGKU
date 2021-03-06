let detailsVisible = true;
let important = false;
let tasks = [];
var serverUrl = "https://fsdiapi.azurewebsites.net/";

function toggleImportant() {
    if (important) {
        $("#iImportant").removeClass('fas').addClass('far');
        important = false;
    } else {
        $("#iImportant").removeClass('far').addClass('fas');
        important = true;
    }
}

function categoryChanged() {
    let selVal = $("#selCategory").val();

    if (selVal === "6") {
        $("#txtCategory").removeClass('hide');
    } else {
        $("#txtCategory").addClass('hide');
    }

    console.log(selVal);
}


function toggleDetails() {
    if (detailsVisible) {
        $("#capture-form").hide();
        detailsVisible = false;
    } else {
        $("#capture-form").show();
        detailsVisible = true;
    }
}

function saveTask() {
    console.log("Saving task");

    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#selDueDate").val();
    let category = $("selCategory").val();
    if (category === "6") category = $("txtCategory").val();
    let color = $("#selColor").val();

    let task = new Task(title, important, desc, location, dueDate, category, color);
    console.log(task);

    $.ajax({
        type: "POST",
        url: serverUrl + "api/tasks/",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (res) {
            console.log("Server says: ", res);
            let responseTasks = JSON.parse(res);
            displayTask(responseTasks);
        },
        error: function (err) {
            console.log("Error saving: ", err);
            //show an error
        }
    });

}

function fetchTasks() {
    //create a get request to
    //url:server Url + api/tasks/",
    $.ajax({
        type: "GET",
        url: serverUrl + "api/tasks",
        success: function (response) {
            tasks = JSON.parse(response);
            //filter tasks by name
            for (let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                if (task.name === "abnvet") {
                    displayTask(task);
                }
            }
        },
        error: function (err) {
            console.log("error getting data", err);
        },
    });
}

function displayTask(task) {
    //create the syntax
    let syntax = `<div id="${task._id}" class="task">
        <i class = 'important fas fa-star'></i>
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <label class="location">${task.location}</label>
        <label class="due-date">${task.dueDate}</label>
        <button class = "btn btn-sm btn-primary" onclick="markDone('${task._id}')">Done</button>
    </div>`;

    //append the syntax to an HTML container
    if (task.status === "Done") {
        $("#doneTasks").append(syntax);

    } else {
        $("#pendingTasks").append(syntax);

    }
}

function markDone(id) {
    console.log("Clicked on done button", id);
    $("#" + id).remove();

    for (let i = 0; i < tasks.length; i++) {
        let item = tasks[i];
        if (item._id === id) {
            item.status = "Done";

            $.ajax({
                type: "PUT",
                url: serverUrl + "api/tasks",
                data: JSON.stringify(item),
                contentType: "application/json",
                success: function (res) {
                    console.log("Put results", res);
                    let updatedTask = JSON.parse(res);
                    displayTask(updatedTask);
                },
                error(err) {
                    console.log("Error updating", err);
                },
            });
        }
    }
}

function init() {
    console.log("Task manager");

    fetchTasks();

    //hook events
    $("#selCategory").change(categoryChanged);
    $("#btnDetails").click(toggleDetails);
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);

}
window.onload = init;


function testRequest() {
    $.ajax({
        type: 'GET',
        url: "https://restclass.azurewebsites.net/api/test",
        success: function (result) {
            console.log("response from server", result);
        },
        error: function (errorDetails) {
            console.log("error calling server", errorDetails);
        }
    });
}