//login
let logindata = document.querySelector('#loginbtn');
// console.log(logindata);

logindata.addEventListener('click', function () {

    let name = document.getElementById('uname').value
    let pass = document.getElementById('pwd').value
    console.log(name, pass);

    fetch('http://localhost/api/login_get_method?username=' + name + '&password=' + pass)
        .then((res) => res.json()).then((RESP) => {
            console.log(RESP);
            if (RESP.Code == 1) {
                alert("Login success")

            }
            else {
                alert("Invalid pass & uname");
            }
        })
})


function RegApi() {
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;
    // console.log(uname);


    const data = { username: uname, email: email, password: pwd, mobile: mobile }
    console.log(data);

    fetch('http://localhost/api/registration_api', {                //fetch data using API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({ allData: data })          //convert all data into string
    }).then((res) => res.json())
        .then((Response) => {
            console.log(Response);
        });
}
