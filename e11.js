var sali = []
var nuevoElemento
var numero

var contJ = 0
var contCPU = 0

const ruleta = function () {
    let cont = 0;

    setInterval(() => {
        numero = (Math.floor(Math.random() * 99) + 1)
        let boton = document.getElementById("boton")

        if (sali.length !== 99) {
            comprobar()
            sali.push(numero);
            boton.textContent = numero

            let nuevaEtiqueta = document.createElement("div")
            nuevaEtiqueta.textContent = numero
            document.getElementById("des").appendChild(nuevaEtiqueta)

            marcar()

            if (cont == 45) {
                let saltoL = document.createElement("br")
                document.getElementById("des").appendChild(saltoL)
                cont = 0
            }
            cont++
        }


    }, 100)
}

const asignar = function () {

    for (let index = 0; index < 3; index++) {
        let sali2 = []
        for (let index = 0; index < 15; index++) {
            let nuevaEtiqueta = document.createElement("div")
            let generarN = (Math.floor(Math.random() * 99) + 1)

            if (sali2.includes(generarN)) {
                index--;
            } else {
                nuevaEtiqueta.textContent = generarN;
                document.getElementById("nJ").appendChild(nuevaEtiqueta)
                nuevaEtiqueta.setAttribute("class", generarN)
                sali2.push(generarN)

            }
        }
        let saltoL = document.createElement("br")
        document.getElementById("nJ").appendChild(saltoL)
    }

    for (let index = 0; index < 3; index++) {
        let sali2 = []
        for (let index = 0; index < 15; index++) {
            let nuevaEtiqueta = document.createElement("div")
            let generarN = (Math.floor(Math.random() * 99) + 1)

            if (sali2.includes(generarN)) {
                index--;
            } else {
                nuevaEtiqueta.textContent = generarN;
                document.getElementById("nCPU").appendChild(nuevaEtiqueta)
                nuevaEtiqueta.setAttribute("class", generarN)
                sali2.push(generarN)

            }
        }
        let saltoL = document.createElement("br")
        document.getElementById("nCPU").appendChild(saltoL)
    }
}

function comprobar() {
    if (sali.length !== 99) {
        for (let i = 0; i < sali.length; i++)
            if (sali[i] == numero) {
                numero = (Math.floor(Math.random() * 99) + 1)
                comprobar()
            }
    }
}

function marcar() {
    let cartaJ = document.getElementById("nJ")
    cartaJ = cartaJ.getElementsByClassName(numero)

    let cartaCPU = document.getElementById("nCPU")
    cartaCPU = cartaCPU.getElementsByClassName(numero)




    for (i = 0; i < cartaJ.length; i++) {
        cartaJ[i].style.backgroundColor = 'rgb(255, 0, 0)'
    }


    for (j = 0; j < cartaJ.length; j++)
        if (cartaJ[j].hasAttribute("style"))
            contJ++



    for (i = 0; i < cartaCPU.length; i++) {
        cartaCPU[i].style.backgroundColor = 'rgb(255, 0, 0)'
    }

    for (j = 0; j < cartaCPU.length; j++)
        if (cartaCPU[j].hasAttribute("style"))
            contCPU++
    ganar()

}



let contV = false
function ganar() {
    if (!contV) {
        if (contJ === 45) {
            alert("ha ganado jugador")
            contV = true
        } else if (contCPU === 45) {
            alert("ha ganado CPU")
            contV = true
        } else if (contJ === 45 && contCPU === 45) {
            alert("Empate")
            contV = true
        }
    }
}