//Local Storage 

//Set local storage method

document.getElementById('submit_button').onclick = function() {
    if (typeof(Storage) !== "undefined") {
        var username = document.getElementById('name_box').value;
        // Store
        localStorage.setItem("username", username);
        // Retrieve
        document.getElementById("name_result").innerHTML = localStorage.getItem("username");
    } else {
        document.getElementById("name_result").innerHTML = "Sorry, your browser does not support Web Storage..."
    }
};​