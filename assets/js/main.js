//const tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]




function docena(numero) {
    if (numero <= 12 && numero >= 1) {
        return ("D1")
    }
    if (numero <= 25 && numero >= 12) {
        return ("D2")
    }
    if (numero <= 36 && numero >= 25) {
        return ("D3")
    }
}

function columna(numero) {
    const columnas = [[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]]
    for (let j = 0; j < columnas.length; j++) {
        for (let i = 0; i < columnas[j].length; i++) {
            if (columnas[j][i] == numero) {
                return ("C" + (j + 1))
            }
        }
    }
}

function calle(numero) {
    const calles = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[10, 11, 12], [13, 14, 15], [16, 17, 18]], [[19, 20, 21], [22, 23, 24], [25, 26, 27]], [[28, 29, 30], [31, 32, 33], [34, 35, 36]]]
    for (let k = 0; k < calles.length; k++) {
        for (let j = 0; j < calles[k].length; j++) {
            for (let i = 0; i < calles[k][j].length; i++) {
                if (calles[k][j][i] == numero) {
                    return ("K" + (k + 1))
                }
            }
        }
    }

}
function analisis() {
    let resultado = []


    for (let i = 1; i <= 12; i++) {
        const numero = document.getElementById(`numero${i}`).value
        if (numero > 0 && numero <= 36) {
            resultado.push([numero, docena(numero), columna(numero), calle(numero)])
        }
        else {
            alert(`¡El numero ${numero} no corresponde!`)
            break
        }

    }
    console.log(resultado)
    mostrarResultado(resultado)

}

function mostrarResultado(resultado) {
    let datos = document.getElementById("datos")
    for (let i = 0; i < resultado.length; i++) {
        datos.innerHTML += `<div class="card mt-1">
                                <div class="result bg-info"><span>${resultado[i][0]}</span></div>
                                <div class="result bg-success"><span>${resultado[i][1]}</span></div>
                                <div class="result bg-danger"><span>${resultado[i][2]}</span></div>
                                <div class="result bg-warning"><span>${resultado[i][3]}</span></div>
                            </div>`
    }
}