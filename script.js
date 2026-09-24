"use strict";
// This enables that it runs modern js strictly, which is a good practice to avoid errors in your code.
alert("Hello, World!");
alert(3
    + 1
    + 2);
// Always put a closing semicolon at the end of a line of code. It is not required, but it is a good practice to avoid errors in your code.
let message = "Hello!";
// it defines the variable and assigns the value "Hello!" to it. The variable can be used later in the code.
alert(message);
let user = "john",
    age = 16,
    message2 = "Broski";
alert(user);
alert(age);
alert(message2);
// It defines three variables and assigns values to them. The variables can be used later in the code.
const mybirthday = "18.04.2000";
// It defines a constant variable and assigns the value "18.04.2000" to it. The value of a constant variable cannot be changed later in the code.
alert(1 / 0);
alert("not a number" / 2);
// It shows the result of dividing 1 by 0, which is Infinity, and the result of dividing a string by a number, which is NaN (Not a Number).
alert(3 * NaN);
// It shows the result of multiplying 3 by NaN, which is also NaN.
// Nan is sticky and operation involving Nan is NaN, theres only on exception which is NaN**0 is 1.
alert(`let name be ${user}`);
alert(`the result is ${2 + 2}`);
// when you use backticks, you can use ${} to insert variables or expressions into the string. In this case, it inserts the value of the variable user and the result of the expression 2 + 2 into the strings.
// you can also use string + variable name alert("let name be" + user).
let isgreater = 20 > 8
alert(isgreater);
// This defines a variable isgreater and assigns the result of the comparison 20 > 8 to it, which is true. It then shows the value of isgreater in an alert box.
let name = prompt("what is your name?", "");
alert("Hello, " + name);
// The prompt function shows a dialog box that asks the user for input. The first argument is the message to display, and the second argument is the default value (which is an empty string in this case). The user's input is then stored in the variable name, and an alert box greets the user with their name.
alert(`Welcome ${name}`);
let isKing = confirm("Are you the king?");
alert(isKing);
// The confirm function shows a dialog box with OK and Cancel buttons. It returns true if the user clicks OK, and false if the user clicks Cancel. The result is stored in the variable isKing, and an alert box shows the value of isKing.
let isOnline = true;
alert(typeof isOnline);
// it should show boolean, because isOnline is a boolean variable. The typeof operator returns a string that indicates the type of the operand.
isOnline = String(isOnline);
alert(typeof isOnline);
// it should show string, because isOnline has been converted to a string using the String() function. The typeof operator returns a string that indicates the type of the operand.
alert(isOnline);
let age2 = 25;
alert(typeof age2);
age2 = String(age2);
alert(typeof age2);
alert(age2);
let str = "345";
alert(typeof str);
let num = Number(str);
alert(typeof num);
alert(num);
// it should show number, because str has been converted to a number using the Number() function. The typeof operator returns a string that indicates the type of the operand.
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean("hello"));
alert(Boolean(""));
// it should show true, false, true, false, because 1 is truthy, 0 is falsy, a non-empty string is truthy, and an empty string is falsy. The Boolean() function converts the operand to a boolean value.
let x = -1;
alert(x);
// it should show -1, because x is assigned the value -1. The alert function shows the value of x in an alert box.
let z = 2,
    y = 3;
