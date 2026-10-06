
// Catálogo ordenado de las 15 funciones que se muestran en el panel.
const catalogoFunciones = [
    // --- MATEMÁTICAS ---
    // 1. Suma dos números ingresados por el usuario.
    {
        id: 'suma', 
        nombre: "Sumar Dos Números", 
        func: sumar, 
        desc: "Ingresa dos números para sumarlos",
        params: [
            { name: 'a', label: 'Número A', type: 'number' },
            { name: 'b', label: 'Número B', type: 'number' }
        ] 
    },
    // 2. Multiplica un número por dos.
    {
        id: 'doble', 
        nombre: "Obtener Doble", 
        func: obtenerDoble, 
        desc: "Multiplica un número por 2",
        params: [{ name: 'numero', label: 'Número', type: 'number' }] 
    },
    // 3. Comprueba si un número es par o impar.
    {
        id: 'par', 
        nombre: "Verificar si es Par", 
        func: esPar, 
        desc: "Indica si el número ingresado es par o impar",
        params: [{ name: 'numero', label: 'Número', type: 'number' }] 
    },
    // 4. Genera un número aleatorio entre 1 y 100.
    {
        id: 'aleatorio', 
        nombre: "Número Aleatorio", 
        func: () => numeroAleatorio(1, 100), 
        desc: "Genera un número entre 1 y 100",
        params: null 
    },
    // 5. Encuentra el mayor de tres números.
    {
        id: 'mayor', 
        nombre: "Mayor de Tres", 
        func: obtenerMayor, 
        desc: "Encuentra el mayor entre 3 números",
        params: [
            { name: 'a', label: 'Número A', type: 'number' },
            { name: 'b', label: 'Número B', type: 'number' },
            { name: 'c', label: 'Número C', type: 'number' }
        ] 
    },
    // 6. Calcula el área total de un cilindro.
    {
        id: 'cilindro', 
        nombre: "Área Cilindro", 
        func: calcularAreaCilindro, 
        desc: "Calcula área total (radio y altura)",
        params: [
            { name: 'radio', label: 'Radio', type: 'number' },
            { name: 'altura', label: 'Altura', type: 'number' }
        ] 
    },
    // 7. Convierte grados Celsius a Fahrenheit.
    {
        id: 'celsius', 
        nombre: "Celsius a Fahrenheit", 
        func: celsiusAFahrenheit, 
        desc: "Convierte temperatura",
        params: [{ name: 'celsius', label: 'Grados °C', type: 'number' }] 
    },
    // 8. Convierte una medida en metros a centímetros.
    {
        id: 'metros', 
        nombre: "Metros a Centímetros", 
        func: metrosACentimetros, 
        desc: "Convierte longitud",
        params: [{ name: 'metros', label: 'Metros', type: 'number' }] 
    },

    // --- TEXTO ---
    // 9. Saluda al usuario usando el nombre ingresado.
    {
        id: 'saludo', 
        nombre: "Saludar Usuario", 
        func: saludar, 
        desc: "Escribe un nombre para saludar",
        params: [{ name: 'nombre', label: 'Nombre', type: 'text' }] 
    },
    // 10. Convierte el texto ingresado a mayúsculas.
    {
        id: 'mayuscula', 
        nombre: "Texto a Mayúsculas", 
        func: convertirMayusculas, 
        desc: "Convierte todo a MAYÚSCULAS",
        params: [{ name: 'texto', label: 'Texto', type: 'text' }] 
    },
    // 11. Cuenta las palabras de una frase.
    {
        id: 'palabras', 
        nombre: "Contar Palabras", 
        func: contarPalabras, 
        desc: "Cuenta cuántas palabras hay",
        params: [{ name: 'frase', label: 'Frase', type: 'text' }] 
    },
    // 12. Invierte el orden de los caracteres de un texto.
    {
        id: 'invertir_texto',
        nombre: "Invertir Texto",
        func: invertirTexto,
        desc: "Muestra el texto escrito al revés",
        params: [{ name: 'texto', label: 'Texto', type: 'text' }]
    },
    // 13. Elimina los valores repetidos de una lista.
    {
        id: 'duplicados', 
        nombre: "Eliminar Duplicados", 
        func: eliminarDuplicados, 
        desc: "Limpia un array de repetidos",
        params: [{ name: 'arr', label: 'Array (ej: 1,2,2,3)', type: 'text' }] 
    },
    // 14. Filtra una lista y conserva los números mayores que 10.
    {
        id: 'filtrar', 
        nombre: "Filtrar Mayores a 10", 
        func: filtrarMayoresA10, 
        desc: "Solo deja números > 10",
        params: [{ name: 'arr', label: 'Array (ej: 5,12,8,15)', type: 'text' }] 
    },

    // --- FECHA ---
    // 15. Obtiene la fecha y hora actuales.
    {
        id: 'fecha', 
        nombre: "Fecha Actual", 
        func: obtenerFechaActual, 
        desc: "Muestra fecha y hora actual",
        params: null 
    }
];

