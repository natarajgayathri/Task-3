function validate_username(){
var userinput = document.getElementById("username_input");

if(userinput.value.trim() === ""){
	document.getElementById("user_error").innerHTML = "Email required";
	document.getElementById("user_error").style.color = "#ff0000";
}
else{	
if(userinput.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
	document.getElementById("user_error").innerHTML = "Email valid!";
	document.getElementById("user_error").style.color = "#00e600";
}
else{
	document.getElementById("user_error").innerHTML = "please enter valid email eg: example@gmail.com";
	document.getElementById("user_error").style.color = "#ff0000";
}
}
}


function validate_pwd(){
var pwdinput = document.getElementById("password_input");

if(pwdinput.value.trim() === ""){
	document.getElementById("pwd_error").innerHTML = "Password required";
	document.getElementById("pwd_error").style.color = "#ff0000";
}
else{
if(pwdinput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8}$/)){
	document.getElementById("pwd_error").innerHTML = "Valid password!!";
	document.getElementById("pwd_error").style.color = "#00e600";
}
else{
	document.getElementById("pwd_error").innerHTML = "please enter valid password with uppercase, lowercase and special characters (8 characters)";
	document.getElementById("pwd_error").style.color = "#ff0000";
}
}
}