alert(y - z);
// it should show 1, because z is 2 and y is 3, and the - operator subtracts z from y. The alert function shows the result in an alert box.
alert(2 ** 3);
// it should show 8, because the ** operator raises 2 to the power of 3. The alert function shows the result in an alert box.
alert(5 % 2);
// it should show 1, because the % operator returns the remainder of dividing 5 by 2. The alert function shows the result in an alert box.
alert(8 ** (1 / 2));
// it should show 2.8284271247461903, because the ** operator raises 8 to the power of 1/2, which is the same as taking the square root of 8. The alert function shows the result in an alert box.
let s = "Your" + "name";
alert(s);
// it should show "Yourname", because the + operator concatenates the two strings "Your" and "name". The alert function shows the result in an alert box.
alert("1" + 2);
// it should show "12", because the + operator concatenates the string "1" and the number 2, which is converted to a string. The alert function shows the result in an alert box.
alert(2 + 2 + "1");
// it should show "41", because the + operator first adds the two numbers 2 and 2, resulting in 4, and then concatenates the string "1" to it. The alert function shows the result in an alert box.
alert("2" / 2);
// it should show 1, because the / operator divides the string "2" by the number 2, which is converted to a number. The alert function shows the result in an alert box.
alert("6" / "2");
// it should show 3, because the / operator divides the string "6" by the string "2", both of which are converted to numbers. The alert function shows the result in an alert box.
alert(6 / "2");
// it should show 3, because the / operator divides the number 6 by the string "2", which is converted to a number. The alert function shows the result in an alert box.
let apples = "9";
let oranges = "7";
alert(apples + oranges);
// it should show "16", because the + operator concatenates the two strings "9" and "7". The alert function shows the result in an alert box.
alert(+apples + +oranges);
// it should show 16, because the + operator converts the strings "9" and "7" to numbers and adds them together. The alert function shows the result in an alert box.
let h = 2;
h *= 4;
alert(h);
// it should show 8, because the *= operator multiplies h by 4 and assigns the result back to h. The alert function shows the value of h in an alert box.
let counter = 1;
counter++;
alert(counter);
// it should show 2, because the ++ operator increments counter by 1. The alert function shows the value of counter in an alert box.
counter--;
alert(counter);
// it should show 1, because the -- operator decrements counter by 1. The alert function shows the value of counter in an alert box.
alert(5 > 4);
// it should show true, because 5 is greater than 4. The alert function shows the result of the comparison in an alert box.
alert(5 != 4);
// it should show true, because 5 is not equal to 4. The alert function shows the result of the comparison in an alert box.
alert(5 == 5);
// it should show true, because 5 is equal to 5. The alert function shows the result of the comparison in an alert box.
alert(5 === 5);
// it should show true, because 5 is strictly equal to 5. The alert function shows the result of the comparison in an alert box.
alert(5 !== 5);
// it should show false, because 5 is not strictly not equal to 5. The alert function shows the result of the comparison in an alert box.
let year = prompt("What year were you born?", "");
if (year == 2009) {
    alert("Youre 17 years old");
    alert("Youre old kid");
} else {
    alert("Youre not 17 years old");
}
// it should show "Youre 17 years old" if the user inputs 2009. The prompt function asks the user for input, and the if statement checks if the input is equal to 2009. If it is, an alert box shows the message.
let born = prompt("What day were you born?", "");
if (born > 17) {
    alert("Youre old kid");
}
else if (born < 17) {
    alert("Youre young kid");
}
else { alert("Youre 17 years old"); }
// it should show "Youre old kid" if the user inputs a number greater than 17, "Youre young kid" if the user inputs a number less than 17, and "Youre 17 years old" if the user inputs 17. The prompt function asks the user for input, and the if-else statement checks the input and shows the appropriate message in an alert box.
let text = prompt("What is your age?", "4");
let message3 = (text < 3) ? "Hi, baby!" :
    (text < 18) ? "Hello!" :
        (text < 100) ? "Greetings!" :
            "What an unusual age!";
alert(message3);
// it should show "Hi, baby!" if the user inputs a number less than 3, "Hello!" if the user inputs a number less than 18, "Greetings!" if the user inputs a number less than 100, and "What an unusual age!" if the user inputs a number greater than or equal to 100. The prompt function asks the user for input, and the ternary operator checks the input and assigns the appropriate message to message3, which is then shown in an alert box. 
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 20 || isWeekend) {
    alert("Go home")
};
let hour2 = 13;
let minute = 40;
if (hour2 == 13 && minute == 40) {
    alert("The time is 13:40");
}
alert(!null);
// it should show true, because the ! operator negates the value of null, which is falsy. The alert function shows the result in an alert box.
alert(!!null);
// it should show false, because the !! operator converts null to a boolean value, which is false. The alert function shows the result in an alert box.
let player;
alert(player ?? "Newplayer");
// it should show "Newplayer", because the ?? operator returns the right-hand operand if the left-hand operand is null or undefined. In this case, player is undefined, so "Newplayer" is returned. The alert function shows the result in an alert box.
let player1 = "Gates";
alert(player1 ?? "Newplayer");
// it should show "Gates", because the ?? operator returns the left-hand operand if it is not null or undefined. In this case, player1 is assigned the value of "Gates", which is not null or undefined, so "Gates" is returned. The alert function shows the result in an alert box.
let i = 2;
while (i <= 7) {
    alert(i);
    i++;
}
let i2 = 3;
while (i2) {
    alert(i2);
    i2--;
}
let input;
do {
    input = prompt("Enter a number less than 10?", 0);
} while (input >= 10);
for (let i3 = 0; i3 < 5; i3++) {
    alert(i3);
}
let sum = 0;
while (true) {
    let value = +prompt("Enter a number?", 0);
    if (!value) break;
    sum += value;
}
alert("Sum: " + sum);
for (let i4 = 1; i4 <= 5; i4++) {
    if (i4 === 3) continue;
    alert(i4);
}
// Continue skips the one round,but keep looping while break stops everything, exits the loop completely.
let age3;

