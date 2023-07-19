
function checkUrlAuth() {

    var url_input = document.getElementById("url-Input");
    var input_value = url_input.value;

    eel.webAuthenticator(input_value)(function (response) {

        if (response == false && input_value != 0) {
            url_input.style.borderColor = "red";
        } else if (response == true) {
            url_input.style.borderColor = "green";
        } else {
            url_input.style.borderColor = "#3C4FFA";
        }

    });
};

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
            toggleSelectMenu();;
        }
    }

    // Clicked outside 'a' and parent elements, returns.
    return;
});
