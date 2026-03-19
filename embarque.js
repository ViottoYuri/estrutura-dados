import Queue from "./lib/Queue.mjs"

let filaAeroporto = new Queue

//Adicionando os passageiros a fila
filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

//Fila Inicio
console.log("Fila inicial")
console.log(filaAeroporto.print())

//1° passageiro do embarque
let embarque = filaAeroporto.dequeue()
console.log("\nPassageiro embarcado: ", embarque)
//Fila após 1° embarque
console.log("\nFila atual:", filaAeroporto.print())

//3 novos passageiros
console.log("\n3 novos passageiros realizaram o check-in!")
filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")
//Fila após novos passageiros
console.log(filaAeroporto.print())

//próximo passageiro para embarque
let proximo = filaAeroporto.peek()
console.log("\nPróximo passageiro a embarcar: ", proximo)

//embarque do proximo
filaAeroporto.dequeue()

//Mostra a fila final
console.log("\nFila final")
console.log(filaAeroporto.print())