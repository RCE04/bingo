var sali = []
var nuevoElemento
var numero

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


    }, 1)
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
                document.getElementById("cartaJ").appendChild(nuevaEtiqueta)
                nuevaEtiqueta.setAttribute("class", generarN)
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
            let generarN = (Math.floor(Math.random() * 99) + 1)

            if (sali2.includes(generarN)) {
                index--;
            } else {
                nuevaEtiqueta.textContent = generarN;
                document.getElementById("cartaCPU").appendChild(nuevaEtiqueta)
                nuevaEtiqueta.setAttribute("class", generarN)
                sali2.push(generarN)

            }
        }
        let saltoL = document.createElement("br")
        document.getElementById("cartaCPU").appendChild(saltoL)
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
    let div = document.getElementsByClassName(numero)

    if (div.length > 0) {
        for (i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = 'rgb(255, 0, 0)'
        }
    }

}




