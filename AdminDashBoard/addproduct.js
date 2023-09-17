let name=document.querySelector("#name");
let productId=document.querySelector("#ProductId");
let category=document.querySelector("#Category");
let quantity=document.querySelector("#Quantity");
let price=document.querySelector("#Price");
let form=document.querySelector(".productForm");
console.log(name,productId,category,quantity,price,form);
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    let productData=localStorage.getItem("products")||[];
    if(productData.length>0){
        productData=JSON.parse(productData);
    }
    let newProduct={name:name.value,productId:productId.value,category:category.value,quantity:quantity.value,price:price.value};
    productData.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productData));
    form.reset();
})