function updateNameFields() {
    var select = document.getElementById("event_selection");
    var nameFieldsContainer = document.getElementById("name-fields-container");
    nameFieldsContainer.innerHTML = '';

    var numFields;
    switch (select.value) {
        case "content_creation":
            numFields = 5;
            break;
        case "photography":
            numFields = 3;
            break;
        case "videography":
            numFields = 2;
            break;
        case "chatbot_creation":
            numFields = 2;
            break;
        case "comic_design":
            numFields = 2;
            break;
        case "valorant_tournament":
            numFields = 6;
            break;
        default:
            numFields = 0;
    }

    for (var i = 1; i <= numFields; i++) {
        var formGroup = document.createElement("div");
        formGroup.className = "form-group";

        var label = document.createElement("label");
        label.setAttribute("for", "name" + i);
        label.textContent = "Participant " + i + ":";

        var input = document.createElement("input");
        input.type = "text";
        input.id = "name" + i;
        input.name = "name" + i;
        input.required = true;

        formGroup.appendChild(label);
        formGroup.appendChild(input);

        nameFieldsContainer.appendChild(formGroup);
    }
}

window.onload = function () {
    updateNameFields(); // Initialize with the default selection
};