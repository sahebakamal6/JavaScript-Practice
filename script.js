// ============JAVASCRIPT SECOND ASSIGNMENT

//CHAPTER 01:Alert

// Qno 1: What does the alert function do in JavaScript?

//Answetr: alert shows a pop up box with a message to the user like warnings and feedbacks

// Qno 02: Write the code to display an alert with the message "Welcome to my website!".

//Answer:

alert('Welcome to my website!');

// Qno 03: What happens if you capitalize the alert keyword?

//Answer:the code will not run because javascript is code sensitive.

// Qno 4:Write the correct JavaScript syntax to display "Hello, world!" in an alert box.

//Answer:just write the message for example Hello World or Hello Coders in an alert 
//like the example given below

alert("Hello World!");

// Qno 5:Write a JavaScript alert statement with proper formatting and explain each part of the code.
//Answer:"alert":is a function,using this we can display a message to a user,"()":these ar parenthesis,between these round brackets we write a statement(just String like text or message cuz numbers and variable used without quotation makrs) using quotes,those quotes can be single ` `,double " " and backticks ` `.We can write string,number or different variable types in between these round brackets.at the end we use semi colon ";",which ends the alert.
alert("Saheba Kamal");

//CHAPTER 02:Variable for Strings

// Qno 1:Write code that declares a variable message, assigns the value "Hello, world!" to
// it, and then displays an alert with that message.

//Answer:

var greetingHello = "Hello World!"
alert(greetingHello);

// Qno 2:Declare a variable named age, leave it undefined, then assign the value 25 to it in a later statement. Display an alert showing the value of age.

//Answer:

var age ;
age = 25
alert(age);



// Qno 3:Declare a variable named greeting, assign it the value "Good morning!", and then
//display it in an alert. Afterwards, change the value of greeting to "Good evening!"
//and display the new value in another alert.

//Answer:

var greeting = "Good Morning!"
alert(greeting);

greeting = "Good Evening!"
alert(greeting);

// Qno 4:Create a variable called favoriteColor and assign it the value "blue". Then display an alert that says "My favorite color is blue" using the variable.

//Answer:we can do this with simple quoted gaps and even with ternary operator...first we do this with simple quoted gap then second we will try ternary operator
var favoriteColor = "Blue"
alert("My favourite color is"+ " " + favoriteColor);

alert(`My favourite color is ${favoriteColor}`);

//CHAPTER 03:Variable for Numbers

// Qno 01:Declare a variable height and assign the value 170 to it. Then, add 10 to height and store the result in a new variable newHeight. Display an alert with the new value.
// Answer:
var height = 170
var newHeight = height + 10
alert(newHeight);
// Qno 02:Declare two variables, num1 and num2, and assign them values of 50 and 30, respectively.Create a new variable sum that stores the sum of num1 and num2, and display the sum in an alert.
// Answer:
var num1 = 50
var num2 = 30
var sum = num1 + num2
alert(sum);
// Qno 03:Declare a variable numToBeAdded with the value 20. Then use the following code:Display total in an alert. What is the value of total?
// Answer:
var numToBeAdded = 20
var total = sum + numToBeAdded
alert(total);
// Qno 04:Declare a variable price with the value 120. Now add tax (10%) to price and display the total price in an alert.
// Answer:
var price = 120
var tax = price * 0.10
var totalPrice = tax + price

alert(totalPrice);
// Qno 05:Write code to create a variable myAddress and assign it your city name. Ensure your variable name follows camelCase naming convention, and then display the value in an alert.
// Answer:
var myAddress = "Karachi"
alert(myAddress);

//Qno 06:Write code to declare three variables using camelCase: userName, userEmail, and
//userPassword. Assign them appropriate string values and display them together in an alert.
//Answer:

var userName = "Saheba"
var userEmail = "sahebakamal5@gmail.com"
var userPassword = "*******"
alert("Name:" + userName + "\n"+"Email:"+ userEmail +"\n" + "Password:"+ userPassword);

//Qno 07:Declare a variable userAddress that contains spaces (i.e., try naming it like user address)and observe what happens. Then correct the name using camelCase and display the value in an alert.
//Answer:
//👇this code is showing an error because of the illegal variable name,like while giving a variable name we can't put space between variable names...
// var user address = "L-481,sec 35/D";
// alert(user address)

//so the correct code is this:
var userAddress = "L-481,sec 35/D"
alert(userAddress);

//Qno 08:Create a variable rose and assign it a value "Floribundas". Then, try accessing the variable using Rose (uppercase) and see what happens. Display both results.
//Answer:
//this code is not running because of the case sensitive issue of java script
//we write this "rose" in variable name and now in alert we write "Rose",that cuz error because rose is defined and Rose is not...!
//👇👇
// var rose = "Floribundas"
// alert(Rose)

//the correct code is here:
var rose = "Floribundas"
alert(rose)

//CHAPTER 03:Math expressions: Familiar operators

//Qno 01:Write a JavaScript statement that adds two numbers, 25 and 30, and assigns the result to a variable called sum. Then display the value in an alert.
//Answer:
var sumNumbers = 25 + 30
alert(sumNumbers);

//Qno 02:Create a variable num1 and assign it the value 25. Create another variable num2 and assign itmthe value 5. Add both variables and store the result in a new variable called sum. Display the result in an alert.
//Answer:
var Num1 = 25
var Num2 = 5
var sumNumb = Num1 + Num2
alert(sumNumb);

//Qno 03:Write a statement that assigns the remainder of 27 divided by 4 to a variable called modulusResult. Then display the value in an alert.
//Answer:this code will show the remainder of the equation
var moduleAnswer = 27 % 4
alert(moduleAnswer);

