//STARTING PAGE
const startButton = document.getElementById("start-btn")
const startMessage = document.getElementById('start-msg')

//
const passMessage = document.getElementById('pass-msg')
const menuButton = document.getElementById('menu-btn')

//LEVEL CONTENT
const title = document.getElementById('title-img')
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
    questionIndex++
    startButton.classList.add("hide")
    startMessage.classList.add('hide')
    title.classList.remove('hide')
    levelText.classList.remove('hide')
    questionText.classList.remove('hide')
    answerBox.classList.remove('hide')
    submitButton.classList.remove('hide')
    hintButton.classList.remove('hide')
    level1Images.classList.remove('hide')
}



function submitAnswer(){
    var answerValue =  answerBox.value
    switch (questionIndex){
        case 1:
            if (answerValue == "LGBTQIA"){
                questionIndex++
                level1Images.classList.add('hide')
                hintText.classList.add('hide')
                level2Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _"
                hintText.innerHTML = "HINT: _ D _ A S"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break
        case 2:
            if (answerValue == "SDEAS"){
                questionIndex++
                level2Images.classList.add('hide')
                hintText.classList.add('hide')
                level3Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ Q _ _ L _ T _"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break
        case 3:
            if (answerValue == "EQUALITY"){
                questionIndex++
                level3Images.classList.add('hide')
                hintText.classList.add('hide')
                level4Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ I V _ R S _ _ Y"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break
        case 4:
            if (answerValue == "DIVERSITY"){
                questionIndex++
                level4Images.classList.add('hide')
                hintText.classList.add('hide')
                level5Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _T _ R E _ _ Y P _"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break
        case 5:
            if (answerValue == "STEREOTYPE"){
                questionIndex++
                level5Images.classList.add('hide')
                hintText.classList.add('hide')
                level6Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ R A _ _ _ N G"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break
        case 6:
            if (answerValue == "TRAINING"){
                questionIndex++
                level6Images.classList.add('hide')
                hintText.classList.add('hide')
                level7Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ / _ _ _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ E N D _ R / _ N _ L U S _ _ I T Y"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break 
        case 7:
            if (answerValue == "GENDER INCLUSIVITY"){
                questionIndex++
                level7Images.classList.add('hide')
                hintText.classList.add('hide')
                level8Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ _ _ _ / _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ _ C L _ S _ V E / E _ _ C A _ I _ N"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break 
        case 8:
            if (answerValue == "INCLUSIVE EDUCATION"){
                questionIndex++
                level8Images.classList.add('hide')
                hintText.classList.add('hide')
                level9Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ / _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: _ I G _ / L _ N G _ _ G _"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break 
        case 9:
            if (answerValue == "SIGN LANGUAGE"){
                questionIndex++
                level9Images.classList.add('hide')
                hintText.classList.add('hide')
                level10Images.classList.remove('hide')
                levelText.innerHTML = "LEVEL " + questionIndex
                questionText.innerHTML = "_ _ _ _ _ _ / _ _ _ _ / _ _ _ _ _ _ _ _ _ _"
                hintText.innerHTML = "HINT: P _ R S _ N / W _ T H / D _ S A _ _ L _ T Y"
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break 
        case 10:
            if (answerValue == "PERSON WITH DISABILITY"){
                questionIndex++
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
            } else {
                alert("INCORRECT! Please Try Again!")
            }
            break    
    }
}

function showHint(){
    hintText.classList.remove("hide")
}