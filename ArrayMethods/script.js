///// forEach////
//1.
let arr=[1,2,3,4,5,6];
arr.forEach(myfun);
function myfun(val,indx,arr){
    console.log(val);
}
//2.
arr.forEach(function(val,indx,arr){
  console.log(val);
})
//3. 
arr.forEach((val)=>{
    console.log(val);
})
// sum of an array
let sum=0;
arr.forEach((val)=>{
    sum+=val;
})
console.log(sum);
/////map//////
let arr1=[1,2,3,4,5];
let mul2=arr1.map((val,indx,arr)=>{
   return val*2;
});
console.log(arr1);
console.log(mul2);
let arr2=[234, 2343, 23,5432,56,25];

////filter/////
let evenArr=arr2.filter((val)=>{
    if(val%2==0) return val;
})
console.log(evenArr);

////reduce/////
let arr3=[2,5,3,7,8];
let arrSum=arr3.reduce((accu,val,indx,arr)=>{
    return accu+val;
})
console.log(arrSum);
