let elCard1 = document.querySelector(".card1")
let elCard2 = document.querySelector(".card2")
let elCard3 = document.querySelector(".card3")

function tarffic(){
    setTimeout(() =>{
        elCard1.style = "background-color:red"
        elCard2.removeAttribute("style")
        elCard3.removeAttribute("style")
    },0)
    setTimeout(() =>{
        elCard2.style = "background-color:yellow"
        elCard1.removeAttribute("style")
        elCard3.removeAttribute("style")
    }, 3000)
    setTimeout(() =>{
        elCard3.style = "background-color:green"
        elCard1.removeAttribute("style")
        elCard2.removeAttribute("style")
    }, 6000)
}
tarffic()
setInterval(() =>{
    tarffic()
}, 9000)