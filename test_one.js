if (typeof(Storage) !== "undefined") {
    var username = document.getElementById('name_box').value;
    
    if(localStorage.getItem("username") != null) {
        document.getElementById("name_result").innerHTML = localStorage.getItem("username");
    } else {
        document.getElementById("name_result").innerHTML = "Name not set.";
    }

    document.getElementById('submit_button').onclick = function() {
        username = document.getElementById('name_box').value;
        localStorage.setItem("username", username);
    };
} else {
    document.getElementById("name_result").innerHTML = "Sorry, your browser does not support Web Storage...";
}