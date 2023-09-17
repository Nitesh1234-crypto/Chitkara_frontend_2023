let productData=localStorage.getItem("products");
let container=document.querySelector(".container");
if(productData){
    productData=JSON.parse(productData);
    console.log(productData);
    container.innerHTML="";
    productData.forEach((product,idx)=>{
        createProduct(product);
    })
}
//helper function to add product on the page
function createProduct(product){
    let div=document.createElement("div");
    div.classList.add("productcontainer");
    div.innerHTML=`<div class="name">${product.name}</div>
    <div class="productId">${product.productId
    }</div>
   <div class=" category">${product.category}</div>
    <div class="quantity">${product.quantity}</div>
    <div class="price">Rs.${product.price}</div>
    <button class="delete">Delete</button>`
    container.append(div);
}
//delete
container.addEventListener("click",function(ev){
    let className=ev.target.className;
    if(className=="delete"){
        let deletequantity=prompt("enter the quantity you want to delete");
        console.log(deletequantity);
        let pId=ev.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        console.log(pId);
         //search product with same id
        productData.forEach((product,idx)=>{
             if(product.productId==pId){
                productData[idx].quantity-=deletequantity;
             }
        })
        localStorage.setItem("products",JSON.stringify(productData));
        let newProductData=JSON.parse(localStorage.getItem("products"));
        createProduct(newProductData);

    }
})
