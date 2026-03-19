import Stack from "./lib/Stack.mjs"

let TorreA = new Stack
let TorreB = new Stack
let TorreC = new Stack

//inciando os discos na torre B
TorreB.push(4)
TorreB.push(3)
TorreB.push(2)
TorreB.push(1)

//removendo os discos da torre B
function mover(origem, destino) {
    if (origem.isEmpty) {
        console.log("Erro: torre de origem vazia")
        return
    }

    const disco = origem.pop()

    // Regra: não pode colocar maior sobre menor
    if (!destino.isEmpty && destino.peek() < disco) {
        console.log("Erro: movimento inválido")
        origem.push(disco) // desfaz
        return
    }

    destino.push(disco)
}

// Impressão ANTES
console.log("=== ANTES ===")
console.log("Torre A:", TorreA.print())
console.log("Torre B:", TorreB.print())
console.log("Torre C:", TorreC.print())

//Movimentação dos discos
// B → C
mover(TorreB, TorreC)

// B → A
mover(TorreB, TorreA)

// C → A
mover(TorreC, TorreA)

// B → C
mover(TorreB, TorreC)

// A → B
mover(TorreA, TorreB)

// A → C
mover(TorreA, TorreC)

// B → C
mover(TorreB, TorreC)

// B → A
mover(TorreB, TorreA)

// C → A
mover(TorreC, TorreA)

// C → B
mover(TorreC, TorreB)

// A → B
mover(TorreA, TorreB)

// C → A
mover(TorreC, TorreA)

// B → C
mover(TorreB, TorreC)

// B → A
mover(TorreB, TorreA)

// C → A
mover(TorreC, TorreA)

// Impressão DEPOIS
console.log("\n=== DEPOIS ===")
console.log("Torre A:", TorreA.print())
console.log("Torre B:", TorreB.print())
console.log("Torre C:", TorreC.print())