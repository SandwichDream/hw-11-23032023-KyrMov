window.onload = ()=>{
    let login = document.querySelector(".login");
    let user = document.querySelector(".user");
    let password = document.querySelector(".password");
    let btn = document.querySelector(".btn");
    let order = document.querySelector(".order");

    order.classList.add("hidden");

    btn.addEventListener("click", function() {
        console.log(user.value)
        if (user.value === "user" && password.value === "123456") {
            user.value = '';
            password.value = '';
            login.classList.add("hidden");
            order.classList.remove("hidden");
        } else {
            alert("Invalid login");
        }
    });
}