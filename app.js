// --- DATOS INICIALES (Todos en precio 0) ---
const initialProducts = [
    { id: "1", name: "Aceite", price: 0 }, { id: "2", name: "Agua", price: 0 }, { id: "3", name: "Arroz 1Kg", price: 0 },
    { id: "4", name: "Atún", price: 0 }, { id: "5", name: "Azúcar Blanca 1Kg", price: 0 }, { id: "6", name: "Azúcar Bolsa 1 kg", price: 0 },
    { id: "7", name: "Bombon", price: 0 }, { id: "8", name: "Botellitas de Chile", price: 0 }, { id: "9", name: "Botonetas", price: 0 },
    { id: "10", name: "Café Carico", price: 0 }, { id: "11", name: "Café del rincon Chiquito", price: 0 }, { id: "12", name: "Café Expreso", price: 0 },
    { id: "13", name: "Café Mate", price: 0 }, { id: "14", name: "Café Guantanamo", price: 0 }, { id: "15", name: "Café Rincon Grande", price: 0 },
    { id: "16", name: "Café Ritual", price: 0 }, { id: "17", name: "Café Los Mauri", price: 0 }, { id: "18", name: "Café Santiago", price: 0 },
    { id: "19", name: "Café Pablo", price: 0 }, { id: "20", name: "Caldito de pollo", price: 0 }, { id: "21", name: "Caldito de res", price: 0 },
    { id: "22", name: "Cangrejito", price: 0 }, { id: "23", name: "Caramelo de Leche", price: 0 }, { id: "24", name: "Chicle", price: 0 },
    { id: "25", name: "Chicharo", price: 0 }, { id: "26", name: "Cerveza Blander Blau", price: 0 }, { id: "27", name: "Cerveza Bucanero", price: 0 },
    { id: "28", name: "Cerveza Cristal", price: 0 }, { id: "29", name: "Cerveza Hollandia", price: 0 }, { id: "30", name: "Cerveza Kroon", price: 0 },
    { id: "31", name: "Cerveza oka", price: 0 }, { id: "32", name: "Cerveza Royal Duke", price: 0 }, { id: "33", name: "Cerveza Wigmill", price: 0 },
    { id: "34", name: "Chanceller", price: 0 }, { id: "35", name: "Caramelo", price: 0 }, { id: "36", name: "Chocolate", price: 0 },
    { id: "37", name: "Chupa Chupa", price: 0 }, { id: "38", name: "Crema Vie chiquita", price: 0 }, { id: "39", name: "Coditos Chiquitos", price: 0 },
    { id: "40", name: "Crema Vie", price: 0 }, { id: "41", name: "Cepillo dental", price: 0 }, { id: "42", name: "Dulce Paradise", price: 0 },
    { id: "43", name: "Dulce de guayaba", price: 0 }, { id: "44", name: "Flan", price: 0 }, { id: "45", name: "Fruity Cake", price: 0 },
    { id: "46", name: "Frijol Negro 1Kg", price: 0 }, { id: "47", name: "Galleta de sal", price: 0 }, { id: "48", name: "Galleta Maria Grande", price: 0 },
    { id: "49", name: "Galleta Salit Block", price: 0 }, { id: "50", name: "Galleta Yumy", price: 0 }, { id: "51", name: "Galletas Lmore", price: 0 },
    { id: "52", name: "Galletas Pilar", price: 0 }, { id: "53", name: "Galletas Pilar Saladas", price: 0 }, { id: "54", name: "Galletas Sartinas", price: 0 },
    { id: "55", name: "Gofio Pistacho", price: 0 }, { id: "56", name: "Gelatina", price: 0 }, { id: "57", name: "Gelatina Pgha", price: 0 },
    { id: "58", name: "Gomita surtida", price: 0 }, { id: "59", name: "Hamburguesa", price: 0 }, { id: "60", name: "Huevo sorpresa", price: 0 },
    { id: "61", name: "Huevito", price: 0 }, { id: "62", name: "Huevo Carton", price: 0 }, { id: "63", name: "Huevo x unidad", price: 0 },
    { id: "64", name: "Jugo Cajita", price: 0 }, { id: "65", name: "Jugo de lata", price: 0 }, { id: "66", name: "Leche condensada", price: 0 },
    { id: "67", name: "Higado", price: 0 }, { id: "68", name: "Mortadella", price: 0 }, { id: "69", name: "Lucky", price: 0 },
    { id: "70", name: "Malta", price: 0 }, { id: "71", name: "Malvadisco", price: 0 }, { id: "72", name: "Natilla", price: 0 },
    { id: "73", name: "Mayonesa", price: 0 }, { id: "74", name: "Maiz lata", price: 0 }, { id: "75", name: "Menta Plus", price: 0 },
    { id: "76", name: "Moneditas de chocolate", price: 0 }, { id: "77", name: "Mantequilla", price: 0 }, { id: "78", name: "Mortadella en lata", price: 0 },
    { id: "79", name: "Naranja Agria", price: 0 }, { id: "80", name: "Nutela", price: 0 }, { id: "81", name: "Nuti Cream", price: 0 },
    { id: "82", name: "Mortadella chiquita", price: 0 }, { id: "83", name: "Osito", price: 0 }, { id: "84", name: "Panquecito", price: 0 },
    { id: "85", name: "Papas prefritas", price: 0 }, { id: "86", name: "Pasta de ajo", price: 0 }, { id: "87", name: "Pellitroque", price: 0 },
    { id: "88", name: "Pastillita de pollo c/tomate", price: 0 }, { id: "89", name: "Paquete de pollo 2kg", price: 0 }, { id: "90", name: "Pellis", price: 0 },
    { id: "91", name: "Palitos de Leche", price: 0 }, { id: "92", name: "Picadillo de pollo 1lb", price: 0 }, { id: "93", name: "Picadillo de pollo 2lb", price: 0 },
    { id: "94", name: "Picadillo de pollo tubo", price: 0 }, { id: "95", name: "Picadillo Mixto", price: 0 }, { id: "96", name: "Pollo Pate 10lb", price: 0 },
    { id: "97", name: "Potato chips", price: 0 }, { id: "98", name: "Refresco de pomo", price: 0 }, { id: "99", name: "Refresco Lata", price: 0 },
    { id: "100", name: "Refresco Pticos", price: 0 }, { id: "101", name: "Ron Atrevete", price: 0 }, { id: "102", name: "Ron Villa Clara", price: 0 },
    { id: "103", name: "sal grande", price: 0 }, { id: "104", name: "Salchicha", price: 0 }, { id: "105", name: "Salsa Rosa", price: 0 },
    { id: "106", name: "Sazón Azafran", price: 0 }, { id: "107", name: "Sazón Completo(Pomo)", price: 0 }, { id: "108", name: "sazon mina", price: 0 },
    { id: "109", name: "Sazon Tropical verde", price: 0 }, { id: "110", name: "Sazón nova", price: 0 }, { id: "111", name: "Sazon Tirís", price: 0 },
    { id: "112", name: "Sazón tropical naranja", price: 0 }, { id: "113", name: "Sazón Iberia", price: 0 }, { id: "114", name: "Sazon Koria Pollo", price: 0 },
    { id: "115", name: "Sopa Instantanea(Pqte)", price: 0 }, { id: "116", name: "Spaguetis", price: 0 }, { id: "117", name: "Sazon Koria Pollo y Tomate", price: 0 },
    { id: "118", name: "Spam", price: 0 }, { id: "119", name: "Trueno", price: 0 }, { id: "120", name: "Turron", price: 0 },
    { id: "121", name: "Vainilla", price: 0 }, { id: "122", name: "Vinagre claro", price: 0 }, { id: "123", name: "Vinagre Fruta", price: 0 },
    { id: "124", name: "Vino Seco", price: 0 }, { id: "125", name: "Wisky Chiquito", price: 0 }, { id: "126", name: "Yogurt Natural", price: 0 },
    { id: "127", name: "Yogourt", price: 0 }, { id: "128", name: "Zumo de Limón", price: 0 }, { id: "129", name: "Champú", price: 0 },
    { id: "130", name: "Champú y Acondicionador", price: 0 }, { id: "131", name: "Champú, Acond. Malva", price: 0 }, { id: "132", name: "Colonias Bonabel", price: 0 },
    { id: "133", name: "Colonias chiquita", price: 0 }, { id: "134", name: "Cepillo dental", price: 0 }, { id: "135", name: "Crema corporal", price: 0 },
    { id: "136", name: "Desodorante chiquito", price: 0 }, { id: "137", name: "Detergente Areli", price: 0 }, { id: "138", name: "Detergente Koria", price: 0 },
    { id: "139", name: "Detergente Liquido", price: 0 }, { id: "140", name: "Detergente multiuso", price: 0 }, { id: "141", name: "Detergente Yami", price: 0 },
    { id: "142", name: "Diarias", price: 0 }, { id: "143", name: "estrellitas", price: 0 }, { id: "144", name: "Detergente Mayara", price: 0 },
    { id: "145", name: "Detergente Maxi", price: 0 }, { id: "146", name: "Intimas", price: 0 }, { id: "147", name: "Jabita de Nahylon", price: 0 },
    { id: "148", name: "Jabitas de regalo", price: 0 }, { id: "149", name: "Jabón de baño azul", price: 0 }, { id: "150", name: "Jabón de baño Importado", price: 0 },
    { id: "151", name: "Jabón de baño rosado", price: 0 }, { id: "152", name: "Jabón de rosas", price: 0 }, { id: "153", name: "Maquina de afeitar", price: 0 },
    { id: "154", name: "Papel Higiénico", price: 0 }, { id: "155", name: "Pasta dental", price: 0 }, { id: "156", name: "Pasta dental c/ cepillo", price: 0 },
    { id: "157", name: "Pasta dental Royal", price: 0 }, { id: "158", name: "Perfumes 3000", price: 0 }, { id: "159", name: "Perfumes con crema", price: 0 },
    { id: "160", name: "Pozuelos", price: 0 }, { id: "161", name: "Salvavida", price: 0 }, { id: "162", name: "Set de perfume", price: 0 },
    { id: "163", name: "Toallitas Humedas Laezar", price: 0 }, { id: "164", name: "Toallitas Humedas", price: 0 }, { id: "165", name: "Velas aromáticas 2500", price: 0 },
    { id: "166", name: "Velas aromáticas 3000", price: 0 }, { id: "167", name: "Velas aromáticas 600", price: 0 }, { id: "168", name: "Batidora", price: 0 },
    { id: "169", name: "Cafetera", price: 0 }, { id: "170", name: "Fogón Infrarrojo", price: 0 }, { id: "171", name: "Juego de anclaje plastico", price: 0 },
    { id: "172", name: "Juego de destornillador", price: 0 }, { id: "173", name: "Lavadora semi automática", price: 0 }, { id: "174", name: "Olla arrocera chiquita", price: 0 },
    { id: "175", name: "Olla arrocera grande", price: 0 }, { id: "176", name: "Olla Reina", price: 0 }, { id: "177", name: "Ventilador", price: 0 },
    { id: "178", name: "Ventilador recargable", price: 0 }
];

