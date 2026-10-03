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
function showTerm(firstterm, secondterm, ...term) {
    alert(firstterm + " " + secondterm);
    for (let z of term) {
        alert(z);
    }
    alert(term.length);
}
showTerm("Named", "Cadrien", "philo");
let arr = [1, 2, 3, 4, 5, 6];
alert(Math.max(...arr));
let arr1 = [2, 3, 4, 5, 6, 7];
let arr2 = [6, 3, 2, 5, 7, 8];
alert(Math.max(...arr1, ...arr2));
let stri = "Hari"
alert([...stri]);
let strin = "Helio"
alert(Array.from(strin));
// This uses spread syntax to spread out each character of the string
let arr3 = [5, 3, 5, 6, 8, 9];
let arr4 = [3, 2, 5, 6, 7, 8];
let merged = [...arr4, 2, ...arr3, 0];
alert(merged)
// Recursive
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
alert(pow(2, 3));
/*a function that keeps calling itself with a shrinking/simpler version of the problem, until it hits a condition (the base case) where it can answer directly without calling itself again and then all those paused calls resume and combine their answers on the way back up. */
function triple(x) {
    return x * 3
}
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}
triple = cachingDecorator(triple);
alert(triple(5));
alert("Again: " + triple(5));
alert(triple(2));
alert("Again: " + triple(2));

function slow(a, b) {
    return a + b;
}
function cachingdecorator1(funct) {
    let val = new Map();
    return function (...args) {
        let key = args.join(",")
        if (val.has(key)) {

            return val.get(key);
        }

        let result1 = funct(...args);
        val.set(key, result1);
        return result1;
    }
}
slow = cachingdecorator1(slow);
alert(slow(5, 8));
// That was a task
function fib(v) {
    if (v <= 1) {
        return v
    } return fib(v - 1) + fib(v - 2)
}
function cachingdecorator2(functi) {
    let fibi = new Map();
    return function fib(v) {
        if (fibi.has(v)) {
            return fibi.get(v);

        }
        let result2 = functi(v);
        fibi.set(v, result2);
        return result2;
    }
}
fib = cachingdecorator2(fib)
alert(fib(10));
alert("Again: " + fib(10));
// Fibonachi task
function showTask() {
    alert("Ready player one")
}

