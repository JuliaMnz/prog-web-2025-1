let n = Number(prompt("Digite um número para calcular fatoriais até ele:"));

let fatoriais = [];

for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
        fatoriais.push(1);
    } else {
        fatoriais.push(i * fatoriais[i - 1]);
    }
}

console.log("Fatoriais:", fatoriais);
