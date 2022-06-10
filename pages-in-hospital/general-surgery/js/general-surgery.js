// change color in all page
// local storage  
let mainColor = localStorage.getItem("color_option");
// check if there is color option
if (mainColor !== null) {
    document.documentElement.style.setProperty("--green-color", mainColor)
    // document.documentElement.style.setProperty("--main-color", mainColor)
}

let colorLi = document.querySelectorAll(".switcher li");
// do loop on < li >
colorLi.forEach( (ele) => {
    // click on every li  
    ele.addEventListener("click", function (even) {

        // this is very important code for me
        // set colors in root ( in css )
        document.documentElement.style.setProperty("--green-color" ,ele.dataset.color);
        // document.documentElement.style.setProperty("--dark-color" ,ele.dataset.bg);
        // set color in local storage
        localStorage.setItem("color_option", ele.dataset.color);

        even.target.parentElement.querySelectorAll(".switcher .active").forEach((element) => {

        element.classList.remove("active");

        });

    even.target.classList.add("active");

    // localStorage.setItem("class_active",even.target.classList.add("active"));

    })
});



// ##############################################



















// ##############################################