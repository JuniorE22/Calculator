
let operacionRealizada = document.getElementById("operacionRealizada");
let valor2 = "";
let operadorSeleccionado = "";

function valor(valor) {
    valor2 = valor2 + valor;
    operacionRealizada.innerHTML = valor2;

};

function operador(value) {

    operadorSeleccionado = valor2.slice(-1);
    if (["+", "-", "*", "/"].some(operador => operador === operadorSeleccionado)) {
        
        if (value !== operadorSeleccionado && isNaN(operadorSeleccionado))
            valor2 = valor2.slice(0, -1);
            valor2 = valor2 + value;
            operacionRealizada.innerHTML = valor2;
        return
    }

    valor2 = valor2 + value;
    operacionRealizada.innerHTML = valor2;

  
};

function calcular() {
    if (operacionRealizada.innerHTML = "") {
        alert("hola")
        return
    }
    postresultado = valor2 + " = ";
    resultado = eval(valor2);
    operacionRealizada.innerHTML = resultado;
    const value = JSON.stringify({postresultado, resultado });
    localStorage.setItem((localStorage.length)+1, value);
    valor2 = resultado.toString();
    mostrar();
};

function limpiar() {
    operadorSeleccionado = "";
    valor2 = "";
    operacionRealizada.innerHTML = "0";
};
function clearStorage() {
    localStorage.clear();
    mostrar();
}
function mostrar() {
    let body = document.createElement('tbody');
    body.id = 'carlulatorBody';
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = {postresultado, resultado } = JSON.parse(localStorage.getItem(key));
        let resultadoColumn = document.createElement('td');
        let actionColumn = document.createElement('td');
        let btnDelete = document.createElement('button');
        let row = document.createElement('tr');

        resultadoColumn.textContent = postresultado + resultado;
        btnDelete.textContent = 'Borrar';
        btnDelete.onclick = function () {
            localStorage.removeItem(key);
            mostrar();
            limpiar();
        }
        actionColumn.appendChild(btnDelete);
        row.appendChild(resultadoColumn);
        row.appendChild(actionColumn);
        body.appendChild(row);
    }
    document.getElementById('carlulatorBody').replaceWith(body);
};

window.onload = mostrar();