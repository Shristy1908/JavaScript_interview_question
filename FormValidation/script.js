const form=document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function showError(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    if (username.value == "") {
      showError(username, "UserName is Required");
    } else {
      showSuccess(username);
    }
    if (email.value == "") {
      showError(email, "Email is Required");
    } else {
      showSuccess(email);
    }
     if (password.value == "") {
       showError(password, "Password is Required");
    } else {
       showSuccess(password);
    } 
    if (password2.value == "") {
        showError(password2, "Confirm Password is Required");
    } else {
        showSuccess(password2);
    } 
     
})