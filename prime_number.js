let count=0;
let array=[1,2,3,4,5,6,7,8,9,11,1,21,13,37];
for(let i=0; i<array.length; i++){
if(array[i]%i==0){
count++;
}
}
if(count==0){
console.log("prime number");
}
else{
console.log("Not a prime number");
}