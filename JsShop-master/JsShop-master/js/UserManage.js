import * as formvalidation from "./comps/formvalidation.js";

const UsernameInput = document.querySelector("#username");
const EmailInput = document.querySelector("#email");
const PasswordInput = document.querySelector("#password");

const storageUsers = localStorage.getItem("users");
const parsedStorageUsers = JSON.parse(storageUsers) || [];
export let savedUsers = [...parsedStorageUsers]; 
let users = [...savedUsers]; // This is stupid
function createUser(Username,Email,Password,Cart) {
    // Check USER PASS and EMAIL before creation of user
    if (!(formvalidation.validateEmail(Email) && formvalidation.ValidateUsername(Username) && formvalidation.validatePassword(Password))) {
        return false
    }
    const newUser = {
        Username : Username,
        Email : Email,
        Password : Password,
        Cart : Cart, // An array filled with Product ids
    };
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
}