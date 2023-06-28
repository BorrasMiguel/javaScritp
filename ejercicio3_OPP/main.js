// Apartado 1 - Generacion del Array Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000

const employees = [];

function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

for (i = 0; i < 100; i++) {
    employees.push({
        name: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000)
    })
}

// Aparatado 2 Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

employees.sort((empl1, empl2) => {
    return empl1.rendimiento - empl2.rendimiento;
}) 



// Aparatado 3 Ordenar el array por salario e imprimirlo. Usar una función de flecha

employees.sort((empl1, empl2) => empl1.salario - empl2.salario);


// Aparatdo 4.  Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
// dentro del string Cargo. Usar una función nombrada como callback

function ordenarDecreciente(empl1, empl2) {
    return empl2.name.slice(9) - empl1.name.slice(9);
}

employees.sort(ordenarDecreciente);


// Apartado 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.

employees.filter(empl => empl.salario > 2500).forEach(empl => console.log(empl.name, empl.salario))


// Apartado 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ 
// y volver a hacer el punto 5.

employees.map(empl => {
    if (empl.salario < 1500) {
        empl.salario = empl.salario * 1,25;
    }
})

employees.filter(empl => empl.salario > 2500).forEach(empl => console.log(empl.name, empl.salario))


// Apartado 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

const totalCost = employees.reduce((sum, empl) => {
    sum += empl.salario * 1.15;
    return sum;
}, 0);

console.log(totalCost.toFixed(2));


// Apartado 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7.

const dismiss = employees.filter(empl => {
    if (empl.salario >= 0.3) {
        return empl;
    }
})

console.log("Sueldo medio");

const averageSalary = employees.reduce((avg, empl) => {
    avg += empl.salario;
    return avg;
}, 0) / employees.length;
console.log(averageSalary);

console.log("Subir Sueldo");

employees.map(empl => {
    if (empl.rendimiento >= 0.7) {
        empl.salario  * 1.25;
        console.log("Subida salarial a ", empl.name, empl.rendimiento);
    }
    
})

console.log(employees);

