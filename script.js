var display = document.querySelector(".result");

var displayResult = "" ;

function updateResult(value)
{
    displayResult = display.value ;
    
    if(value ==="AC")
    {
        displayResult = ""; 
    }
    
    else if(value === "=")
    {
        displayResult = calculator(display.value).toString();
    }
    
    else if(value  === "<")
    {
        displayResult = displayResult.slice(0,-1);
    }
    
    else
    {
        displayResult = displayResult + value ;
    }
    
    display.value = displayResult ; 
}

function calculator(str)
{
    var expression = str ;

    var num1 = 0;

    var num2 = 0;

    var operator = false ;

    var count = 0 ;

    var operation ;

    var length = expression.length ;

    for(var i = 0 ; i < length ; i++) 
    {
        var digit = str[i];

        if((digit !== "+") && (digit !== "-") && (digit !== "X") && (digit !== "÷") && (digit !== "%") && (digit !== "/"))
        {
            count++;

            if(i === length-1)
            {
                num2 = parseFloat(expression.slice(0));

                return perform();
            }
        }

        else 
        {
            if(operator === true)
            {
                num2 = parseFloat(expression.slice(0,count));

                expression = expression.slice(count+1);

                count = 0;

                num1 = perform();

                num2 = 0 ;
            }

            else
            {
                num1 = parseFloat(expression.slice(0,count));

                expression = expression.slice(count+1);

                count = 0 ;

                operator = true ;
            }

            operation = digit;
        }
    }

    function perform()
    {
        switch(operation)
        {
            case "+" :
            {
                return num1 + num2 ;

                break ;
            }

            case "-" :
            {
                return num1 - num2 ;

                break ;
            }

            case "X" :
            {
                return num1 * num2 ;

                break ;
            }

            case "÷" :
            {
                return num1 / num2 ;

                break ;
            }

            case "/" :
            {
                return num1 / num2 ;

                break;  
            }

            case "%" :
            {
                return num1 % num2 ;
                
                break ;
            }
        }
    }
}