while (true) {
    age3 = prompt("Enter your age (numbers only):", "");

    if (age3 === null) break; // let them cancel if they want

    age3 = +age3; // convert to number

    if (isNaN(age3)) {
        alert("That's not a number. Please try again.");
        continue; // skip the rest, loop back and ask again
    }

    break; // valid number entered, exit the loop
}

if (age3 !== null) {
    alert("Your age is: " + age3);
}
outer: for (let b = 0; b < 5; b++) {
    for (let c = 0; c < 5; c++) {
        let value = prompt(`Enter cords ${b},${c}`, '');
        if (!value) break outer; // if empty string or canceled, then break out of both loops
    }
    alert('You have entered all the cords');
}
try {
    alert("Start of try runs");
    // it will run since no errors
    alert("End of try runs");
}
catch (err) {
    alert("An error has occured: " + err);
}
// The code will run well and skip the catch block since there are no errors in the try block. The alert function shows the messages in alert boxes.
try {
    alert("Start of try runs");
    dickson;
    alert("End of try runs");
}
catch (err) {
    alert("An error has occured: " + err);
}
let json = '{ "age": 30 }'; // incomplete data

try {
    let user = JSON.parse(json); // succeeds, no error

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // manually trigger an error
    }

    alert(user.name); // SKIPPED — throw already jumped to catch

} catch (err) {
    alert("JSON Error: " + err.message); // "JSON Error: Incomplete data: no name"
}
try {
    let user = JSON.parse(json); // Parses incoming data

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // 1. Custom validation error
    }

    blabla(); // 2. A typo/bug! Calling a function that doesn't exist

    alert(user.name);
} catch (err) {

    if (err instanceof SyntaxError) {
        alert("JSON Error: " + err.message); // 3. Handle known validation errors
    } else {
        throw err; // 4. Rethrow unknown coding bugs
    }
}
let v = prompt("Enter a number", "");
try {
    if (v != 7) {
        throw new SyntaxError("V is not 7");
    }

} catch (err) {
    if (err instanceof SyntaxError) {
        alert(err);
    }

} finally {
    alert("you finished the process")
}
function showMessage() {
    alert("Hello Kids");
}
showMessage();
showMessage();
let winner = "Dariel";
function showPlayer() {
    winner = "Peter";
    let story = "Hello " + winner;
    alert(story);
}
alert(winner);
showPlayer();
alert(winner);
// Functions stor reusable code
let catcher = "Fave";
function showCatcher() {
    let catcher = "Davido";
    let signal = "Hello " + catcher;
    alert(signal);
}
showCatcher();
alert(catcher);
function showName(from, text) {
    from = "*" + from + "*";
    alert(from + ": " + text);
}
showName("Damon", "Welcome");
showName("Vary", "Closer");
function showGreeting(from, text = "No greeting") {
    alert(from + ": " + text);
}
showGreeting("Ann");
// If theres no input from the user we can put a pre made response
function showStatus(from, text) {
    if (text === undefined) {
        text = "No text given";
        from = "*" + from + "*";
    }
    if (!from) {
        from = "No name was given"
    }
    alert(from + ": " + text);
}
showStatus("Nigel")
function showVariety(from, text) {
    text = text || "No text given";
    from = from || "No name was given";
    alert(from + ": " + text);

}
showVariety("", "Welcome");
function sum1(a, b) {
    return a + b;
}
let result = sum1(5, 10);
alert(result);
function checkAge(age5) {
    if (age5 >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}
let age5 = prompt("Are you above 18", "18");
if (checkAge(age5)) {
    alert("Access Granted");
}
else {
    alert("Access denied");
}
// Return is used to give a value back and stop a function execution.
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
function showOk() {
    alert("You agreed");
}
function showCancel() {
    alert("You canceled");
}
ask("Do you agree?", showOk, showCancel);
function ask1(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
ask1(
    "Do you accept",
    function () { alert("You accepted") },
    function () { alert("You rejected") }
);
let sum2 = (a, b) => a + b;
alert(sum2(1, 2));
if (true) {
    let value2 = 18;
    alert(value2);
}

// Variables defined inside {} only can be called in there yeah.
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter1 = makeCounter();
alert(counter1());
alert(counter1());
function sumAll(...nums) {
    let sum4 = 0;
    for (let n of nums) sum4 += n;
    return sum4;
}
alert(sumAll(1, 2));
alert(sumAll(1, 3, 5));
alert(sumAll(2, 4, 6));
function showTitle(firstname, lastname, ...title) {
    alert(firstname + " " + lastname);
    alert(title[0]);
    alert(title[1]);
    alert(title.length);
}
showTitle("Riley", "Dariel", "Kaden", "Ola");