// 1. Crea una tarjeta interactiva para cada función del catálogo.
function inicializarPanel() {
    const contenedor = document.getElementById('contenedor-funciones');
    if (!contenedor) return;
    
    contenedor.innerHTML = ''; 
    
    catalogoFunciones.forEach(item => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'card';
        card.innerHTML = `<h3>${item.nombre}</h3><p>${item.desc}</p>`;
        card.addEventListener('click', () => prepararInterfaz(item));
        contenedor.appendChild(card);
    });
}

// 2. Muestra el formulario de entrada o ejecuta la función sin parámetros.
function prepararInterfaz(item) {
    const area = document.getElementById('area-resultados');
    const output = document.getElementById('output-texto');
    const titulo = area.querySelector('#titulo-resultado');
    
    area.classList.remove('hidden');
    titulo.textContent = item.nombre;
    
    // Si NO tiene parámetros, ejecutamos directo
    if (!item.params) {
        output.innerHTML = '';
        try {
            const resultado = item.func();
            output.innerHTML = `<span style="color:#2ecc71">✓ Resultado:</span><br><pre>${JSON.stringify(resultado, null, 2)}</pre>`;
        } catch (e) {
            output.innerHTML = `<span style="color:#e74c3c">✗ Error:</span> ${e.message}`;
        }
        return;
    }

    // SI tiene parámetros, generamos formulario
    let formHTML = '<div style="display:flex; flex-direction:column; gap:8px;">';
    
    item.params.forEach(param => {
        const valorDefault = param.default || '';
        formHTML += `
            <label style="color:#aaa; font-size:0.85rem">${param.label}:</label>
            <input type="${param.type}" id="input-${param.name}" value="${valorDefault}" 
                   style="padding:8px; border-radius:4px; border:1px solid #444; background:#222; color:white;">
        `;
    });

    formHTML += `<button onclick="ejecutarConParametros('${item.id}')" style="margin-top:10px; background:#27ae60; padding:8px; border:none; border-radius:4px; color:white; cursor:pointer;">Ejecutar</button></div>`;
    
    output.innerHTML = formHTML;
}

// 3. Convierte los datos del formulario y muestra el resultado de la función.
window.ejecutarConParametros = function(itemId) {
    const item = catalogoFunciones.find(f => f.id === itemId);
    if (!item) return;

    const valores = {};
    item.params.forEach(param => {
        const input = document.getElementById(`input-${param.name}`);
        let val = input.value;
        
        // Procesamiento especial para arrays (convertir string "1,2,3" a [1,2,3])
        if (param.name === 'arr') {
            val = val.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
        } else if (param.type === 'number') {
            val = Number(val);
        }
        
        valores[param.name] = val;
    });

    const args = item.params.map(p => valores[p.name]);
    
    try {
        const resultado = item.func(...args);
        const resultadoVisible = item.id === 'par'
            ? (resultado ? 'Es par' : 'Es impar')
            : JSON.stringify(resultado, null, 2);
        document.getElementById('output-texto').innerHTML = 
            `<span style="color:#2ecc71">✓ Resultado:</span><br><pre>${resultadoVisible}</pre>`;
    } catch (e) {
        document.getElementById('output-texto').innerHTML = 
            `<span style="color:#e74c3c">✗ Error:</span> ${e.message}`;
    }
};

// 4. Oculta el panel de resultados y formularios.
function cerrarResultado() {
    document.getElementById('area-resultados').classList.add('hidden');
}

// Inicia el panel cuando se carga este archivo.
inicializarPanel();