//CHAPTER 04:Math expressions: Unfamiliar operators

//Qno 01:Initialize a variable num with the value 3. Use the post-increment (num++) operator and assign the result to a new variable newNum. Display both num and newNum in alerts.
//Answer:
var numbE = 3
var newNumb = numbE++
alert(newNumb);

//Qno 02:Write a program that initializes a variable counter with the value 10. Use counter++ twice in your code, then display the final value of counter in an alert.
//Answer:
var counter = 10
counter++;
counter++;
alert(counter);

//Qno 03:Initialize a variable points with the value 20. Use the post-decrement operator
//(points--) and the pre-increment operator (++points) in separate statements.
//Display the final value of points in an alert.
//Answer:
var points = 20
points--;
++points;
alert(points);

//Qno 04:Write a program that initializes a variable number with the value 0, uses ++number three times in your code, and then displays the final value of number in an alert.
//Answer:
var numbeR = 0
++numbeR
++numbeR
++numbeR
alert(numbeR)

//CHAPTER 05:Math expressions: Eliminating ambiguity

//Qno 01:Combine parentheses and the modulus operator % to first calculate the remainder of 20 % 6 before performing the other arithmetic operations. What is the value of calculation?

//Answer:The value will be the answer of 20%6,it means the remainder(2),because in any calculation method,first parenthesis equation should be calculate and after that others.

 //Qno 02:Write an expression that calculates (6 + 2) * (5 - 3), and determine the value of expressionValue.
//Answer:
var expressionValue = (6 + 2) * (5 - 3)
alert(expressionValue);

 //Qno 03:What is the value of finalTotal in the following expression, and how does operator precedence apply here?
//Answer:the final total answer of the following expression were 16 and now we observe how did it work,as i said earlier that in math expression if we have some equation under oor outside the brackets so the bracket values should be calculate first,so there we had (6 + 2) * (5 - 3),in this exppression:first it solved bracket values:6+2=8 and 5-3=2,now we have 8 * 2,now we just have to multiply those values which will be 16.

 //Qno 04:Evaluate the value of answer and determine how JavaScript processes the following expression:
//Answer:bt applying BODMAS(BRACKET OFF,DIVISION,MULTIPLICATIO,ADDITION AND SUBTRACTION) rule,in the following expression,it solved bracket value first and after solving both brackets,it multiplied the values.

//CHAPTER 06:Prompt

//Qno 01:Write a script that asks the user, "What is your name?" and stores the answer in a variable userName. Then, display an alert that says "Hello, [userName]!".
//Answer:
var userNames = prompt('What is your name?')
alert('Hello'+' '+userNames);

//Qno 02:Create a prompt that asks the user, "How old are you?" and assigns the response to a variable age. Display an alert that says "You are [age] years old." Handle the case where the user clicks "Cancel" by displaying "No age provided" in the alert.
//Answer:
var askAge = prompt('How old are you?')
alert(askAge ? 'You are ' + askAge + ' years old' : 'No age provided');

//Qno 03:Write a prompt asking, "How many pets do you have?" and assign the response to a variable pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter anything."
//Answer:
var pets = prompt('How many pets do you have?')
alert(pets ? 'you have ' + pets + ' pets' : 'You did not enter anything');

//Qno 04:Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a number, then multiply it by 2 and display the result in an alert.
//Answer:
var questio = parseInt(prompt('Enter a number between 1 and 10'))
alert(2 * questio);


//Qno 05:Write a prompt that asks the user, "What is your favorite number?" and assigns the response to a variable favNum. If the user does not provide a response and clicks "OK", assign a default value of 7 to favNum and display it in an alert.
//Answer:
var favNum = prompt('What is your favourite number?')
alert(favNum ? + 'your fav number is ' + favNum : 7);

//CHAPTER 07:if statement

//Qno 01:Write a script that asks the user "What is the capital of France?" If the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try again!"
//Answer:
var placeQues = prompt('What is the capital of France?')

if(placeQues.toLowerCase() === "paris"){
    alert(placeQues ? 'correct' : 'you did not write the answer')
}else{
    alert('Try again...!')
}

//Qno 02:Modify the previous script to use an else statement. If the user's answer is
//correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."
//Answer:
var placeQuest = prompt('What is the capital of France?')

if(placeQuest.toLowerCase() === "paris"){
    alert(placeQuest ? 'correct' : 'you did not write the answer')
}else{
    alert('incorrect...the correct answer is Paris.')
}

//Qno 03:Write a program that asks the user, "What is the capital of the United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an if-else condition to check both possible answers.
//Answer:
var capital = prompt('What is the capital of the United Kingdom?')
if(capital.toLowerCase() === "London" || "United Kingdom"){
alert('correct..!')
}else{
    alert('incorrect...try again!')
}
//Qno 04:Modify a script to keep track of a score. Start with a score of 0. Every time the user answers a question correctly, increment the score by 1 and display the updated score.
//Answer:
var score = 0
var capital = prompt('What is the capital of the United Kingdom?')
if(capital.toLowerCase() === "London" || "United Kingdom"){
    score++ 
alert('correct..you earned '+ score + ' scores')
}else{
    alert('Incorrect...Now you have' + score + 'scores')
}

//Qno 05:Write a script that asks the user two questions: "What is the capital of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You got both right!". If only one answer is correct, display "You got one correct!".
//Answer:
var firstQues = prompt('What is the capital of Germany?')
var secQues = parseInt(prompt('What is the answer of 10 + 10'))
if (firstQues.toLowerCase() === 'berlin' && secQues === 20){
    alert('you got both right...!')
}else if(firstQues.toLowerCase() === 'berlin' || secQues === 20){
    alert('you got one correct..!')
}else{
    alert('you got both wrong...')
}
 