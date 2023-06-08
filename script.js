var num1 = 0 ;
var num2 = 0 ;
var n1 = true ;
var n2 = true ;
var dot = false ;
var power = 0;
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
            if(dot===true)
            {
                num1 = num1 * Math.pow(10,power);
                num1 = num1 * 10 + value ;
                power++;
                num1 = num1/Math.pow(10,power);
            }
            else
            {
                num1 = num1 * 10 + value ;
            }
            displayResult = displayResult + value ;
        } 
        else if(n2===true)
        {
            if(dot===true)
            {
                num2 = num2 * Math.pow(10,power);
                num2 = num2 * 10 + value ;
                power++;
                num2 = num2/Math.pow(10,power);
            }
            else 
            {
                num2 = num2 * 10 + value ;
            }
            displayResult = displayResult + value ;
        } 
    } 
    else if(value==="<")
    {
        if(n1===true)
        {
            if(dot===true)
            {
                num1 = num1 * Math.pow(10,power);
                num1 = Math.floor(num1 / 10)  ;
                power--;
                num1 = num1/Math.pow(10,power);
            }
            else
            {
                num1 = Math.floor(num1 / 10) ;
            }
        } 
        else if(n2===true)
        {
            if(dot===true)
            {
                num2 = num2 * Math.pow(10,power);
                num2 = Math.floor(num2 / 10)  ;
                power--;
                num2 = num2/Math.pow(10,power);
            }
            else 
            {
                num2 = Math.floor(num2 / 10)  ;
            }
        }
        displayResult = displayResult.slice(0,-1);
    }
    else if(value==="AC") 
    {
        result = 0 ;
        displayResult = "";
        n1 = true ;
        n2 = true ;
        num1 = 0;
        num2 = 0;
        dot = false;
        power = 0 ;
    } 
    else if(value===".")
    {
        dot=true;
        displayResult = displayResult + value ;  
    }
    else if(value==="=") 
    {
        result = operation() ;
        num1 = result;
        displayResult = result.toString();
        num2 = 0;
        n1 = true;
        dot = false;
        power  = 0 ;
    } 
    else 
    {
        if(n1===false)
        {
            num1 = operation2(operator);
            num2 = 0 ;
        }
        operator = value;
        dot = false ;
        power = 0 ;
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
