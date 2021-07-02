// Starting code
function getpassword(){
var key_value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+="

var password_length = 16;
var create_result = "";
for (var i=0; i<password_length; i++){
    var generate_ramdon_number = Math.floor(Math.random() * key_value.length);

    create_result += key_value.substring(generate_ramdon_number, generate_ramdon_number + 1);
}

document.getElementById("password").value = create_result;

}