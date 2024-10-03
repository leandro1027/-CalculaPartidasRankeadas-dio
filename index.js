function calc(vitorias, derrotas){
    const saldo = vitorias - derrotas
    let nivel
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) { 
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { 
        nivel = "Imortal";
    }
    return `O heroi tem saldo de ${saldo} está no nivel de ${nivel}`;
}

let resultado = calc(100, 10)

console.log(resultado)
