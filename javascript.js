/*
Завдання, в якому необхідно використати IF.
1. Запросіть у користувача число та визначіть чи воно додат-
не, від’ємне або нуль.
2. Запросіть у користувача його вік та перевірте коректність
введених даних (0–120 років).
3. Запросіть у користувача число і виведіть його модуль
(||7| = 7, |-7| = 7).
4. Запросіть у користувача час (години, хвилини, секунди) та
перевірте коректність введених даних.
5. Запросіть координати точки (x, y) та визначіть номер чвер-
ті, в яку потрапила ця точка. Необхідно врахувати випад-
ки потрапляння точки на осі X або Y або на початок коор-
динат.
*/
//--

/*
//1.
let number = parseFloat(prompt("Enter num: "));
if (number > 0) 
{
    console.log("You entered a positive num.");
} 
else if (number < 0) 
{
    console.log("You entered a negative num.");
} 
else 
{
    console.log("You entered a zero.");
}

//2.
let age = parseInt(prompt("How old are you?: "));
if (age >= 0 && age <= 120) 
{
    console.log("Your age is correct.");
} 
else 
{
    console.log("Your age is incorrect.");
}

//3.
let num = parseFloat(prompt("Enter num: "));
let absoluteValue = Math.abs(num);
console.log("Amount module: ", absoluteValue);

//4.
let hours = parseInt(prompt("Hours: "));
let minutes = parseInt(prompt("Minutes: "));
let seconds = parseInt(prompt("Seconds: "));
if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) 
{
    console.log("Time is correct.");
} 
else 
{
    console.log("Time is incorrect.");
}

//5.
let x = parseFloat(prompt("Enter coordinate X: "));
let y = parseFloat(prompt("Enter coordinate Y: "));
if (x > 0 && y > 0) 
{
    console.log("The point is in the first quarter.");
} 
else if (x < 0 && y > 0) 
{
    console.log("The point is in the second quarter.");
} 
else if (x < 0 && y < 0) 
{
    console.log("The point is in the third quarter.");
} 
else if (x > 0 && y < 0) 
{
    console.log("The point is in the fourth quarter.");
} 
else if (x === 0 && y !== 0) 
{
    console.log("The point lies on the Y-axis.");
} 
else if (x !== 0 && y === 0) 
{
    console.log("The point lies on the X-axis.");
} 
else 
{
    console.log("The point is located at the origin.");
}
*/

/*
Завдання, в якому необхідно використати SWITCH.
1. Запросіть у користувача номер місяця та виведіть на екран
його назву.
2. Реалізуйте калькулятор. Користувач вводить 2 числа та
знак (+ - /). Залежно від введеного знака розв’яжіть при-
клад та виведіть результат.
*/
//--

/*
//1.
let monthNumber = parseInt(prompt("Enter month num: "));
let monthName;
switch (monthNumber) 
{
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Incorrect.";
}
console.log("Month Name: ", monthName);

//2.
let num1 = parseFloat(prompt("Enter first num: "));
let operator = prompt("Enter operation (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter second name: "));
let result;
switch (operator) 
{
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) 
        {
            result = num1 / num2;
        } 
        else 
        {
            result = "Dividing by zero!";
        }
        break;
    default:
        result = "Incorrect.";
}
console.log("Result: ", result);
*/

/*
Завдання, в якому необхідно використати тернарний
оператор.
1. Запросіть 2 числа і виведіть більше з них.
2. Запросіть 1 число та перевірте його на кратність 5.
3. Запросіть у користувача назву планети. Якщо користувач
ввів «Земля» або «земля», то виведіть «Привіт, землянине!».
В інших випадках виведіть «Привіт, інопланетянине!».
*/
//--
//1.
let num1 = parseFloat(prompt("Enter first num: "));
let num2 = parseFloat(prompt("Enter second num: "));
let biggerNumber = (num1 > num2) ? num1 : num2;
console.log("Bigger num: ", biggerNumber);

//2.
let number = parseInt(prompt("Enter num: "));
let multipleOfFive = (number % 5 === 0) ? "The number is a multiple of 5." : "The number is a not multiple of 5.";
console.log(multipleOfFive);

//3.
let planetName = prompt("Enter planet name: ");
let greeting = (planetName.toLowerCase() === "Earth") ? "Hello, earthling!" : "Hello, alien!";
console.log(greeting);
