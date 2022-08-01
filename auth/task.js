const signInForm = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const signoutBtn = document.getElementById("signout__btn");

function greeting(id){
    signInForm.classList.remove("signin_active");
    const userId = document.getElementById("user_id");
    userId.textContent = id;
    welcome.classList.add("welcome_active");
}

// signin form
document.forms["signin__form"].addEventListener('submit', (event) => {
    event.preventDefault();
    // send post request to auth
    const auth = new XMLHttpRequest();
    auth.open('POST', event.target.action, true);
    auth.send(new URLSearchParams(new FormData(event.target)));
    auth.addEventListener('readystatechange', ()=>{
        if (auth.readyState == auth.DONE){
            let response = JSON.parse(auth.response);
            if (response.success == true){
                // save user id
                localStorage.setItem("user_id", JSON.stringify(response.user_id));
                greeting(localStorage.getItem("user_id"));
                event.target.reset();
            } else {
                alert("Неверный логин/пароль")
            }
        }
    })
})

// what to show signin or greeeting
if (localStorage.getItem("user_id")){
    greeting(localStorage.getItem("user_id"))
} else {
    signInForm.classList.add("signin_active");
}

signoutBtn.onclick = () => {
    localStorage.removeItem("user_id");
    const userId = document.getElementById("user_id");
    userId.textContent = '';
    welcome.classList.remove("welcome_active");
    signInForm.classList.add("signin_active");   
}

