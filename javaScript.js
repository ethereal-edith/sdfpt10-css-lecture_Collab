let h1 = document.querySelector("h1")
h1.textContent = "Breakout 9"
h1.style.color = "#fc0324"

let li = document.querySelectorAll("li")
//li.textContent = ("li")
console.log(li)
for (let index = 0; index < li.length; index++) {
    li[index].style.color="red"
    console.log(index)
   // if(index===1){
    //   li[index].style.color="green" 
  //  }
}

let th = document.getElementsByTagName("th")
console.log(th)
for (let index = 0; index < th.length; index++) {
   th[index].style.fontSize = "50px"
    console.log(index)
}
