window.onload = ()=>{
    let login = document.querySelector(".login");
    let user = document.querySelector(".user");
    let password = document.querySelector(".password");
    let btn = document.querySelector(".btn");
    let order = document.querySelector(".order");

    order.classList.add("hidden");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
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

    let pizzas = [
        {
            pizza: "Синя",
            price: 100
        },
        {
            pizza: "Зелена",
            price: 90
        },
        {
            pizza: "Червона",
            price: 110
        }
    ]

    for(let i = 0; i < pizzas.length; i++){
        let pizzaList = document.querySelector("#pizzaList");
        let pizza = document.createElement("option");
        pizza.setAttribute("value", pizzas[i].pizza);
        pizzaList.appendChild(pizza);
    }

    let pizza = document.querySelector(".pizza");
    let spanEl = document.querySelector("p>span");
    let btnBuy = document.querySelector(".order>button");
    let pizzaPrice = 0;
    let priceSizePizza = 1;
    let cheeseBorderPrice = 0;
    let totalPrice = 0;

    pizza.addEventListener("click", function(){
        pizza.value = "";
    });
    pizza.addEventListener("input", function() {
        for (let i = 0; i < pizzas.length; i++) {
            if (String(pizzas[i].pizza) === String(pizza.value)) {
                pizzaPrice = pizzas[i].price;
                totalPrice = Math.ceil(pizzaPrice*priceSizePizza+cheeseBorderPrice);
                spanEl.textContent = totalPrice;
                btnBuy.disabled = false;
            }
        }
    });

    let size = document.querySelectorAll(`input[name="size"]`);
    size[0].addEventListener("click", function(){
        priceSizePizza = 1;
        totalPrice = Math.ceil(pizzaPrice*priceSizePizza+cheeseBorderPrice);
        spanEl.textContent = totalPrice;
    });
    size[1].addEventListener("click", function(){
        priceSizePizza = 1.5;
        totalPrice = Math.ceil(pizzaPrice*priceSizePizza+cheeseBorderPrice);
        spanEl.textContent = totalPrice;
    });
    size[2].addEventListener("click", function(){
        priceSizePizza = 1.9;
        totalPrice = Math.ceil(pizzaPrice*priceSizePizza+cheeseBorderPrice);
        spanEl.textContent = totalPrice;
    });

    let cheeseBorder = document.querySelector(".checkbox");

    cheeseBorder.addEventListener("click", function(){
        if(pizzaPrice !== 0){
            cheeseBorderPrice = cheeseBorder.checked ? 10 : 0;
            totalPrice = Math.ceil(pizzaPrice*priceSizePizza+cheeseBorderPrice);
            spanEl.textContent = totalPrice;
        }
    });

}