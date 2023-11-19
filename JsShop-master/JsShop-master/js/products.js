// Reterive Products from LocalStorage and Create new Products
// Probably have to use create element here to make DOM changes and also use a foreach on product array and make new proudcts
// out of LocalStorage Data on DOM
const savedProucts = localStorage.getItem("products");
export let products = [...JSON.parse(savedProucts) || []];
function createProduct(ptitle,pdesc,pprice,pimage,pquantity,pid) {
    const newProduct = {
        Title : ptitle,
        Description : pdesc,
        Image : pimage,
        Price : pprice,
        Quantity : pquantity,
        Id : pid,
    };
    products.push(newProduct);
    localStorage.setItem("products",JSON.stringify(products));
}