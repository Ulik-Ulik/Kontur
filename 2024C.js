'use strict'
const prompt = require('prompt-sync')();
let input = prompt().split(' ');
let N = input[0];
let Q = input[1];

let coord = [[],[]];
for(let i=0;i<Q;i++){
    input = prompt().split(" ");
    if (input[0]=="+"){
        coord[0].push(input[1]);
        coord[1].push(input[2]);
    }else{
        coord[0].splice(coord[0].indexOf(input[1]),1);
        coord[1].splice(coord[1].indexOf(input[1]),1);
    }
}
console.log(coord);
let count = [0,0];
let index = 0;
let temp;

for(let t of coord){
    temp =t[0];
    if (temp!=1 && temp!=N) count[index] ++
    for(let i of t){
        if (i!=1 && i!=+temp+1 && i!=temp) count[index] ++
        if(i==N && N==+temp+1) count[index]--
        temp = i;
        
    }
    index++;
}
console.log((count[0]+1)*(count[1]+1));
