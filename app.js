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
    phone.value = "";
    password.value = "";
    repassword.value = "";
    address.value = "";
    city.value = "";
}

function login() {
    document.getElementById("box").style.display = "none";
    document.getElementById("loginbox").style.display = "block";
}

function register() {
    document.getElementById("box").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
}

function loginPage() {
    var email = document.getElementById("l-email");
    var username = document.getElementById("l-username");
    var password = document.getElementById("l-password");
    var users = getusers();
    var saveuser = {};

    for (var i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            saveuser = users[i]
            break;
        }
    }

    if(saveuser.email){
        if(saveuser.password === password.value){
            location.assign("https://sajidnoormuhammad.github.io/Complete-Car-Website-b-/")
        }else{
            alert("Invalid Password")
        }
    }else{
        alert("User Not Found")
    }

    email.value= "";
    password.value= "";
    username.value="";
}

