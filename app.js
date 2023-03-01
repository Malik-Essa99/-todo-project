var userName;
var gender;
var age;
var title;
var msgConfirm;

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
console.log(msgConfirm);