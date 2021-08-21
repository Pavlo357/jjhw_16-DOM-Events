// Task One
// 1. Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку.

document.getElementById("TaskOne").addEventListener("click", function() {
    alert("Hello");
})


//Task Two
// 2. Напишите код, который будет менять текст в инпуте при нажатии на кнопку (изначально в инпуте уже должно быть задан текст).

document.getElementById("TaskTwoButton").addEventListener("click", function() {
    if (document.getElementById("TaskTwoInput").value === "Some text") {
        document.getElementById("TaskTwoInput").value = "Other text"
    } else(document.getElementById("TaskTwoInput").value = "Some text")
});


// Task Three
// 3. Напишите код, который будет выводить alert с содержимым инпута (изначально в инпуте уже должно быть задан текст).


document.getElementById("TaskThreeButton").addEventListener("click", function() {
    let inputText = document.getElementById("TaskThreeInput").value
    alert(inputText)
});


// Task Four
// 4. Напишите код, который будет выводить alert  с содержимым инпута, возведенным в квадрат (для этого вам нужно создать инпут, 
// в который пользователь будет вводить число).

document.getElementById("TaskFourButton").addEventListener("click", function() {
    let inputText = document.getElementById("TaskFourInput").value
    alert(Math.pow(inputText, 2))
});


// Task Five
// 5. Вам необходимо создать два инпута с заданными значениями и кнопку, при нажатии на которую будет осуществляться обмен содержимым 
// между двумя инпутами (значение первого инпута должно записаться во второй, а значение второго — в первый).

document.getElementById("TaskFiveButton").addEventListener("click", function() {
    let TaskFiveInputFirst = document.getElementById("TaskFiveInputFirst").value;
    let TaskFiveInputSecond = document.getElementById("TaskFiveInputSecond").value;
    document.getElementById("TaskFiveInputFirst").value = TaskFiveInputSecond;
    document.getElementById("TaskFiveInputSecond").value = TaskFiveInputFirst;
});


// Task Six
// 6. Напишите код, который будет при нажатии на кнопку менять текст в ней.

document.getElementById("TaskSixButton").addEventListener("click", function() {
    if (document.getElementById("TaskSixButton").innerHTML === "Task Six") {
        document.getElementById("TaskSixButton").innerHTML = "Task Six Other Text"
    } else(document.getElementById("TaskSixButton").innerHTML = "Task Six")
});


// Task Seven
// 7. Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте (изначально в инпуте уже должно быть задан текст).

document.getElementById("TaskSevenButton").addEventListener("click", function() {
    if (document.getElementById("TaskSevenInput").style.color === "red") {
        document.getElementById("TaskSevenInput").style.color = "yellow"
    } else(document.getElementById("TaskSevenInput").style.color = "red")
});