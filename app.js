'use strict';
var userName;
var gender;
var age;
var title;
var msgConfirm;
var answerArr = [2];

function storeAnswers() {

    answerArr[0] = prompt("Do you like Icecream (yes/no)");
    answerArr[1] = prompt("Do you like Hiking (yes/no)");
    answerArr[2] = prompt("Do you like Coffee (yes/no)");

}

function checkAnswers(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == "") {
            arr[i] = "Invalid";
        }
    }
}

function printAnswers(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

userName = prompt("Enter your Name");
gender = prompt("Enter your Gender");

if (gender == "male") {
    title = "Mr.";
} else if (gender == "female") {
    title = "Ms.";
} else {
    title = "";
}
age = prompt("Enter your Age");
if (age <= 0) {
    alert("Your age can't be less than or equal to 0");
}
msgConfirm = confirm("Press Ok if you want to recieve a welcoming message or cancel to Skip");


if (msgConfirm == true) {
    alert("Welcome " + title + " " + userName);
}

// console.log(msgConfirm);

storeAnswers();
checkAnswers(answerArr);
printAnswers(answerArr);

