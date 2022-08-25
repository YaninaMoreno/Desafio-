// ALGORITMO UTILIZANDO UN CICLO

const user = "yani";
const pass = "1234";

for (let i = 1; i <= 3; i++) {
    let username = prompt("Ingresa su usuario");
    let password = prompt("Ingresa su contraseña");
    if (username === user && password === pass) {
        console.log("Bienvenido " + user);
        break;
    } else if (i == 3) {
        console.log("Usuario bloqueado, vuelva a intentarlo luego")
    }
}