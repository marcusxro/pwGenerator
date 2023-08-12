const button = document.querySelector('button')
const passwordbox = document.getElementById('password')
const copybtn = document.querySelector('.copy')
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = " @#$%^&*()_+-=`~[]{}|;:',./<>?"
const combinations = uppercase + lowercase + number + symbols
let pass = ""
function generateRandom() {
   pass +=  uppercase [Math.floor(Math.random() * uppercase.length)]
   pass +=  lowercase [Math.floor(Math.random() * lowercase.length)]
   pass +=  number [Math.floor(Math.random() * number.length)]
   pass +=  symbols [Math.floor(Math.random() * symbols.length)]
   while(length > pass.length) {
    pass +=  combinations [Math.floor(Math.random() * combinations.length)]
   }
   passwordbox.value = pass
}
let clicks = 0
button.addEventListener('click', () => {
    generateRandom()
    clicks++
console.log(clicks)
    if(passwordbox.value) {
        copybtn.style.display = "block"
        copybtn.addEventListener('click', () => {
            passwordbox.select()
            document.execCommand("copy")
            passwordbox.style.outline ="5px solid green"
            passwordbox.value = ''
            passwordbox.placeholder = "generate again?"
            document.querySelector('.copied').innerHTML = `copied! ${pass}`
        })
        if(clicks === 2) {
            passwordbox.style.outline =""
            document.querySelector('.copied').innerHTML = ``
        }  if (clicks == 2) {
            clicks = 1
        }
    }
})


