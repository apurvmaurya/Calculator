var num1 = 0 ;
var num2 = 0 ;
var n1 = true ;
var n2 = true ;
var displayResult = "";
var result ;
var operator ;
var operationResult ;
var display = document.querySelector(".result");

function calculator(value)
{
    if(value>=0 && value<=9)
    {
        if(n1===true)
        {
            num1 = num1 * 10 + value ;
            displayResult = displayResult + value ;
        } 
        else if(n2===true)
        {
            num2 = num2 * 10 + value ;
            displayResult = displayResult + value ;
        } 
    } 
    else if(value==="AC") 
    {
        result = 0 ;
        displayResult = "";
        n1 = true ;
        n2 = true ;
        num1 = 0;
        num2 = 0;
    } 
    else if(value==="=") 
    {
        result = operation() ;
        num1 = result;
        displayResult = result;
        num2 = 0;
        n1=true;
    } 
    else 
    {
        if(n1===false)
        {
            num1 = operation2(operator);
            num2 = 0 ;
            n2 = true ;
        }
        operator = value;
        displayResult = displayResult + value ;
        n1 = false ;
    }
    display.innerHTML = displayResult ;
}

function operation()
{
    switch (operator)
    {
        case "+" : 
        {
            return num1 + num2 ;
        } 
        case "-" : 
        {
            return num1 - num2 ;
        } 
        case "X" : 
        {
            return num1 * num2 ;
        } 
        case "/" : 
        {
            return num1 / num2 ;
        }
        case "%" :
        {
            return num1 % num2 ;
        }
    }
}

function operation2(operator) 
{
    switch (operator)
    {
        case "+" : 
        {
            return num1 + num2 ;
        } 
        case "-" : 
        {
            return num1 - num2 ;
        } 
        case "X" : 
        {
            return num1 * num2 ;
        } 
        case "/" : 
        {
            return num1 /num2 ;
        }
        case "%" :
        {
            return num1 % num2 ;
        }   
    }
}