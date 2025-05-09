let n = Number(prompt("Quantos números da sequência de Fibonacci você quer?"));

let fibonacci = [];

for (let i = 0; i < n; i++) {
    if (i === 0) {
        fibonacci.push(0);
    } else if (i === 1) {
        fibonacci.push(1);
    } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
}

console.log("Fibonacci:", fibonacci);
