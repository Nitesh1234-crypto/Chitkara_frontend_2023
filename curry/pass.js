pass by value
function update(a,b,c){
    c=a+b;
}
let a=10,b=20,c;
update(a,b,c);
console.log(c)


function update(a,b,c){
    c=a+b;
    return c
}
let a=10,b=20,c;
c=update(a,b,c);
console.log(c)

//pass by reference
function update1(arr){
arr[1]=arr[0]+arr[2];
}
let arr=[1,2,3,4,6];
update1(arr);
console.log(arr);
