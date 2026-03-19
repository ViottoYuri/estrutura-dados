import Queue from "./lib/Queue.mjs"

let atendimento = new Queue()

// 1) Inserindo clientes
atendimento.enqueue("José")
atendimento.enqueue("Sérgio")
atendimento.enqueue("Joaquim")
atendimento.enqueue("Maria")
atendimento.enqueue("João")
atendimento.enqueue("Samuel")
atendimento.enqueue("Vicente")
atendimento.enqueue("Terezinha")
atendimento.enqueue("Firmino")
atendimento.enqueue("Toninho")
atendimento.enqueue("Alexandre")


//Mostrar fila
console.log("Fila Inicial:")
console.log(atendimento.print())

//1° cliente atendido
let atendido = atendimento.dequeue()
console.log("\nPaciente atendido!", atendido)
console.log(atendimento.print())//Fila após atendimento

//3 novos pacientes
console.log("\nTrês novas pacientes na fila!")
atendimento.enqueue("Rafael")
atendimento.enqueue("Isabela")
atendimento.enqueue("Cauã")

//Fila após a alteração
console.log(atendimento.print())

//Próximo da fila para atendimento
let proximo = atendimento.peek()
console.log("\nPróximo paciente: ", proximo)

// 8) Atender próximo paciente
atendimento.dequeue()

console.log("\nFila final:")
console.log(atendimento.print())