// --- ESTADO ---
let products = JSON.parse(localStorage.getItem('kelebek_products')) || initialProducts;
let cart = JSON.parse(localStorage.getItem('kelebek_cart')) || [];
let history = JSON.parse(localStorage.getItem('kelebek_history')) || [];
let workers = JSON.parse(localStorage.getItem('kelebek_workers')) || []; // Inicia vacío
let currentWorker = localStorage.getItem('kelebek_current_worker') || "";

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    saveData();
    updateWorkerUI();
    renderCart();
    renderInventory();
    setupEventListeners();
    initServiceWorker();
});

function saveData() {
    localStorage.setItem('kelebek_products', JSON.stringify(products));
    localStorage.setItem('kelebek_cart', JSON.stringify(cart));
    localStorage.setItem('kelebek_history', JSON.stringify(history));
    localStorage.setItem('kelebek_workers', JSON.stringify(workers));
    localStorage.setItem('kelebek_current_worker', currentWorker);
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearch);
    
    document.getElementById('inv-search').addEventListener('input', renderInventory);
    document.getElementById('cash-input').addEventListener('input', calculateChange);
}

// --- TRABAJADORES ---
function updateWorkerUI() {
    const workerEl = document.getElementById('current-worker-name');
    if (currentWorker) {
        workerEl.innerText = currentWorker;
        workerEl.style.color = 'var(--gold)';
    } else {
        workerEl.innerText = 'Asignar Turno';
        workerEl.style.color = '#aaa';
    }
}

