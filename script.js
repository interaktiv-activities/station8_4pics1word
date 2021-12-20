//SOUNDS
var correctSound = new Audio()
correctSound.src = "SOUNDS/match.wav"

var winSound = new Audio()
winSound.src = "SOUNDS/victory.wav"

var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/happy.mp3"

var wrongSound = new Audio
wrongSound.src = "SOUNDS/wrong.mp3"

//PASS MESSAGE
const passMessage = document.getElementById('pass-msg')
const menuButton = document.getElementById('menu-btn')

//LEVEL CONTENT
const title = document.getElementById('title-img-game')
const levelText = document.getElementById('level-text')
const questionText = document.getElementById('question-text')
const hintText = document.getElementById('hint-text')
const answerBox = document.getElementById('answer-box')
const submitButton = document.getElementById('submit-btn')
const hintButton = document.getElementById('hint-btn')

//IMAGE GRIDS
const level1Images = document.getElementById('level1-images')
const level2Images = document.getElementById('level2-images')
const level3Images = document.getElementById('level3-images')
const level4Images = document.getElementById('level4-images')
const level5Images = document.getElementById('level5-images')
const level6Images = document.getElementById('level6-images')
const level7Images = document.getElementById('level7-images')
const level8Images = document.getElementById('level8-images')
const level9Images = document.getElementById('level9-images')
const level10Images = document.getElementById('level10-images')

//COUNTER
let questionIndex = 0;

function startGame(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
    backgroundMusic.loop == true
    questionIndex++
    document.getElementById("parallax").style.display = "none"
    title.classList.remove('hide')
    levelText.classList.remove('hide')
    questionText.classList.remove('hide')
    answerBox.classList.remove('hide')
    submitButton.classList.remove('hide')
    hintButton.classList.remove('hide')
    level1Images.classList.remove('hide')
}

addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        submitAnswer()
    }
})

function submitAnswer(){
    var answerValue =  answerBox.value
    switch (questionIndex){
        case 1:
            if (answerValue == "SIGN"){
                questionIndex++
                answerBox.value = ""
                level1Images.classList.add('hide')
                hintText.classList.add('hide')
                level2Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ G _ T Q _ A"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break
        case 2:
            if (answerValue == "LGBTQIA"){
                questionIndex++
                answerBox.value = ""
                level2Images.classList.add('hide')
                hintText.classList.add('hide')
                level3Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: E X _ _ E _ S _ O N"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break
        case 3:
            if (answerValue == "EXPRESSION"){
                questionIndex++
                answerBox.value = ""
                level3Images.classList.add('hide')
                hintText.classList.add('hide')
                level4Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ Q _ _ L _ T _"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break
        case 4:
            if (answerValue == "EQUALITY"){
                questionIndex++
                answerBox.value = ""
                level4Images.classList.add('hide')
                hintText.classList.add('hide')
                level5Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: C _ _ T _ R E"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break
        case 5:
            if (answerValue == "CULTURE"){
                questionIndex++
                answerBox.value = ""
                level5Images.classList.add('hide')
                hintText.classList.add('hide')
                level6Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _"
                hintText.innerHTML = "HINT: L _ A _ _ R"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break
        case 6:
            if (answerValue == "LEADER"){
                questionIndex++
                answerBox.value = ""
                level6Images.classList.add('hide')
                hintText.classList.add('hide')
                level7Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: __ R _  _ N _ N G"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break 
        case 7:
            if (answerValue == "TRAINING"){
                questionIndex++
                answerBox.value = ""
                level7Images.classList.add('hide')
                hintText.classList.add('hide')
                level8Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: S _ P _ O R _"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break 
        case 8:
            if (answerValue == "SUPPORT"){
                questionIndex++
                answerBox.value = ""
                level8Images.classList.add('hide')
                hintText.classList.add('hide')
                level9Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: W _ _ L B _ I _ G"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break 
        case 9:
            if (answerValue == "WELLBEING"){
                questionIndex++
                answerBox.value = ""
                level9Images.classList.add('hide')
                hintText.classList.add('hide')
                level10Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: P _ O _ E S S _ _ N"
                correctSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break 
        case 10:
            if (answerValue == "PROFESSION"){
                questionIndex++
                answerBox.value = ""
                level10Images.classList.add('hide')
                hintText.classList.add('hide')
                title.classList.add('hide')
                answerBox.classList.add('hide')
                submitButton.classList.add('hide')
                hintButton.classList.add('hide')
                levelText.classList.add('hide')
                questionText.classList.add('hide')
                passMessage.classList.remove('hide')
                menuButton.classList.remove('hide')
                winSound.play()
            } else {
                wrongSound.play()
                document.getElementById('alert').style.display = 'block'
            }
            break    
    }
}

function showHint(){
    hintText.classList.remove("hide")
}

