function validation(e, spnid) {
    if (e.value == "") {

        document.getElementById(spnid).style.color = "red";
        document.getElementById(spnid).innerHTML = "Please enter data!";
    }
}
// console.log("hi");
function submitData() {
    let name = document.getElementById(".name");
    if (name.value == "") {
        alert("Please enter name").focus();
        return false;

    }

    let email = document.getElementById(".email");
    if (email.value == "") {
        alert("Please enter email").focus();
        return false;

    }

    let mobile = document.getElementById(".mobile");
    if (mobile.value == "") {
        alert("Please enter mobile").focus();
        return false;

    }
}
