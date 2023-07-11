
function checkUrlAuth() {

    var url_input = document.getElementById("url-Input");
    var input_value = url_input.value;

    eel.webAuthenticator(input_value)(function(response) {
        
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