const changeBgColor = (selector, color) => {
    const element = document.querySelector(selector)
    element.style.backgroundColor = color;
}

// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get elements
    const RED_BTN = document.querySelector("#red");
    // const NAME = document.querySelectorAll(".form__name")
    // const NAME = document.getElementsByClassName("form__name")[0]
    const FORM = document.querySelector(".form")
    const SHOW_ELEMENTS_BTN = document.querySelector(".show_element")
    
    
    // add listeners
    // NAME.addEventListener("change", (e)=>{
    //     const USER_NAME = e.target.value;
    // })
    FORM.addEventListener("submit", (e)=>{
        e.preventDefault();
        // get elements
        const NAME = document.querySelector(".form__name");
        const USER_NAME = NAME.value;
        const PHONE = document.querySelector(".form__phone");
        const USER_PHONE = PHONE.value;
        const MAIL = document.querySelector(".form__mail");
        const USER_MAIL =MAIL.value;
        const NUMBER = document.querySelector(".form__number");
        const USER_NUMBER = NUMBER.value;
        const DATE = document.querySelector(".form__date");
        const USER_DATE = DATE.value;
        const TIME = document.querySelector(".form__time");
        const USER_TIME = TIME.value;
        const COM = document.querySelector(".form__comm");
        const USER_COM = COM.value;
       
        
        
        console.log(USER_NAME)
        console.log(USER_PHONE)
        console.log(USER_MAIL)
        console.log(USER_NUMBER)
        console.log(USER_DATE)
        console.log(USER_TIME)
        console.log(USER_COM)
        alert("Your request sended!")
    })

    
    // RED_BTN.addEventListener("click", (e)=>{
    //     e.preventDefault();
    //     changeBgColor("body", "#f00");
    // })
})