const greeting = document.getElementById('greeting');
const textArea = document.getElementById('textArea')
const changeFontSize = document.getElementById('changeFontSize');
const boldText = document.getElementById('boldText')
const italics = document.getElementById('italizeText')
const underline = document.getElementById('underline')
const alignLeft = document.getElementById('alignLeft')
const alignCenter = document.getElementById ('alignCenter')
const alignRight = document.getElementById('alignRight')
const changeCase = document.getElementById('changeCase')
const changeColor = document.getElementById('changeColor')
const profile = document.getElementById ('profile')
const userInfo = document.querySelector ('.profile2')
const changeUser = document.getElementById('changeUser')
const newUser = document.getElementById('changeUserName') 
const newUserName = document.getElementById ('newUserName') 
const userNamebtn = document.getElementById ('userNamebtn')
const saveNote = document.getElementById('saveNote')
let user = "Admin";
let heading = document.createElement('h1')

        function loadGreeting () {

            
            heading.innerHTML = `Welcome, <span> ${user}!</span>`
            greeting.appendChild(heading);
        }

   

profile.addEventListener('click', function (){
    if (userInfo.style.display === 'none'){
        userInfo.style.display = 'flex'
    }
    else {
        newUser.style.display = 'none'
        userInfo.style.display = 'none'
    }
    
})
        
    

    changeFontSize.addEventListener('change', function(){
        let value = changeFontSize.value;

        textArea.style.fontSize = value + "px"
    
 })
 boldText.addEventListener('click', function(){

    if (textArea.style.fontWeight === 'bold'){
        textArea.style.fontWeight = 'normal'
        boldText.classList.remove('active')
    }
    else {
        textArea.style.fontWeight = 'bold'
        boldText.classList.add('active');
    }
 })

 italics.addEventListener('click', function(){

    if (textArea.style.fontStyle === 'normal'){
        textArea.style.fontStyle = 'italic'
        italics.classList.add('active')
    }
    else {
        textArea.style.fontStyle = 'normal'
        italics.classList.remove('active');
    }
 })

 underline.addEventListener('click', function (){

    if (textArea.style.textDecoration === 'none'){
        textArea.style.textDecoration = 'underline'
        underline.classList.add('active')
    }
    else {
        textArea.style.textDecoration = 'none'
        underline.classList.remove('active')
    }
 })

 alignLeft.addEventListener('click', function (){

     if (textArea.style.textAlign != 'left'){
        textArea.style.textAlign = 'left'
        alignLeft.classList.add('active')
        alignCenter.classList.remove('active')
        alignRight.classList.remove('active')
     }
     else{
        alignLeft.classList.remove('active')
     }

 })

 alignCenter.addEventListener('click', function (){
    if (textArea.style.textAlign != 'center'){
        textArea.style.textAlign = 'Center'
        alignCenter.classList.add('active')
        alignLeft.classList.remove('active')
        alignRight.classList.remove('active')
    }
    else {
        textArea.style.textAlign = 'left'
        alignCenter.classList.remove('active')
    }
    
    
})
alignRight.addEventListener('click', function (){

    if (textArea.style.textAlign != 'right'){
        textArea.style.textAlign = 'right'
        alignRight.classList.add('active')
        alignLeft.classList.remove('active')
        alignCenter.classList.remove('active')
    }
    else {
        textArea.style.textAlign = 'left'
        alignRight.classList.remove('active')
        
    }
})

changeCase.addEventListener('click', function (){

    if (textArea.style.textTransform === 'lowercase'){
        textArea.style.textTransform = 'uppercase'
        changeCase.classList.add('active')
    }
    else if (textArea.style.textTransform === 'uppercase'){
        textArea.style.textTransform = 'capitalize'
    }
    else {
        textArea.style.textTransform = 'lowercase'
        changeCase.classList.remove('active')
    }
})

changeColor.addEventListener ('change', function (){

    let value = changeColor.value;
    textArea.style.color = value;
})


changeUser.addEventListener('click', function (){
    if (newUser.style.display === 'none'){
        newUser.style.display = 'flex'
    }
    else {
        newUser.style.display = 'none'
    }
   


})
userNamebtn.addEventListener('click', function (){
   let newAdmin =  newUserName.value 
   heading.innerHTML = `Welcome, <span> ${newAdmin}!</span>`

   if (newAdmin === ''){
    alert('Please, Enter New Username')
    

   }
   else{
    greeting.appendChild(heading);
    document.getElementById('displayUser').innerText = newAdmin;
    newUserName.value = ''
   }
  
})
 
saveNote.addEventListener ('click', function (){

    if (textArea.value === ""){
        alert('Please Enter Note')
    }
    else{
        let saved = document.createElement ('div')
        saved.classList.add('saved')
        saved.innerText = textArea.value;
    
        document.getElementById('storeNotes').appendChild(saved)
    
        textArea.value = "";
        alert('Note Saved Succesfully!')
    }
   

 


})
document.getElementById('viewNote').addEventListener('click', function (){



    document.getElementById('storeNotes').style.display = 'block'
})

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('storeNotes').style.display = 'none'

})