let a = [6, 4, 15, 10];

console.log (a.sort ());
console.log (a.sort ((a,b) => a-b));
console.log (a.sort ((a,b) => b-a));


// this is due to unicode char