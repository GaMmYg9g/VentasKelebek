// --- DATOS INICIALES ---
const initialProducts = [
    { id: "1", name: "Aceite", price: 0 }, { id: "2", name: "Agua", price: 300 }, { id: "3", name: "Arroz 1Kg", price: 900 },
    { id: "4", name: "Atún", price: 700 }, { id: "5", name: "Azúcar Blanca 1Kg", price: 1250 }, { id: "6", name: "Azúcar Bolsa 1 kg", price: 1300 },
    { id: "7", name: "Bombon", price: 60 }, { id: "8", name: "Botellitas de Chile", price: 80 }, { id: "9", name: "Botonetas", price: 2500 },
    { id: "10", name: "Café Carico", price: 850 }, { id: "11", name: "Café del rincon Chiquito", price: 3000 }, { id: "12", name: "Café Expreso", price: 2700 },
    { id: "13", name: "Café Mate", price: 850 }, { id: "14", name: "Café Guantanamo", price: 1500 }, { id: "15", name: "Café Rincon Grande", price: 1000 },
    { id: "16", name: "Café Ritual", price: 1000 }, { id: "17", name: "Café Los Mauri", price: 850 }, { id: "18", name: "Café Santiago", price: 1100 },
    { id: "19", name: "Café Pablo", price: 70 }, { id: "20", name: "Caldito de pollo", price: 70 }, { id: "21", name: "Caldito de res", price: 125 },
    { id: "22", name: "Cangrejito", price: 50 }, { id: "23", name: "Caramelo de Leche", price: 40 }, { id: "24", name: "Chicle", price: 50 },
    { id: "25", name: "Chicharo", price: 950 }, { id: "26", name: "Cerveza Blander Blau", price: 580 }, { id: "27", name: "Cerveza Bucanero", price: 550 },
    { id: "28", name: "Cerveza Cristal", price: 550 }, { id: "29", name: "Cerveza Hollandia", price: 600 }, { id: "30", name: "Cerveza Kroon", price: 430 },
    { id: "31", name: "Cerveza oka", price: 400 }, { id: "32", name: "Cerveza Royal Duke", price: 430 }, { id: "33", name: "Cerveza Wigmill", price: 680 },
    { id: "34", name: "Chanceller", price: 3500 }, { id: "35", name: "Caramelo", price: 1800 }, { id: "36", name: "Chocolate", price: 70 },
    { id: "37", name: "Chupa Chupa", price: 1600 }, { id: "38", name: "Crema Vie chiquita", price: 650 }, { id: "39", name: "Coditos Chiquitos", price: 1900 },
    { id: "40", name: "Crema Vie", price: 180 }, { id: "41", name: "Cepillo dental", price: 180 }, { id: "42", name: "Dulce Paradise", price: 400 },
    { id: "43", name: "Dulce de guayaba", price: 1160 }, { id: "44", name: "Flan", price: 230 }, { id: "45", name: "Fruity Cake", price: 1000 },
    { id: "46", name: "Frijol Negro 1Kg", price: 360 }, { id: "47", name: "Galleta de sal", price: 350 }, { id: "48", name: "Galleta Maria Grande", price: 150 },
    { id: "49", name: "Galleta Salit Block", price: 250 }, { id: "50", name: "Galleta Yumy", price: 150 }, { id: "51", name: "Galletas Lmore", price: 500 },
    { id: "52", name: "Galletas Pilar", price: 350 }, { id: "53", name: "Galletas Pilar Saladas", price: 320 }, { id: "54", name: "Galletas Sartinas", price: 130 },
    { id: "55", name: "Gofio Pistacho", price: 280 }, { id: "56", name: "Gelatina", price: 380 }, { id: "57", name: "Gelatina Pgha", price: 80 },
    { id: "58", name: "Gomita surtida", price: 80 }, { id: "59", name: "Hamburguesa", price: 140 }, { id: "60", name: "Huevo sorpresa", price: 150 },
    { id: "61", name: "Huevito", price: 125 }, { id: "62", name: "Huevo Carton", price: 4000 }, { id: "63", name: "Huevo x unidad", price: 130 },
    { id: "64", name: "Jugo Cajita", price: 370 }, { id: "65", name: "Jugo de lata", price: 480 }, { id: "66", name: "Leche condensada", price: 900 },
    { id: "67", name: "Higado", price: 2000 }, { id: "68", name: "Mortadella", price: 1400 }, { id: "69", name: "Lucky", price: 100 },
    { id: "70", name: "Malta", price: 620 }, { id: "71", name: "Malvadisco", price: 40 }, { id: "72", name: "Natilla", price: 1160 },
    { id: "73", name: "Mayonesa", price: 950 }, { id: "74", name: "Maiz lata", price: 1000 }, { id: "75", name: "Menta Plus", price: 200 },
    { id: "76", name: "Moneditas de chocolate", price: 50 }, { id: "77", name: "Mantequilla", price: 650 }, { id: "78", name: "Mortadella en lata", price: 950 },
    { id: "79", name: "Naranja Agria", price: 450 }, { id: "80", name: "Nutela", price: 1000 }, { id: "81", name: "Nuti Cream", price: 700 },
    { id: "82", name: "Mortadella chiquita", price: 950 }, { id: "83", name: "Osito", price: 40 }, { id: "84", name: "Panquecito", price: 250 },
    { id: "85", name: "Papas prefritas", price: 2000 }, { id: "86", name: "Pasta de ajo", price: 1750 }, { id: "87", name: "Pellitroque", price: 380 },
    { id: "88", name: "Pastillita de pollo c/tomate", price: 40 }, { id: "89", name: "Paquete de pollo 2kg", price: 4000 }, { id: "90", name: "Pellis", price: 300 },
    { id: "91", name: "Palitos de Leche", price: 500 }, { id: "92", name: "Picadillo de pollo 1lb", price: 600 }, { id: "93", name: "Picadillo de pollo 2lb", price: 1200 },
    { id: "94", name: "Picadillo de pollo tubo", price: 800 }, { id: "95", name: "Picadillo Mixto", price: 800 }, { id: "96", name: "Pollo Pate 10lb", price: 8200 },
    { id: "97", name: "Potato chips", price: 500 }, { id: "98", name: "Refresco de pomo", price: 1300 }, { id: "99", name: "Refresco Lata", price: 550 },
    { id: "100", name: "Refresco Pticos", price: 130 }, { id: "101", name: "Ron Atrevete", price: 1650 }, { id: "102", name: "Ron Villa Clara", price: 2150 },
    { id: "103", name: "sal grande", price: 700 }, { id: "104", name: "Salchicha", price: 1300 }, { id: "105", name: "Salsa Rosa", price: 850 },
    { id: "106", name: "Sazón Azafran", price: 70 }, { id: "107", name: "Sazón Completo(Pomo)", price: 1500 }, { id: "108", name: "sazon mina", price: 70 },
    { id: "109", name: "Sazon Tropical verde", price: 70 }, { id: "110", name: "Sazón nova", price: 70 }, { id: "111", name: "Sazon Tirís", price: 70 },
    { id: "112", name: "Sazón tropical naranja", price: 70 }, { id: "113", name: "Sazón Iberia", price: 70 }, { id: "114", name: "Sazon Koria Pollo", price: 70 },
    { id: "115", name: "Sopa Instantanea(Pqte)", price: 320 }, { id: "116", name: "Spaguetis", price: 600 }, { id: "117", name: "Sazon Koria Pollo y Tomate", price: 70 },
    { id: "118", name: "Spam", price: 1300 }, { id: "119", name: "Trueno", price: 80 }, { id: "120", name: "Turron", price: 480 },
    { id: "121", name: "Vainilla", price: 2300 }, { id: "122", name: "Vinagre claro", price: 450 }, { id: "123", name: "Vinagre Fruta", price: 450 },
    { id: "124", name: "Vino Seco", price: 900 }, { id: "125", name: "Wisky Chiquito", price: 450 }, { id: "126", name: "Yogurt Natural", price: 1250 },
    { id: "127", name: "Yogourt", price: 1300 }, { id: "128", name: "Zumo de Limón", price: 1500 }, { id: "129", name: "Champú", price: 1500 },
    { id: "130", name: "Champú y Acondicionador", price: 2500 }, { id: "131", name: "Champú, Acond. Malva", price: 2800 }, { id: "132", name: "Colonias Bonabel", price: 3000 },
    { id: "133", name: "Colonias chiquita", price: 1500 }, { id: "134", name: "Cepillo dental", price: 180 }, { id: "135", name: "Crema corporal", price: 1500 },
    { id: "136", name: "Desodorante chiquito", price: 850 }, { id: "137", name: "Detergente Areli", price: 1000 }, { id: "138", name: "Detergente Koria", price: 900 },
    { id: "139", name: "Detergente Liquido", price: 900 }, { id: "140", name: "Detergente multiuso", price: 400 }, { id: "141", name: "Detergente Yami", price: 700 },
    { id: "142", name: "Diarias", price: 1300 }, { id: "143", name: "estrellitas", price: 500 }, { id: "144", name: "Detergente Mayara", price: 200 },
    { id: "145", name: "Detergente Maxi", price: 900 }, { id: "146", name: "Intimas", price: 1000 }, { id: "147", name: "Jabita de Nahylon", price: 20 },
    { id: "148", name: "Jabitas de regalo", price: 1500 }, { id: "149", name: "Jabón de baño azul", price: 250 }, { id: "150", name: "Jabón de baño Importado", price: 450 },
    { id: "151", name: "Jabón de baño rosado", price: 400 }, { id: "152", name: "Jabón de rosas", price: 450 }, { id: "153", name: "Maquina de afeitar", price: 180 },
    { id: "154", name: "Papel Higiénico", price: 220 }, { id: "155", name: "Pasta dental", price: 500 }, { id: "156", name: "Pasta dental c/ cepillo", price: 500 },
    { id: "157", name: "Pasta dental Royal", price: 600 }, { id: "158", name: "Perfumes 3000", price: 3300 }, { id: "159", name: "Perfumes con crema", price: 3000 },
    { id: "160", name: "Pozuelos", price: 600 }, { id: "161", name: "Salvavida", price: 3000 }, { id: "162", name: "Set de perfume", price: 3000 },
    { id: "163", name: "Toallitas Humedas Laezar", price: 1100 }, { id: "164", name: "Toallitas Humedas", price: 950 }, { id: "165", name: "Velas aromáticas 2500", price: 2500 },
    { id: "166", name: "Velas aromáticas 3000", price: 3000 }, { id: "167", name: "Velas aromáticas 600", price: 600 }, { id: "168", name: "Batidora", price: 0 },
    { id: "169", name: "Cafetera", price: 0 }, { id: "170", name: "Fogón Infrarrojo", price: 0 }, { id: "171", name: "Juego de anclaje plastico", price: 2100 },
    { id: "172", name: "Juego de destornillador", price: 12000 }, { id: "173", name: "Lavadora semi automática", price: 17500 }, { id: "174", name: "Olla arrocera chiquita", price: 20000 },
    { id: "175", name: "Olla arrocera grande", price: 40000 }, { id: "176", name: "Olla Reina", price: 0 }, { id: "177", name: "Ventilador", price: 0 },
    { id: "178", name: "Ventilador recargable", price: 0 }
];

