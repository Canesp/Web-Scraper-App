var option_list = [];
var checked_options = [];

// function to check if a url is OK.
function checkUrlAuth() {

    // get url inout element and value.
    const url_input = document.getElementById("url-Input");
    var input_value = url_input.value;

    // gets select menu element to check if disabled.
    const select_Menu = document.getElementsByClassName("Multi-Select-Container")[0];

    // uses the py function to check url.
    eel.webAuthenticator(input_value)(function (response) {

        // changes style of input if success or fail and class function to retive elements from site. 
        if (response == false && input_value != 0) {

            url_input.style.borderColor = "red";

            // checks if select menu is disabled.
            if (!select_Menu.classList.contains("disabled")) {
                toggleSelectMenuDisable();
            }

        } else if (response == true) {

            url_input.style.borderColor = "green";
            getWebElements(input_value);

            // checks if select menu is disabled.
            if (select_Menu.classList.contains("disabled")) {
                toggleSelectMenuDisable();
            }

        } else {

            url_input.style.borderColor = "#3C4FFA";

            // checks if select menu is disabled.
            if (!select_Menu.classList.contains("disabled")) {
                toggleSelectMenuDisable();
            }

        }

    });
};

function getWebElements(url) {

    eel.getWebElements(url)(function (response) {

        removeOptions("options");
        addOption(response);
    });

}

function inputBlur() {

    var url_input = document.getElementById("url-Input");
    var input_value = url_input.value;

    if (input_value == 0) {
        url_input.style.borderColor = "";
    }
}

function toggleSelectMenu() {
    var select_Menu = document.getElementsByClassName("Multi-Select-Container")[0];

    select_Menu.classList.toggle("active");
}

function toggleSelectMenuDisable() {
    const select_Menu = document.getElementsByClassName("Multi-Select-Container")[0];

    select_Menu.classList.toggle("disabled");
}

document.addEventListener("click", function (event) {

    const parentElements = document.querySelectorAll(".Multi-Select-Container");
    const clickedElement = event.target;

    // Check if the clicked element is any of the parent elements or their children
    for (const parentElement of parentElements) {
        if (parentElement.contains(clickedElement) || clickedElement.tagName === "A") {
            // Clicked on 'a' or its children or clicked inside one of the parent elements, do nothing
            return;
        }

        // Check if the parent element has the 'active' class indicating it has an active toggle state
        if (parentElement.classList.contains("active")) {
            // Parent element is active, call the function.
            toggleSelectMenu();
        }
    }

    // Clicked outside 'a' and parent elements, returns.
    return;
});

function addOption(classNamesList) {
    const targetDiv = document.getElementById("options");
    option_list = classNamesList;

    classNamesList.forEach(className => {
        const listItem = document.createElement('li');
        listItem.className = 'option';

        const icon = document.createElement('i');
        icon.className = 'bx bx-checkbox';

        const span = document.createElement('span');
        span.textContent = className[0];

        listItem.appendChild(icon);
        listItem.appendChild(span);
        listItem.setAttribute("onclick", "checkOption(this);");

        targetDiv.appendChild(listItem);
    });
}

function removeOptions(dropdownId) {

    const dropdownElement = document.getElementById(dropdownId);

    while (dropdownElement.firstChild) {
        dropdownElement.removeChild(dropdownElement.firstChild);
    }

}

function checkOption(option) {

    // gets firts child of element that is icon.
    const iconElement = option.firstChild;

    const spanElement = option.children[1];

    // checks if its already checked if not changes the icon to checked and vice versa. 
    if (iconElement.classList.contains("bx-checkbox")) {

        iconElement.classList.remove("bx-checkbox");
        iconElement.classList.add("bxs-checkbox-checked");

        // adds classtag to checked_elements list.
        option_list.forEach(classtag => {
            if (classtag[0] == spanElement.textContent) {
                checked_options.push(classtag);
            }
        });

    }
    else {
        iconElement.classList.remove("bxs-checkbox-checked");
        iconElement.classList.add("bx-checkbox");

        // removes checked item from checked_element list.
        checked_options.forEach((classtag, index) => {
            if (classtag[0] == spanElement.textContent) {
                checked_options.splice(index, 1);
            }
        });

    }

    console.log(checked_options);
}
