var sali = []
var nuevoElemento
var numero

const ruleta = function () {

    setInterval(() => {
        numero = Math.floor(Math.random() * 100)
        let boton = document.getElementById("boton")
        if (sali.length !== 100) {
            comprobar()
            sali.push(numero);
            boton.textContent = numero

            let nuevaEtiqueta = document.createElement("div")
            nuevaEtiqueta.textContent = numero
            document.getElementById("des").appendChild(nuevaEtiqueta)
        }



    }, 1);
}

const asignar = function () {

    for (let index = 0; index < 3; index++) {
        let sali2 = []
        for (let index = 0; index < 15; index++) {
            let nuevaEtiqueta = document.createElement("div")
            let generarN = (Math.floor(Math.random() * 50) + 51)

            if (sali2.includes(generarN)) {
                index--;
            } else {
                nuevaEtiqueta.textContent = generarN;
                document.getElementById("cartaJ").appendChild(nuevaEtiqueta)
                sali2.push(generarN)

            }
        }
        let saltoL = document.createElement("br")
        document.getElementById("cartaJ").appendChild(saltoL)
    }

    for (let index = 0; index < 3; index++) {
        let sali2 = []
        for (let index = 0; index < 15; index++) {
            let nuevaEtiqueta = document.createElement("div")
            let generarN = Math.floor(Math.random() * 50)

            if (sali2.includes(generarN)) {
                index--;
            } else {
                nuevaEtiqueta.textContent = generarN;
                document.getElementById("cartaCPU").appendChild(nuevaEtiqueta)
                sali2.push(generarN)

            }
        }
        let saltoL = document.createElement("br")
        document.getElementById("cartaCPU").appendChild(saltoL)
    }
}

function comprobar() {
    if (sali.length !== 100) {
        for (let i = 0; i < sali.length; i++)
            if (sali[i] == numero) {
                numero = Math.floor(Math.random() * 100)
                comprobar()
            }
    }

}



