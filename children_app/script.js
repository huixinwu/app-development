/**
 * DROPDOWN MENU
 */
// collect the element
let menubtn = document.querySelector(".menubtn")
let collapsemenu = document.querySelector(".collapsemenu")

// add a click event to open the collapsible menu
menubtn.addEventListener("click", function(){
      collapsemenu.classList.toggle("closeToOpen")
})

/**
 * MODAL WINDOW
 */
// collect the element
let cardbee = document.querySelector(".bee")
let carddog = document.querySelector(".dogs")
let modalwindowbee = document.querySelector(".modalwindowbee")
let modalwindowdog = document.querySelector(".modalwindowdog")
let closemodal = document.querySelector(".closemodal")

// add a click event to open the modal window
cardbee.addEventListener("click", function(){
    modalwindowbee.style.display = "block"
})
carddog.addEventListener("click", function(){
    modalwindowdog.style.display = "block"
})

// close the  modal window by clicking on X
closemodal.addEventListener("click", function(){
    modalwindowbee.style.display = "none"
    modalwindowdog.style.display = "none"
})

// close the modal window when the user clicks anywhere on the modal screen
window.addEventListener("click", function(event){
    if(event.target == modalwindowbee || event.target == modalwindowdog){
        modalwindowbee.style.display = "none"
    modalwindowdog.style.display = "none"
    }
})