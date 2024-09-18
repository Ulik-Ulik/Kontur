"use strict"
const prompt = require('prompt-sync')();
let N = prompt('N ');
let mas = [];
for (let i=0;i<N;i++) mas.push(prompt().split(' '));
let Q = prompt('Q ');
let mas2 = []
for (let i=0;i<Q;i++) mas2.push(prompt().split(' '));


let temp = [];
let x = 0,y = 0,x2 = 0,y2 = 0;
let result = 'Complete';


for (let i=0;i<Q;i++){

    temp = mas2[i];
    console.log(temp[0])
    if (temp[0]=='L') x2 +=  temp[1]*-1;
    if(temp[0]=='R') x2 += temp[1]*1;
    if (temp[0]=='U') y2 += temp[1]*1;
    if(temp[0]=='D') y2 += temp[1]*-1;
    

    if (mas.find((item)=>{return x<=item[0] && item[0]<=x2 && y<=item[1] && item[1]<=y2 || x>=item[0] && item[0]>=x2 && y>=item[1] && item[0]>=y2})){
        result = 'Stop ' + (i+1);
        break
    }
    x = x2;
    y = y2;
}
alert(result);
