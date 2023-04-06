const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass = document.getElementById('pass1')
let secondPass = document.getElementById('pass2')


function generatePass(){
    let password1 = ''
    let password2 = ''
    
    for(let i = 0 ; i < 15; i++){
        let randomChar = Math.floor(Math.random()*characters.length)
        password1 += characters[randomChar]
    }
    
    for(let i = 0 ; i < 15; i++){
        let randomChar = Math.floor(Math.random()*characters.length)
        password2 += characters[randomChar]
    }
    
    firstPass.textContent = password1
    secondPass.textContent = password2
}



// add a copy to clip board option
// add toggle for only aplhabets /numbers / char
// add password length input




