import Queue from "./lib/Queue.mjs"

let filaBanco = new Queue()

// 1) Inserindo clientes
filaBanco.enqueue(101)
filaBanco.enqueue(102)
filaBanco.enqueue(103)
filaBanco.enqueue(104)
filaBanco.enqueue(105)

//Mostrar fila
console.log("Fila Inicial:")
console.log(filaBanco.print())

//1° cliente atendido
let atendido = filaBanco.dequeue()
console.log("Cliente atendido!", {atendido})
console.log(filaBanco.print())//Fila após atendimento

//2 novos clientes
filaBanco.enqueue(106)
filaBanco.enqueue(107)

//Fila após a alteração
console.log(filaBanco.print())



//Próximo da fila para atendimento
let proximo = filaBanco.peek()
console.log("Próximo cliente: ", {proximo})

// 8) Atender próximo cliente
filaBanco.dequeue()

console.log("\nFila final:")
console.log(filaBanco.print())