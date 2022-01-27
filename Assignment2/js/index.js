//popup box
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


//values get 
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");

const userdata = document.getElementById("use");
const userpass = document.getElementById("pas");


const Move = () => {
    window.location.assign("./SIgnup.html");
}


const createAccount = () => {

    const userObj = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    if (userIndex != -1 || username.value == "" || password.value == "" || email.value == "") {
        modal.style.display = "block";
    }
    else {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        window.location.assign("./Login.html");
    }
}

const login = () => {
    if (username.value == "" || password.value == "") {
        modal.style.display = "block";
    } else {
        const userData = JSON.parse(localStorage.getItem("users"))
        const checkUser = userData.find((value) => {
            // localStorage.setItem("users",JSON.stringify(user));
            return value.username === username.value && value.password === password.value
        })

        if (checkUser) {
            localStorage.setItem("currentUser", JSON.stringify(checkUser))
            console.log(checkUser);
            window.location.assign("./portal.html");
        } else {
            modal.style.display = "block";
        }
    }
}

const value = () => {
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    userdata.innerHTML = userData.username;
    userpass.innerHTML = userData.username;
    console.log(userData.username);
}


const logout = () => {
    window.location.assign("./Login.html");
}


// for popup screen display

// When the user clicks on <span> (x), close the modal
const clone = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
