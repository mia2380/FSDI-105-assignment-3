//create the user constructor
//email, password, first Name, last Name, age, address, phone number, payment, color

function User(email,password,first,last,age,address,phone,payment,color){
    //the real attributes are the next:
    this.email=email;
    this.password=password;
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.address=address;
    this.phoneNumber=phone;
    this.payment=payment;
    this.Color=color;
}

//getting the values from the inputs
let inputEmail = $("#txtEmail");
let inputPassword= $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function isValid(user){
    let valid = true;

    if(user.email=="" || user.password==""){
        valid=false;
    }

    return valid;
}

//2) get the values from the inputs
//let inputEmail = document.getElementById("txtEmail").value;
function register(){
    //3.1) create the object using the constructor
    //JS -> .value 
    //Jquery -> .val()
    let user = new User(inputEmail.val(),inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputAddress.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
    //3.2) display the object on the console
    //console.log(user);
    if(isValid(user)==true){
        saveUser(user);
    }else{
        alert("Please enter a valid username");
    }
}
    
    //3.3) create a btn on the register.html and trigger the register function