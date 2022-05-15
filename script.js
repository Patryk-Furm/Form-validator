const info = document.querySelector('.info')
const infoBtn = document.querySelector('.info_btn')
const nameInput = document.querySelector('.name_input')
const passInput = document.querySelector('.password_input')
const repPassInput = document.querySelector('.repeat_password_input')
const emailInput = document.querySelector('.e-mail_input')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const closed_eye1 = document.querySelector('.closed_eye1')
const opened_eye1 = document.querySelector('.opened_eye1')
const closed_eye2 = document.querySelector('.closed_eye2')
const opened_eye2 = document.querySelector('.opened_eye2')

const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearAll = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === ''){
            showError(el, el.placeholder)
        }else{
            clearAll(el)
        }
    })
        
}

const checkLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)}
        musi składać sie z min. ${min} znaków.`)
    }
}

const checkPassword = (pass1 , pass2) => {
    if(pass1.value !== pass2.value){
        showError(pass2, 'Hasła do siebie nie pasują')
    }
}

const checkEmail = () => {
    
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
    if(re.test(emailInput.value)){
        clearAll(emailInput)
    }else{
        showError(emailInput, 'E-mail jest niepoprawny')
    }
}


const popupShow = () => {

    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0
    allInputs.forEach(el =>  {
        if(el.classList.contains('error')){
            errorCount++
        }
    })

    if(errorCount === 0){
        info.classList.add('show_popup')
    }
    
}

const closeInfo = () => {
    info.classList.remove('show_popup')
}

const blinkEye = () => {
    closed_eye1.classList.toggle('none')
    opened_eye1.classList.toggle('block')

    
    if(opened_eye1.classList.contains('block')){

        passInput.type = 'text'
    } else{
        passInput.type = 'password'
    }
}

const blinkEye2 = () => {
    closed_eye1.classList.toggle('block')
    opened_eye1.classList.toggle('none')

    if (closed_eye1.classList.contains('block')){
        
        passInput.type = 'password'
    } else{
        passInput.type = 'text'
    }
}


const blinkEye3 = () => {
    closed_eye2.classList.toggle('none')
    opened_eye2.classList.toggle('block')

    
    if(opened_eye2.classList.contains('block')){

        repPassInput.type = 'text'
    } else{
        repPassInput.type = 'password'
    }
}

const blinkEye4 = () => {
    closed_eye2.classList.toggle('block')
    opened_eye2.classList.toggle('none')

    if (closed_eye2.classList.contains('block')){
        
        repPassInput.type = 'password'
    } else{
        repPassInput.type = 'text'
    }
}


closed_eye1.addEventListener('click', blinkEye)
opened_eye1.addEventListener('click', blinkEye2)

closed_eye2.addEventListener('click', blinkEye3)
opened_eye2.addEventListener('click', blinkEye4)

btn1.addEventListener('click', () => {
    checkForm([nameInput, passInput, repPassInput, emailInput])
    checkLength(nameInput, 3)
    checkLength(passInput, 8)
    checkPassword(passInput, repPassInput)
    checkEmail(emailInput)
    popupShow()
})


infoBtn.addEventListener('click', closeInfo)


btn2.addEventListener('click', () => {

    [nameInput, passInput, repPassInput, emailInput].forEach(el =>{
        el.value = ''
        clearAll(el)
        info.classList.remove('show_popup')
    })
})



