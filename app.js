function getusers() {
    var users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users)
    } else {
        users = [];
    }
    return users;
}

function signup() {
    var fullName = document.getElementById("fullName");
    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var users = getusers()

    var userdetails = {
        fullName: fullName.value,
        userName: userName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        repassword: repassword.value,
        address: address.value,
        city: city.value
    }

    users.push(userdetails)
    localStorage.setItem("users", JSON.stringify(users))

    fullName.value = "";
    userName.value = "";
    email.value = "";
    phone.value= "";
    password.value= "";
    repassword.value= "";
    address.value= "";
    city.value= "";
}

function login(){
    location.assign("https://github.com/SajidNoorMuhammad/Registration-Login-Form")
}