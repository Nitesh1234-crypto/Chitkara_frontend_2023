// console.log(+[[],[]]);
// console.log([[],[]].toString());
// console.log(" " =="");
// console.log(" "==0);

let a= [1,2,3];
console.log(a==[1,2,3]);
let b=[1,2,3];
console.log(a==b);
let c=1;
console.log(c==1);
let d= Object.assign([],a);
console.log(d);
d[1]="abc";
console.log(d);
console.log(a);
let x= [1,2,3,["2",10,6]];
let y =[...x];
y[3][1]=11;
console.log(y);
console.log(x);
let z=JSON.parse(JSON.stringify(x));

let m=c;
m=10;
console.log(m);
console.log(c);






