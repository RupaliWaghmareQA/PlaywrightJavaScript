//Assignment
function checkStatus(statusCode) 
{
    if(statusCode === 200)
    {return "Success";
    }
    else if(statusCode ===301 || statusCode ===302)
    {
        return "Redirect";
    }
    else
    {
        return "Error: " + statusCode;
    }
}

console.log(checkStatus(200));
console.log(checkStatus(404));
console.log(checkStatus(302));