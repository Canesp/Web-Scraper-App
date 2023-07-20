
const urlTrue = false;

function checkUrlAuth() {

    var url_input = document.getElementById("url-Input");
    var input_value = url_input.value;

    eel.webAuthenticator(input_value)(function (response) {

        if (response == false && input_value != 0) {
            url_input.style.borderColor = "red";
            urlTrue = false;
        } else if (response == true) {
            url_input.style.borderColor = "green";
            getWebElements(input_value)
            urlTrue = true;
        } else {
            url_input.style.borderColor = "#3C4FFA";
            urlTrue = false;
        }

    });
};

function getWebElements(url) {

    //const element_list = [];

    eel.getWebElements(url)(function (response){
        //element_list = response;
        addElementsToDiv(response);
    });

    //console.log(element_list);
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

function addElementsToDiv(classNamesList) {
    const targetDiv = document.getElementById("options");

    classNamesList.forEach(className => {
      const listItem = document.createElement('li');
      listItem.className = 'option';

      const icon = document.createElement('i');
      icon.className = 'bx bx-checkbox';

      const span = document.createElement('span');
      span.textContent = className[0];

      listItem.appendChild(icon);
      listItem.appendChild(span);

      targetDiv.appendChild(listItem);
    });
  }
