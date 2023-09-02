//add
let products=[
    {
        name:"mobile",
        price:50000,
        quantity:50
    },
    {
        name:"Laptop",
        price:750000,
        quantity:25
    }
]
let users=[
    {
        name:"dfhsdf",
        age:20
    }
]
let productsJson=JSON.stringify(products);
localStorage.setItem("products",productsJson);
localStorage.setItem("users",JSON.stringify(users));

//local storage data lana ----getItem
let productJsonData=localStorage.getItem("products");
let productData=JSON.parse(productJsonData);
console.log(productData[0]);