// --- ESTADO ---
let products = JSON.parse(localStorage.getItem('kelebek_products')) || initialProducts;
let cart = JSON.parse(localStorage.getItem('kelebek_cart')) || [];
let history = JSON.parse(localStorage.getItem('kelebek_history')) || [];

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    checkAutoClear(); // Revisa si debe borrar por tiempo al abrir
    saveData();
    renderCart();
    renderInventory();
    setupEventListeners();
    initServiceWorker();
});

function updateDate() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    }
}

function saveData() {
    localStorage.setItem('kelebek_products', JSON.stringify(products));
    localStorage.setItem('kelebek_cart', JSON.stringify(cart));
    localStorage.setItem('kelebek_history', JSON.stringify(history));
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearch); 
    
    document.getElementById('inv-search').addEventListener('input', renderInventory);
    document.getElementById('cash-input').addEventListener('input', calculateChange);
}

// --- BUSCADOR ---
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

// --- CARRITO / TICKET ---
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
    
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
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
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const cash = parseInt(document.getElementById('cash-input').value) || 0;
    
    if (cash > 0 && cash < total) {
        alert("El efectivo recibido es menor al total del ticket.");
        return;
    }

    // 1. Revisar si pasaron 24hs ANTES de guardar
    checkAutoClear();

    // 2. Si el historial está vacío, guardar el momento exacto del primer ticket
    if (history.length === 0 && !localStorage.getItem('kelebek_first_ticket_time')) {
        localStorage.setItem('kelebek_first_ticket_time', Date.now());
    }

    const now = new Date();
    const ticket = {
        id: Date.now(),
        date: now.toLocaleDateString('es-ES'),
        time: now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        items: JSON.parse(JSON.stringify(cart)),
        total: total,
        cash: cash > 0 ? cash : total,
        change: cash > 0 ? cash - total : 0
    };

    history.unshift(ticket);
    cart = [];
    document.getElementById('cash-input').value = '';
    
    saveData();
    renderCart();
    
    const btn = document.querySelector('.btn-checkout');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Cobrado!';
    setTimeout(() => { btn.innerHTML = originalText; }, 1500);
}

