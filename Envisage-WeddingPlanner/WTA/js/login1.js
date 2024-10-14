function store(){

    var name = document.getElementById('name');
	var email = document.getElementById('email');
    var password = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in name');

    }else if(email.value.length == 0){
        alert('Please fill in email');

    }else if(password.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && password.value.length == 0 && email.value.length == 0){
        alert('Please fill in name  email and password');

    }else if(password.value.length > 8){
        alert('Max of 8');

    }else if(!password.value.match(numbers)){
        alert('please add 1 number');

    }else if(!password.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!password.value.match(lowerCaseLetters)){ 
        alert('please add 1 loWercase letter');

    }else{
        localStorage.setItem('name', name.value);
		localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
	var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('userName');
	var userEmail = document.getElementById('userName');
    var userPw = document.getElementById('userEmail');
    var userRemember = document.getElementById("remember");

    if((userEmail.value == storedEmail && userPw.value == storedPw) && (userEmail.value == storedEmail && userName.value == storedName)){
        alert('You are logged in.');
        
    }else{
        alert('Error on login');
    }
}