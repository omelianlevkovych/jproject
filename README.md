# Introduction
On learning the JavaScript

# Overiew notes
## Scripting language (interpretator)
Scripting languages are typically interpreted, which means that the browser runs
each line of JS code as it gets to it.

## ECMAScript
ECMAScript serves as the standard language definition (specification) for all JS implementations.

## Language notes
### Variables
var winners = 2;  
We always start with the var keyword when declaring a varible. No Exceptions!  
A global variable begins life when its JS is loaded into the page. But, your global variable's
life ends when the page goes away. Even if you reload the same page, all your global variables
are destroyed and then recreated in the newly loaded page.  
#### Global vs local vars (or wars, hm)
If you forget to declare a variable before using it, the variable will always be global
(even if the first time you use it is a function).  
functon doSmth() {
    points = 0; // This is a global variable, unfortunatelly, holy damn JS you crazy!
}
Q: I have two JS files, do those files have separate sets of global variables?  
A: There is only one global scope so every file you load sees the same set of variables.  

### User Output
1) alert("message");  
2) Think of your web page as a document. You can use a function document.wrtie("message"); to write  
arbitrary HTML and content into your page at any point.  
3) console.log("message");  
4) By directly manipulating the document. This is the way you want to be interacting with your page  
and users - using JS you can access your actual web page (DOM).

### User Input
prompt function (var mesageFromUser = prompt("enter your message:"))
If the user doesn't enter anything or closed the dialog window - the null is returned instead.

### Functions
JS doesn't care if your functions are declared before or after you use them. The truth is JS actually
makes two passes over your page: in the first pass it reads all the function definitions, and in the
second it begins executing your code.  

JS is pass-by-value (pass-by-copy). Arguments a function using are passed by value.  
Whatever happens to a parameter in the function, stays in the function. Kinda like Vegas.  
Weird Functions:  
1) What happens when we don't pass enough arguments?  
They become undefined.  
function makeTea(cups,tea) {
    // do something
}
makeTea(3); - it will be run however the tea will be undefined.  
2) What happens when we pass too many arguments?  
In this case JS ignores the extra.
3) What does a function return if it doesn't have a return statement?  
A function without a return statement returns undefined.  
