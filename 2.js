function checkform() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if (name == "" || email == "" || pass == "") {
        alert("Please fill all the fields");
    }
    else {
        let box = document.getElementById('infobox').cloneNode('true');
        box.children[1].children[0].innerHTML = name;
        box.children[1].children[1].innerHTML = email;
        box.children[1].children[2].innerHTML = pass;
        let main = document.getElementById('mainbox');
        main.insertBefore(box, main.firstChild);
        document.getElementById('username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('pass').value = "";
    }

}

function deleteInfo(el) {
    el.parentElement.parentElement.remove();
}