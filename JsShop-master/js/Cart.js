import { savedUsers } from "./UserManage.js";
import { currentUser } from "./app.js";
import { products } from "./products";

savedUsers.forEach(user =>{
    if (user.Username != currentUser.Username) {
        return false
    } 
});

const savedCart = localStorage.getItem("cart");
let cartProducts = [...JSON.parse(savedCart) || []];
function AddToCart(ProudctID) {
    products.forEach(product =>{
        if (product.Id == ProudctID) {
            cartProducts.push(product);
        }
    });
    localStorage.setItem("cart",JSON.stringify(cartProducts));
}