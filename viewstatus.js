var x,y;
x=180;

function calculation()
{
	y=document.getElementById("amount").value;
   x=x-y;
   window.alert(y+" "+"Kg of ration distributed");
}
function viewstock()
{

	window.alert("The amount of ration in the stock is"+" "+x);
}
function otp()
{
   window.alert("Your OTP is 123987"); 
}
function attendence()
{
   window.alert("Your Attendence is Marked"); 
}

//function()