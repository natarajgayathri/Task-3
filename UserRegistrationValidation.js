function validate_firstname() {
	var firstname_input = document.getElementById("firstname");

	if (firstname_input.value.trim() === "") {
		document.getElementById("firstname_error").innerHTML = "Firstname required";
		document.getElementById("firstname_error").style.color = "#ff0000";
	}
	else {
		if (firstname_input.value.match(/^[a-zA-Z\-]+$/)) {
			document.getElementById("firstname_error").innerHTML = "valid firstname";
			document.getElementById("firstname_error").style.color = "#00e600";
		}
		else {
			document.getElementById("firstname_error").innerHTML = "Not valid, field accepts only character letters";
			document.getElementById("firstname_error").style.color = "#ff0000";
		}
	}
}

function validate_lastname() {
	var lastname_input = document.getElementById("lastname");

	if (lastname_input.value.trim() === "") {
		document.getElementById("lastname_error").innerHTML = "Lastname required";
		document.getElementById("lastname_error").style.color = "#ff0000";
	}
	else {
		if (lastname_input.value.match(/^[a-zA-Z\-]+$/)) {
			document.getElementById("lastname_error").innerHTML = "valid lastname";
			document.getElementById("lastname_error").style.color = "#00e600";
		}
		else {
			document.getElementById("lastname_error").innerHTML = "Not valid, field accepts only character letters";
			document.getElementById("lastname_error").style.color = "#ff0000";
		}
	}
}

function dob() {
	var today_date = new Date();
	var date = today_date.getDate();
	var month = today_date.getMonth() + 1;
	var year = today_date.getUTCFullYear();

	if (today_date < 10) {
		today_date = "0" + today_date;
	}
	if (month < 10) {
		month = "0" + month;
	}

	var full_date = year + "-" + month + "-" + date;
	document.getElementById("date_of_birth").setAttribute("max", full_date);
}

function validate_username() {
	var userinput = document.getElementById("username_input");

	if (userinput.value.trim() === "") {
		document.getElementById("user_error").innerHTML = "Email required";
		document.getElementById("user_error").style.color = "#ff0000";
	}
	else {
		if (userinput.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
			document.getElementById("user_error").innerHTML = "Email valid!";
			document.getElementById("user_error").style.color = "#00e600";
		}
		else {
			document.getElementById("user_error").innerHTML = "please enter valid email eg: example@gmail.com";
			document.getElementById("user_error").style.color = "#ff0000";
		}
	}
}

function populateCities() {

	var citiesByState = {
		"Tamilnadu": ["Tiruppur", "Coimbatore", "chennai"],
		"Kerala": ["Kochi", "Kanpur"],
		"Maharashtra": ["Mumbai", "Pune", "Nagpur"]
	};

	var stateSelect = document.getElementById("stateSelect");
	var citySelect = document.getElementById("citySelect");
	var selectedState = stateSelect.value;

	citySelect.innerHTML = "<option value=''>Select a city</option>";

	if (selectedState) {
		var cities = citiesByState[selectedState];
		for (var i = 0; i < cities.length; i++) {
			var option = document.createElement("option");
			option.value = cities[i];
			option.text = cities[i];
			citySelect.appendChild(option);
		}
	}
}

function validate_pwd() {
	var pwdinput = document.getElementById("password_input");

	if (pwdinput.value.trim() === "") {
		document.getElementById("pwd_error").innerHTML = "Password required";
		document.getElementById("pwd_error").style.color = "#ff0000";
	}
	else {
		if (pwdinput.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8}$/)) {
			document.getElementById("pwd_error").innerHTML = "Valid password!!";
			document.getElementById("pwd_error").style.color = "#00e600";
		}
		else {
			document.getElementById("pwd_error").innerHTML = "please enter strong password upto 8 characters";
			document.getElementById("pwd_error").style.color = "#ff0000";
		}
	}
}

function confrim_password() {
	var pwdinput = document.getElementById("password_input").value;
	var confrim_pwd = document.getElementById("confrim_pwd").value;
	if (pwdinput === confrim_pwd) {
		document.getElementById("pwd_confrim").innerHTML = "Password matched!!";
		document.getElementById("pwd_confrim").style.color = "#00e600";
	}
	else {
		document.getElementById("pwd_confrim").innerHTML = "Password not matched";
		document.getElementById("pwd_confrim").style.color = "#ff0000";
	}
}