var user = prompt("Enter User Name", "Irina Zaikina");
var res = "";

if (/\d/.test(user)) 
{ 
    for (var i = 0; i < user.length; i++)
    {
        if (i % 2 == 0) 
        {
            res += user.charAt(i).toUpperCase();
        }
        else
        {
            res += user.charAt(i).toLowerCase();
        }
    }
} 
else 
{
    res = user.split("").reverse().join("");
}
alert(res);