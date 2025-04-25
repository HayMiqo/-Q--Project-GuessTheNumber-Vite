import './style.css'

const inputButton = document.querySelector('.input__button')
const generateButton = document.querySelector('.generate__button')
const numberField = document.querySelector('.number__input')

let random = 0

document.addEventListener('DOMContentLoaded', ()=>{
    random = Math.floor(Math.random() * 10) + 1
})

generateButton.addEventListener('click', () =>{
    random = Math.floor(Math.random() * 10) + 1
    console.log(random)
})


inputButton.addEventListener('click', () =>{
    const userChoosed = Number(numberField.value)
    


    if (userChoosed === random && userChoosed !== ''){
        alert('ты угадал')

    } else if (numberField.value === '' || isNaN(userChoosed)) {
        numberField.classList.add('shake')
        alert('Пожалуйста, введите число')
        setTimeout(() => numberField.classList.remove('shake'), 500)
        return

    } else{
        numberField.classList.add('shake')
        setTimeout(() =>{
            numberField.classList.remove('shake')
        }, 500)
    }
})