// --- NAVEGACIÓN ---
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

function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
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
    closeModal();
}

function deleteProduct(id) {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
        products = products.filter(p => p.id !== id);
        saveData();
        renderInventory();
    }
}

// --- HISTORIAL ---
function renderHistory() {
    const today = new Date().toLocaleDateString('es-ES');
    const todayTickets = history.filter(t => t.date === today);
    
    const todayTotal = todayTickets.reduce((sum, t) => sum + t.total, 0);
    document.getElementById('today-total').innerText = `${todayTotal} CUP`;
    document.getElementById('today-tickets').innerText = todayTickets.length;

    const productSummary = {};
    todayTickets.forEach(ticket => {
        ticket.items.forEach(item => {
            productSummary[item.name] = (productSummary[item.name] || 0) + item.qty;
        });
    });

    const summaryList = document.getElementById('today-summary-list');
    summaryList.innerHTML = Object.entries(productSummary)
        .sort((a, b) => b[1] - a[1]) 
        .map(([name, qty]) => `<li><span>${name}</span> <strong style="color: var(--gold);">${qty} ud.</strong></li>`).join('') || '<li>No hay ventas hoy</li>';

    const historyList = document.getElementById('history-list');
    if (history.length === 0) {
        historyList.innerHTML = '<p style="color: #666; text-align: center; margin-top: 20px;">No hay tickets recientes.</p>';
        return;
    }

    historyList.innerHTML = history.map(t => `
        <div class="history-ticket">
            <div class="history-header">
                <span>${t.date} - ${t.time}</span>
                <span class="history-total">${t.total} CUP</span>
            </div>
            <ul class="history-items">
                ${t.items.map(i => `<li>${i.qty}x ${i.name} (${i.price * i.qty} CUP)</li>`).join('')}
            </ul>
            <div class="history-footer">
                <span>Efectivo: ${t.cash} | Vuelto: ${t.change}</span>
                <button class="qty-btn" style="color: var(--danger);" onclick="deleteTicket(${t.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function deleteTicket(id) {
    if (confirm("¿Eliminar este ticket? Afectará el resumen del día.")) {
        history = history.filter(t => t.id !== id);
        
        // Si borraste el único ticket que quedaba, reiniciamos el contador de 24hs
        if (history.length === 0) {
            localStorage.removeItem('kelebek_first_ticket_time');
        }
        
        saveData();
        renderHistory();
    }
}

// --- CIERRE DE DÍA Y AUTOLIMPIEZA ---
function cerrarDia() {
    if (confirm("¿Estás seguro de cerrar el día?\n\nSe borrarán todos los tickets y el resumen actual. Esta acción no se puede deshacer.")) {
        history = [];
        localStorage.removeItem('kelebek_first_ticket_time');
        saveData();
        renderHistory();
        alert("Día cerrado. Historial borrado.");
    }
}

function checkAutoClear() {
    const firstTicketTime = localStorage.getItem('kelebek_first_ticket_time');
    if (firstTicketTime) {
        const now = Date.now();
        const hours24 = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
        
        if (now - parseInt(firstTicketTime) >= hours24) {
            history = [];
            localStorage.removeItem('kelebek_first_ticket_time');
            saveData();
            console.log("Historial borrado automáticamente (pasaron 24hs)");
            
            // Si estás viendo el historial en ese momento, se actualiza en vivo
            if (!document.getElementById('view-history').classList.contains('hidden')) {
                renderHistory();
            }
        }
    }
}

// --- PWA SERVICE WORKER ---
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(err => console.log('SW falló', err));
        });
    }
}
