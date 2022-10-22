function saveUser(newUser){
    console.log(newUser)
    let val = JSON.stringify(newUser);//JSON.stringify converts objects into strings
    console.log(val);

    localStorage.setItem('user', newUser);
}
