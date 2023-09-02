// let productData=[];
let myForm=document.querySelector(".myform");
let productName=document.querySelector(".name");
let productQuantity=document.querySelector(".quantity");
let productPrice=document.querySelector(".price");
myForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    console.log(productName.value ,productQuantity.value, productPrice.value);
    let newProduct={name:productName.value,price:productPrice.value,quantity:productQuantity.value};
    let productData=localStorage.getItem("products");
    if(productData.length>0){
        productData=JSON.parse(productData);
    }else{
    productData=[];
    }
    productData.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productData));
    showProduct(productData);///1
    
})
//pge pe data show krna hai
let productJson=localStorage.getItem("products");
let productInfo=JSON.parse(productJson);
console.log(productInfo);
let productList=document.querySelector(".productList")
showProduct(productInfo);
function showProduct(productData){ //2
    productList.innerHTML="";
for(let i=0;i<productData.length;i++){
    let productItem=productData[i];
    console.log(productItem);
    let li=document.createElement("li");
    li.innerHTML=`<span class="productName">${productItem.name}</span>
    <span class="productQuantity">${productItem.quantity}</span>
    <span class="productPrice">${productItem.price}</span>`
    productList.append(li);

}
}
 //3
