/*
Most of the time, a JavaScript application needs to work with information. Here are two examples:

An online shop – the information might include goods being sold and a shopping cart.
A chat application – the information might include users, messages, and much more.
Variables are used to store this information.

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares or defines) a variable with the name “message”:
*/

let message;

// Now, we can put some data into it by using the assignment operator =:

let message;

message = 'Hello'; // store the string

// The string is now saved into the memory area associated with the variable. We can access it using the variable name:

let message;
message = 'Hello!';

alert(message); // shows the variable content

// To be concise, we can combine the variable declaration and assignment into a single line:

let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!

// Examples of multiple variables:

let user = 'John';
let age = 25;
let message = 'Hello';

let user = 'John',
    age = 25,
    message = 'Hello';

/* 
var instead of let

In older scripts, you may also find another keyword: var instead of let:

   var message = 'Hello';
The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.

There are subtle differences between let and var, but they do not matter for us yet. We’ll cover them in detail in the chapter The old "var".
---------------------------------------------------------------------------------------------------------------------------------------------
A real-life analogy
We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

For instance, the variable message can be imagined as a box labeled "message" with the value "Hello!" in it:


We can put any value in the box.

We can also change it as many times as we want:
*/

let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

// When the value is changed, the old data is removed from the variable:
// We can also declare two variables and copy data from one into the other.

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

/* 
When the name contains multiple words, camelCase is commonly used. 
That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.
*/

//---------------------------------------------------------------------------------------------------------------------------------------------

/*
Constants
To declare a constant (unchanging) variable, use const instead of let:
*/

const myBirthday = '18.04.1982';

// Variables declared using const are called “constants”. They cannot be changed. An attempt to do so would cause an error:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

// When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

/*
Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
Benefits:

COLOR_ORANGE is much easier to remember than "#FF7F00".
It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment.

For instance:
*/
const pageLoadTime =1; /* time taken by a webpage to load */

/*
Name things right
Talking about variables, there’s one more extremely important thing.

A variable name should have a clean, obvious meaning, describe the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.

Reuse or create?
And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging.

An extra variable is good, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.

Summary
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.
*/