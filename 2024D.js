const prompt = require('prompt-sync')();
let alf = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
let S = prompt('S ')
let Q = prompt('Q ')
let temp, s;
for (let i=0;i<Q;i++){
    temp = prompt().split(' ');
    if (temp[0]!=1) s = S.slice(0,temp[0]-1);
    console.log('*',s);
    console.log("#",S.slice(temp[0]-1,temp[1]));
    for (let i of S.slice(temp[0]-1,temp[1])){
        s += alf[(alf.indexOf(i)+temp[1])%52]
    }
    S= s + S.slice(0,temp[0]);
    console.log(S);

}