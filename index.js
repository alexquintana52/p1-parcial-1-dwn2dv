'use strict';

/*
 * Quintana Alex
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Clase Discos
class Discos {
    constructor(nombre, autor, codigo, pistas){
        this.nombre = nombre;
        this.autor = autor;
        this.codigo = codigo;
        this.pistas = pistas = [];
    };
};

// Clase Pistas
class Pistas {
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    };
};

// Array Discos y Pistas:
let discos = [];
let codigos = [];

// Función Cargar:
const Cargar = () => {

    // Función que valida el nombre
    const validarNombre = () => {

        let nombreDisco = prompt("Ingrese el nombre del disco");

        while(nombreDisco.length === 0){
            alert("Por favor complete el campo correctamente.");
            nombreDisco = prompt("Ingrese el nombre del disco nuevamente");
        }

        return nombreDisco;
    };

    // Función que valida el autor
    const validarAutor = () => {

        let nombreAutor = prompt("Ingrese el autor del disco");

        while(nombreAutor.length === 0){
            alert("Por favor complete el campo correctamente.");
            nombreAutor = prompt("Ingrese el autor del disco nuevamente");
        };

        return nombreAutor;
    };

    // Función que valida el código

    let codigoDisco;

    const validarCodigo = () => {

        codigoDisco = parseInt(prompt("Ingrese el código único del disco (1 a 999)"));

        while(isNaN(codigoDisco) || codigoDisco < 1 || codigoDisco > 999 || codigoDisco == codigos ){
            alert("Error al proporcionar el código del disco");
            codigoDisco = parseInt(prompt("Puede que haya ingresado un código que ya existe, intente nuevamente (1 a 999)"));
        };

        return codigoDisco;
    };

    // Función que valida la pista
    const validarPista = () => {

        let nombrePista = prompt("Ingrese el nombre de la pista del disco");

        while(nombrePista.length === 0){
            alert("Por favor complete el campo correctamente.")
            nombrePista = prompt("Ingrese el nombre de la pista nuevamente");
        }

        return nombrePista;
    };

    // Función que valida la duración de la pista
    const validarDuracion = () => {

        let duracionPista = parseInt(prompt("Ingrese la duración de la pista (entre 0 y 7200 segundos)"));

        while(isNaN(duracionPista) || duracionPista < 0 || duracionPista > 7200){
            alert("Por favor complete el campo correctamente");
            duracionPista = parseInt(prompt("Ingrese la duración de la pista nuevamente (entre 0 y 7200 segundos)."));
        }

        alert("Datos agregados correctamente");

        return duracionPista;
    };
    
    let nuevoDisco = new Discos();
    nuevoDisco.nombre = validarNombre();
    nuevoDisco.autor = validarAutor();
    nuevoDisco.codigo = validarCodigo();

    discos.push(nuevoDisco);
    codigos.push(nuevoDisco.codigo);

    const crearPista = () => {
        let nuevaPista = new Pistas();
        nuevaPista.nombre = validarPista();
        nuevaPista.duracion = validarDuracion();

        return nuevaPista;
    }

    do {
        nuevoDisco.pistas.push(crearPista());
    } while (confirm("¿Desea agregar otra pista?"));

    console.log(discos);
    console.log(codigos);

};




// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';
    html += `
        <p>Contador de discos: ${discos.length}</p>
    `;

    for(let disco of discos) {

        html += `
            <h3>Disco</h3>
            <ul>
                <li>Nombre: ${disco.nombre}</li>
                <li>Autor: ${disco.autor}</li>
                <li>Código: ${disco.codigo}</li>
            </ul>
        `;

        for(let pista of disco.pistas) {

            if(pista.duracion > 180) {

                html += `
                    <h3>Pista</h3>
                    <ul>
                        <li>Nombre: ${pista.nombre}</li>
                        <li>Duración: <span style="color: red;">${pista.duracion}seg</span></li>
                    </ul>
                `;

            } else {

                html += `
                    <h3>Pista</h3>
                    <ul>
                        <li>Nombre: ${pista.nombre}</li>
                        <li>Duración: ${pista.duracion}</li>
                    </ul>
                `;

            };

        };

        html += `
        <p>Contador de pistas: ${disco.pistas.length}</p>`;

    };

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};