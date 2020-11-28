const rock = document.querySelector('.btn-rock')
const paper = document.querySelector('.btn-paper')
const scissors = document.querySelector('.btn-scissors')
const result = document.querySelector('.info')
const userWins = document.querySelector('.user-count')
const computerWins = document.querySelector('.comp-count')
const userImage = document.querySelector('.user-image')
const computerImage = document.querySelector('.computer-image')
const userLabel = document.querySelector('.user')
const computerLabel = document.querySelector('.comp')
const restart = document.querySelector('.restart')
const endGame = document.querySelector('.end-result')
const game = {
    1: 'r',
    2: 'p',
    3: 's'
}

let userInput = ''
let userCount = 0
let compCount = 0

restart.classList.toggle('hidden')

rock.addEventListener('click', ()=>{
    userImage.src = 'images/user_rock.png'
    const rand = Math.floor(Math.random() * 3 + 1)
    const comp = game[rand]

    if (comp == 'r') {
        computerImage.src = 'images/comp_rock.png'
        result.innerText = 'Tie'
    }
    if (comp == 'p') {
        computerImage.src = 'images/comp_hand.png'
        compCount++
        result.innerText = 'Computer wins round!'
        computerWins.innerText = compCount
    }
    if (comp == 's') {
        computerImage.src = 'images/comp_scissors.png'
        userCount++
        result.innerText = 'user wins round!'
        userWins.innerText = userCount
    }

    end(userCount, compCount)
})

paper.addEventListener('click', ()=>{
    userImage.src = 'images/user_paper.png'
    const rand = Math.floor(Math.random() * 3 + 1)
    const comp = game[rand]

    if (comp == 'r') {
        computerImage.src = 'images/comp_rock.png'
        userCount++
        userWins.innerText = userCount
        result.innerText = 'computer plays rock, user wins!'
    }
    if (comp == 'p') {
        computerImage.src = 'images/comp_hand.png'
        result.innerText = 'Tie'
    }
    if (comp == 's') {
        computerImage.src = 'images/comp_scissors.png'
        compCount++
        result.innerText = 'computer plays scissors, computer wins!'
        computerWins.innerText = compCount
    }

    end(userCount, compCount)
})

scissors.addEventListener('click', ()=>{
    userImage.src = 'images/user_scissors.png'
    const rand = Math.floor(Math.random() * 3 + 1)
    const comp = game[rand]

    if (comp == 'r') {
        computerImage.src = 'images/comp_rock.png'
        compCount++
        computerWins.innerText = compCount
        result.innerText = 'computer plays rock, computer wins!'
    }
    if (comp == 'p') {
        computerImage.src = 'images/comp_hand.png'
        userCount++
        userWins.innerText = userCount
        result.innerText = 'Computer plays paper, user wins!'
    }
    if (comp == 's') {
        computerImage.src = 'images/comp_scissors.png'
        result.innerText = 'Tie'
    }

    end(userCount, compCount)
})

const end = (user, comp) => {
    if (user == 5){
        endGame.innerText = 'VICTORY!!!!!'
        PlayAgain()
        restart.classList.toggle('hidden')
        restart.addEventListener('click', ()=>{
            PlayAgain()
            Reset()
            restart.classList.toggle('hidden')
        })
    }
    if (comp == 5){
        endGame.innerText = 'DEAFEAT:('
        PlayAgain()
        restart.classList.toggle('hidden')
        restart.addEventListener('click', ()=>{
            PlayAgain()
            Reset()
            endGame.innerText = ''
            restart.classList.toggle('hidden')
        })
    }   
}

function Reset(){
    userCount = 0
    compCount = 0
    userWins.innerText = userCount
    computerWins.innerText = compCount
    result.innerText = ''
}

function PlayAgain(){
    userWins.classList.toggle('hidden')
    computerWins.classList.toggle('hidden')
    userImage.classList.toggle('hidden')
    computerImage.classList.toggle('hidden')
    rock.classList.toggle('hidden')
    paper.classList.toggle('hidden')
    scissors.classList.toggle('hidden')
    computerLabel.classList.toggle('hidden')
    userLabel.classList.toggle('hidden')
    result.innerText = ''
}