function once(functio) {
    let showed = false;
    return function () {
        if (showed) {
            return;
        }
        functio();
        showed = true;
    };
}
showTask = once(showTask);
showTask();
showTask();
// I practiced the syntax that makes the progeam only run once 
function makeToggle() {
    let state = "off";
    return function () {
        if (state === "off") {
            state = "on"
        } else {
            state = "off"
        }
        return state;
    };
}
let toggle1 = makeToggle();
alert(toggle1());
alert(toggle1());
alert(toggle1());
// Practice task on closures
function makeID() {
    let counti = 0
    return function () {
        counti++
        return counti;
    }
}
let ID = makeID();
alert(ID());
alert(ID());
alert(ID());
// ID generator
function makeAccumulator() {
    let countii = 0
    return function (x) {
        countii += x
        return countii;
    }
}
let accumulator = makeAccumulator();
alert(accumulator(10));
alert(accumulator(15));
// Built an accumulator
function multiply(a, b) {
    return a * b;
}
function memoize(functio) {
    let valu = new Map();
    return function (...spi) {
        let key1 = spi.join(",");
        if (valu.has(key1)) {
            return valu.get(key1);
        } let result2 = functio(...spi);
        valu.set(key1, result2);
        return result2;
    }
}
multiply = memoize(multiply);
alert(multiply(5, 8));
alert(multiply(5, 8));
// Objects
let user2 = {
    Name: "Peter",
    age: 4,
    Sex: "Male",
    "like friends": true,
};
alert(user2.Name);
alert(user2.age);
alert(user2.Sex);
alert(user2["like friends"]);
// delete user.Name : This is used to remove an operator.
let fruit = prompt("How many fruits do you want", "apple")
let bag = {
    [fruit]: 5
};
alert(bag.apple);
function makeAge(name, age) {
    return {
        name,
        age,
    };
}
let user3 = makeAge("isiah", 50);
alert(user3.age);
alert(user3.name);
let valve = {
    table: "Exists",
    nummbur: 50,
};
let checker = "table"
let checker1 = "nummbur"
alert(checker in valve);
alert(checker1 in valve);
// The in syntax check if a value exists then gives true or false
let play = {
    name1: "Verity",
    age: 20000,
    isyellow: true,
};
for (let key1 in play) {
    alert(key1);
    alert(play[key1]);
}
// Using the for in loop
let fruits = ["Banana", "Oranges", "Watermelon"]
alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);
// Arrays start numbering from 0
let fruits1 = ["Apple", "Pear", "Corn"];
alert(fruits1.pop());
alert(fruits1);
// The pop() alerts the last value then takes it out of the array
let fruits2 = ["Watermelon", "Grape"];
fruits2.push("Pear");
alert(fruits2);
let fruits3 = ["Apple", "Orange", "Grapes"];
alert(fruits3.shift());
alert(fruits3);
// fruits .unshifts return the first element
let arrr = ["one", "two", "three"];
delete arrr[1];
alert(arrr[1]);
alert(arrr.length);
// The delete removes a variable
let elements = ["I", "am", "Javascript"];
elements.splice(0);
alert(elements);
let element = ["You", "Know", "I", "am", "Javascript"];
element.splice(1, 3, "are");
alert(element);
let arrr1 = [1, 2, 3, 4, 5];
alert(arrr1.slice(1, 4));
let arr5 = [1, 2];
alert(arr5.concat([4, 5]));
["Avery", "Kai", "London"].forEach(alert);
let arr6 = [1, 2, 3, 4, 5];
alert(arr6.indexOf(5));
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. In this case, it returns 4 because 5 is at index 4 in the array arr6. The alert function shows the result in an alert box.
alert(arr6.includes(NaN));
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. In this case, it returns false because NaN is not present in the array arr6. The alert function shows the result in an alert boxlet 
let users1 = [
    { id: 1, name: "April" },
    { id: 2, name: "Damon" },
    { id: 3, name: "Dariel" },
    { id: 4, name: "Darius" }
];
alert(users1.find(item => item.id == 1).name);
alert(users1.findIndex(user => user.name == "Damon"));
// The find() method returns the value of the first element in the array that satisfies the provided testing function. In this case, it returns the object with id 1, and then we access its name property to get "April". The alert function shows the result in an alert box. The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. In this case, it returns 1 because "Damon" is at index 1 in the users1 array. The alert function shows the result in an alert box.
let mostUsers = users1.filter(item => item.id < 4);
alert(mostUsers.length);
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it returns an array of objects with id less than 4, which are the first three users. The alert function shows the length of the new array, which is 3.
let usersMost = users1.map(item => item.name + " is my friend");
alert(usersMost[0]);
alert(usersMost[1]);
alert(usersMost[2]);
alert(usersMost[3]);
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it returns an array of strings that append "is my friend" to each user object. The alert function shows each string in an alert box.
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let arr7 = [1, 2, 15];
arr7.sort(compareNumeric);
alert(arr7);
// The sort() method sorts the elements of an array in place and returns the sorted array. In this case, we provide a compare function that compares two numbers a and b. The function returns 1 if a is greater than b, 0 if they are equal, and -1 if a is less than b. This ensures that the numbers are sorted in ascending order. The alert function shows the sorted array in an alert box.
let arr8 = [1, 2, 3, 4, 5];
arr8.sort((a, b) => a - b);
alert(arr8);
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert(countries.sort((a, b) => a.localeCompare(b)));
alert(arr8.reverse());
let names5 = "Draco , Harry, Hermione, Ron".split(", ", 2);
alert(names5);
let arr9 = [1, 2, 3, 4, 5];
let srt2 = arr9.join(";");
alert(srt2);
let arr10 = [1, 2, 3, 4, 5];
let result4 = arr10.reduce((sum, current) => sum + current, 0);
alert(result4);
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, we provide a reducer function that takes two arguments: sum and current. The function adds the current value to the sum and returns the new sum. The second argument to reduce() is the initial value of sum, which is 0. The alert function shows the final result, which is the sum of all elements in arr10.
alert(Array.isArray([]));
alert(Array.isArray({}));
// The Array.isArray() method determines whether the passed value is an array. In this case, it returns true for an empty array and false for an empty object. The alert function shows the result in an alert box.
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};
for (let num of range) {
    alert(num);
}
// The code defines an object `range` that represents a range of numbers from `from` to `to`. It implements the iterable protocol by defining a method with the key `[Symbol.iterator]`, which initializes the current value and returns the iterator object (the `range` object itself). The `next()` method is defined to return the next value in the range until it reaches the end, at which point it returns `{ done: true }`. The `for...of` loop iterates over the `range` object, alerting each number in the range from 1 to 5.
let word = "Hellium";
let it = word[Symbol.iterator]();
while (true) {
    let result = it.next();
    if (result.done) break;
    alert(result.value);
}
let arrLike = {
    0: "Man",
    1: "Woman",
}
let arrLike1 = Array.from(arrLike);
alert(arrLike1.pop());
// The code defines an object `arrLike` that has numeric keys and string values, resembling an array-like structure. The `Array.from()` method is used to create a new array from the `arrLike` object. The resulting array is stored in `arrLike1`. The `pop()` method is then called on `arrLike1`, which removes and returns the last element of the array, which is "Woman". The alert function shows the result in an alert box.
let visit = { name: "John" }
let map = new Map();
map.set(visit, 123);
alert(map.get(visit));
// The code defines an object `visit` with a property `name` set to "John". A new `Map` object is created and stored in the variable `map`. The `set()` method is called on the `map`, using the `visit` object as the key and the number 123 as the value. The `get()` method is then called on the `map` with the `visit` object as the key, which retrieves the value associated with that key (123). The alert function shows the result in an alert box.
let recepies = new Map([
    ["apple", 5],
    ["banana", 10],
    ["grapefruit", 15],
]);
for (let vegetables of recepies.keys()) {
    alert(vegetables);
}
for (let amount of recepies.values()) {
    alert(amount);
}
for (let entry of recepies.entries()) {
    alert(entry);
}
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// prices is { banana: 1, orange: 2, meat: 4 }
alert(prices.orange);
let prices1 = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
prices1.add(john);
prices1.add(pete);
prices1.add(mary);
prices1.add(john);
alert(prices1.size);
// The code creates a new `Set` object called `prices1`. It then creates three objects: `john`, `pete`, and `mary`, each with a `name` property. The `add()` method is called on the `prices1` set to add these objects. Since sets only store unique values, adding `john` again does not increase the size of the set. Finally, the `size` property of the set is alerted, which shows the number of unique objects in the set (3).
alert(prices1.size);
for (let set of prices1) {
    alert(set.name);
}
let [firstName, secondName] = "Daniel Lala".split(",");
alert(firstName);
alert(secondName);
// The code uses destructuring assignment to extract values from an array returned by the `split()` method. The string "Daniel Lala" is split into an array of two elements: ["Daniel", "Lala"]. The first element is assigned to `firstName`, and the second element is assigned to `secondName`. The alert function shows the values of `firstName` and `secondName` in alert boxes.  
let [Firstname, , title] = ["Augustus", "Lander", "III", "Esq"];
alert(title);
// The code uses destructuring assignment to extract values from an array. The array ["Augustus", "Lander", "III", "Esq"] has four elements. The first element is assigned to `Firstname`, the second element is skipped (indicated by the empty space between the commas), and the third element is assigned to `title`. The alert function shows the value of `title`, which is "III".
let [name1, name2, ...rest] = ["Angstrom", "Levy", "The Portal", "Traveler", "The Wanderer"];
alert(rest.length);
alert(rest[0]);
alert(rest[1]);
// The code uses destructuring assignment to extract values from an array. The first two elements of the array are assigned to `name1` and `name2`, while the rest of the elements are collected into the `rest` array using the rest operator (`...`). The alert function shows the length of the `rest` array (3), as well as the first and second elements of the `rest` array, which are "The Portal" and "Traveler", respectively. 
let [Name = prompt("name?", ""), Age = prompt("age?", "")] = [];
alert(Name);
alert(Age);
// The code uses destructuring assignment with default values to extract values from an empty array. Since the array is empty, the default values are used. The `prompt()` function is called to ask the user for their name and age, and the input is assigned to `Name` and `Age`, respectively. The alert function shows the values of `Name` and `Age` in alert boxes.
let options = {
    title1: "Menu",
    width: 100,
    height: 200
}
let { title1, width, height } = options;
alert(title1);
alert(width);
alert(height);
// The code uses destructuring assignment to extract values from the `options` object. The properties `title1`, `width`, and `height` are extracted and assigned to variables with the same names. The alert function shows the values of `title1`, `width`, and `height` in alert boxes. Note that there is a typo in the second alert statement (`aletrt` should be `alert`).
let option = {
    name7: "Variable",
}
let { name7 = prompt("name?", ""), value = prompt("value?", "") } = option;
// The code uses destructuring assignment with default values to extract properties from the `option` object. The property `name7` is extracted and assigned to the variable `name7`. Since the `value` property does not exist in the `option` object, the default value is used, which prompts the user for input using the `prompt()` function. The input is assigned to the variable `value`.
let options1 = {
    title2: "Menu",
    width: 100,
    height: 200
}
let { title2, ...size } = options1;
alert(size.width);
alert(size.height);
// The code uses destructuring assignment with the rest operator to extract properties from the `options1` object. The property `title2` is extracted and assigned to the variable `title2`, while the remaining properties (`width` and `height`) are collected into a new object called `size`. The alert function shows the values of `size.width` and `size.height` in alert boxes. Note that there is a typo in the second alert statement (`aert` should be `alert`).
let title3, width1, height2;
({ title3, width1, height2 } = { title3: "Menu", width1: 100, height2: 200 });
alert(title3);
alert(width1);
alert(height2);
// The code uses destructuring assignment to extract properties from an object and assign them to existing variables. The properties `title3`, `width1`, and `height2` are extracted from the object `{ title3: "Menu", width1: 100, height2: 200 }` and assigned to the corresponding variables. The alert function shows the values of `title3`, `width1`, and `height2` in alert boxes.
let options2 = {
    title4: "Menu",
    size: {
        height3: 200,
        width2: 100
    },
    items: ["Cake", "Donut"],
    extra: true
};
let {
    size: {
        height3,
        width2
    },
    items: [item1, item2],
    title4 = "Menu"
} = options2;
alert(title4);
alert(height3);
alert(width2);
alert(item1);
alert(item2);
// The code uses nested destructuring assignment to extract values from the `options2` object. The properties `height3` and `width2` are extracted from the nested `size` object, while the elements of the `items` array are extracted into `item1` and `item2`. The property `title4` is also extracted with a default value of "Menu". The alert function shows the values of `title4`, `height3`, `width2`, `item1`, and `item2` in alert boxes.    