function openWorkerModal() {
    document.getElementById('worker-modal').classList.add('active');
    resetWorkerForm();
    renderWorkerList();
}

function closeWorkerModal() {
    document.getElementById('worker-modal').classList.remove('active');
}

function renderWorkerList() {
    const list = document.getElementById('worker-list');
    
    if (workers.length === 0) {
        list.innerHTML = '<li style="padding: 15px; text-align: center; color: #888; font-size: 14px;">No hay trabajadores. Agrega uno abajo.</li>';
        return;
    }

    list.innerHTML = workers.map(w => `
        <li class="dropdown-item" style="${w === currentWorker ? 'border-color: var(--gold);' : ''}">
            <span class="dropdown-name" style="${w === currentWorker ? 'color: var(--gold);' : ''}">${w}</span>
            <div style="display: flex; gap: 8px; align-items: center;">
                ${w === currentWorker 
                    ? '<i class="fas fa-check" style="color: var(--gold);"></i>' 
                    : `<button class="btn btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="selectWorker('${w}')">Elegir</button>`}
                <button class="qty-btn" onclick="editWorker('${w}')" style="color: var(--gold);"><i class="fas fa-edit"></i></button>
                <button class="qty-btn" onclick="deleteWorker('${w}')" style="color: var(--danger);"><i class="fas fa-trash"></i></button>
            </div>
        </li>
    `).join('');
}

function selectWorker(name) {
    currentWorker = name;
    saveData();
    updateWorkerUI();
    closeWorkerModal();
}

function editWorker(name) {
    document.getElementById('worker-form-label').innerText = 'Editando trabajador';
    document.getElementById('edit-worker-old-name').value = name;
    document.getElementById('new-worker-name').value = name;
    document.getElementById('btn-save-worker').innerText = 'Guardar';
}

function resetWorkerForm() {
    document.getElementById('worker-form-label').innerText = 'Agregar nuevo trabajador';
    document.getElementById('edit-worker-old-name').value = '';
    document.getElementById('new-worker-name').value = '';
    document.getElementById('btn-save-worker').innerText = 'Agregar';
}

function saveWorker() {
    const input = document.getElementById('new-worker-name');
    const oldName = document.getElementById('edit-worker-old-name').value;
    const name = input.value.trim();
    
    if (!name) return alert("El nombre no puede estar vacío");

    if (oldName) {
        // Modo Edición
        if (oldName !== name && workers.includes(name)) return alert("Ese nombre ya existe en la lista.");
        const index = workers.indexOf(oldName);
        if (index > -1) workers[index] = name;
        if (currentWorker === oldName) currentWorker = name;
    } else {
        // Modo Agregar
        if (workers.includes(name)) return alert("Ese nombre ya existe en la lista.");
        workers.push(name);
        if (!currentWorker) currentWorker = name; // Si es el primero, asignarlo
    }
    
    saveData();
    renderWorkerList();
    updateWorkerUI();
    resetWorkerForm();
}

function deleteWorker(name) {
    if (confirm(`¿Eliminar a "${name}" de la lista de trabajadores?`)) {
        workers = workers.filter(w => w !== name);
        if (currentWorker === name) {
            currentWorker = workers.length > 0 ? workers[0] : '';
            updateWorkerUI();
        }
        saveData();
        renderWorkerList();
    }
}

// --- BUSCADOR Y CARRITO ---
function handleSearch() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const dropdown = document.getElementById('search-dropdown');
    const resultsList = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');

    if (query === '') {
        dropdown.classList.add('hidden');
        return;
    }

    dropdown.classList.remove('hidden');
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    
    if (filtered.length === 0) {
        resultsList.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        resultsList.innerHTML = filtered.map(p => `
            <li class="dropdown-item" onclick="addToCart('${p.id}')">
                <span class="dropdown-name">${p.name}</span>
                <span class="dropdown-price">${p.price} CUP</span>
            </li>
        `).join('');
    }
}

document.addEventListener('click', (e) => {
    const searchSection = document.querySelector('.search-section');
    if (searchSection && !searchSection.contains(e.target)) {
        document.getElementById('search-dropdown').classList.add('hidden');
    }
});

function renderCart() {
    const container = document.getElementById('ticket-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Aún no hay productos.</p>';
        document.getElementById('ticket-total').innerText = '0 CUP';
        calculateChange();
        return;
    }
    
    container.innerHTML = cart.map((item, index) => `
        <div class="ticket-item">
            <div class="ticket-item-info">
                <div class="ticket-item-name">${item.name}</div>
                <div class="ticket-item-price">${item.price} CUP</div>
            </div>
            <div class="ticket-item-controls">
                <button class="qty-btn" onclick="updateQty(${index}, -1)"><i class="fas fa-minus"></i></button>
                <span class="qty-display">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${index}, 1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `).join('');

    calculateTotal();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(c => c.id === productId);
    
    if (cartItem) cartItem.qty++;
    else cart.push({ ...product, qty: 1 });
    
    saveData();
    renderCart();
    
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    document.getElementById('search-dropdown').classList.add('hidden');
    searchInput.focus(); 
}

function updateQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveData();
    renderCart();
}

function clearCart() {
    if (cart.length > 0 && confirm("¿Vaciar el ticket actual?")) {
        cart = [];
        saveData();
        renderCart();
    }
}

function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('ticket-total').innerText = `${total} CUP`;
    calculateChange();
    return total;
}

function calculateChange() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const cash = parseInt(document.getElementById('cash-input').value) || 0;
    const changeDisplay = document.getElementById('change-display');
    
    if (cash === 0) {
        changeDisplay.innerText = `Vuelto: 0 CUP`;
        changeDisplay.className = 'change-display';
        return;
    }

    const change = cash - total;
    if (change < 0) {
        changeDisplay.innerText = `Faltan ${Math.abs(change)} CUP`;
        changeDisplay.className = 'change-display change-error';
    } else {
        changeDisplay.innerText = `Vuelto: ${change} CUP`;
        changeDisplay.className = 'change-display';
    }
}

function finalizeTicket() {
    if (cart.length === 0) return;
    
    if (!currentWorker) {
        alert("Por favor, asigna un turno/trabajador antes de cobrar para registrar la venta.");
        openWorkerModal();
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const cash = parseInt(document.getElementById('cash-input').value) || 0;
    
    if (cash > 0 && cash < total) {
        alert("El efectivo recibido es menor al total del ticket.");
        return;
    }

    const now = new Date();
    const ticket = {
        id: Date.now(),
        date: now.toLocaleDateString('es-ES'),
        time: now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        worker: currentWorker,
        items: JSON.parse(JSON.stringify(cart)),
        total: total,
        cash: cash > 0 ? cash : total,
        change: cash > 0 ? cash - total : 0
    };

    history.unshift(ticket);
    limpiarHistorial31Dias();

    cart = [];
    document.getElementById('cash-input').value = '';
    
    saveData();
    renderCart();
    
    const btn = document.querySelector('.btn-checkout');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Cobrado!';
    setTimeout(() => { btn.innerHTML = originalText; }, 1500);
}

function limpiarHistorial31Dias() {
    const uniqueDates = [...new Set(history.map(t => t.date))].sort((a, b) => {
        const [d1, m1, y1] = a.split('/');
        const [d2, m2, y2] = b.split('/');
        return new Date(y2, m2-1, d2) - new Date(y1, m1-1, d1);
    });

    if (uniqueDates.length > 31) {
        const datesToRemove = uniqueDates.slice(31);
        history = history.filter(t => !datesToRemove.includes(t.date));
    }
}

// --- NAVEGACIÓN Y CIERRES ---
function switchView(viewId) {
    document.querySelectorAll('.main-container, .admin-view').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    if (viewId === 'pos') {
        document.getElementById('view-pos').classList.remove('hidden');
    } else {
        document.getElementById(`view-${viewId}`).classList.remove('hidden');
        if (viewId === 'history') renderHistory();
    }
    
    const activeBtn = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function cerrarTurno() {
    if (cart.length > 0) {
        alert("Debes cobrar o vaciar el ticket actual antes de cambiar de turno.");
        return;
    }
    openWorkerModal();
}

function cerrarDiaManual() {
    if (confirm("¿Estás seguro de cerrar el día?\n\nSe guardará el historial en el margen de 31 días y se limpiará el ticket actual.")) {
        cart = [];
        document.getElementById('cash-input').value = '';
        saveData();
        renderCart();
        alert("Día cerrado correctamente. Listo para un nuevo turno.");
        switchView('pos');
        openWorkerModal(); // Sugerir cambio de trabajador
    }
}

// --- INVENTARIO ---
function renderInventory() {
    const searchInput = document.getElementById('inv-search').value.toLowerCase();
    const list = document.getElementById('inventory-list');
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchInput));
    
    list.innerHTML = filtered.map(p => `
        <li class="dropdown-item">
            <div>
                <div class="dropdown-name">${p.name}</div>
                <div class="dropdown-price" style="font-size: 13px; margin-top: 4px;">${p.price} CUP</div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="qty-btn" onclick="openProductModal('${p.id}')" style="color: var(--gold);"><i class="fas fa-edit"></i></button>
                <button class="qty-btn" onclick="deleteProduct('${p.id}')" style="color: var(--danger);"><i class="fas fa-trash"></i></button>
            </div>
        </li>
    `).join('');
}

function openProductModal(id = null) {
    document.getElementById('product-modal').classList.add('active');
    const title = document.getElementById('modal-title');
    const inputId = document.getElementById('product-id');
    const inputName = document.getElementById('product-name');
    const inputPrice = document.getElementById('product-price');

    if (id) {
        const product = products.find(p => p.id === id);
        title.innerText = 'Editar Producto';
        inputId.value = product.id;
        inputName.value = product.name;
        inputPrice.value = product.price;
    } else {
        title.innerText = 'Agregar Producto';
        inputId.value = '';
        inputName.value = '';
        inputPrice.value = '';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function saveProduct() {
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value.trim();
    const price = parseInt(document.getElementById('product-price').value) || 0;
    if (!name) return alert("El nombre es obligatorio");

    if (id) {
        const index = products.findIndex(p => p.id === id);
        products[index] = { ...products[index], name, price };
    } else {
        products.push({ id: Date.now().toString(), name, price });
    }

    saveData();
    renderInventory();
    closeModal('product-modal');
}

function deleteProduct(id) {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
        products = products.filter(p => p.id !== id);
        saveData();
        renderInventory();
    }
}

// --- HISTORIAL (31 DÍAS) ---
function renderHistory() {
    const today = new Date().toLocaleDateString('es-ES');
    const todayTickets = history.filter(t => t.date === today);
    
    const todayTotal = todayTickets.reduce((sum, t) => sum + t.total, 0);
    document.getElementById('today-total').innerText = `${todayTotal} CUP`;
    document.getElementById('today-tickets').innerText = todayTickets.length;

    const historyList = document.getElementById('history-list');
    if (history.length === 0) {
        historyList.innerHTML = '<p style="color: #666; text-align: center; margin-top: 20px;">No hay historial reciente.</p>';
        return;
    }

    const groupedByDay = {};
    history.forEach(t => {
        if (!groupedByDay[t.date]) groupedByDay[t.date] = [];
        groupedByDay[t.date].push(t);
    });

    const dates = Object.keys(groupedByDay).sort((a, b) => {
        const [d1, m1, y1] = a.split('/');
        const [d2, m2, y2] = b.split('/');
        return new Date(y2, m2-1, d2) - new Date(y1, m1-1, d1);
    });

    historyList.innerHTML = dates.map(date => {
        const dayTickets = groupedByDay[date];
        const dayTotal = dayTickets.reduce((sum, t) => sum + t.total, 0);
        
        return `
            <div class="history-day-group">
                <div class="history-day-header">
                    <span class="history-day-date">${date}</span>
                    <span class="history-day-total">Total: ${dayTotal} CUP</span>
                </div>
                <div class="history-ticket-list">
                    ${dayTickets.map(t => `
                        <div class="history-ticket">
                            <div class="history-header">
                                <span>${t.time}</span>
                                <span class="history-worker"><i class="fas fa-user"></i> ${t.worker || 'N/A'}</span>
                            </div>
                            <ul class="history-items">
                                ${t.items.map(i => `<li>${i.qty}x ${i.name} (${i.price * i.qty} CUP)</li>`).join('')}
                            </ul>
                            <div class="history-footer">
                                <span>Efectivo: ${t.cash} | Vuelto: ${t.change}</span>
                                <button class="qty-btn" style="color: var(--danger);" onclick="deleteTicket(${t.id})"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function deleteTicket(id) {
    if (confirm("¿Eliminar este ticket? Afectará el resumen del día.")) {
        history = history.filter(t => t.id !== id);
        saveData();
        renderHistory();
    }
}

// --- PWA ---
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(err => console.log('SW falló', err));
        });
    }
}
