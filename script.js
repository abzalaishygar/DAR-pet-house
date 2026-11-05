// Фотографии для лампового дизайна (Unsplash)
const getAnimalImg = (species, id) => {
    const cats = [
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=crop',
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=150&fit=crop',
        'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=150&fit=crop',
        'https://images.unsplash.com/photo-1529778459816-41586a117b96?w=150&fit=crop',
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=150&fit=crop'
    ];
    const dogs = [
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&fit=crop',
        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=150&fit=crop',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=150&fit=crop',
        'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=150&fit=crop',
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=150&fit=crop'
    ];
    const others = [
        'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?w=150&fit=crop', // Енот
        'https://images.unsplash.com/photo-1552728089-571688d16d7a?w=150&fit=crop', // Птица
        'https://images.unsplash.com/photo-1585110396000-c9fd45c36391?w=150&fit=crop'  // Кролик
    ];

    if (species === 'Кошка') return cats[id % cats.length];
    if (species === 'Собака') return dogs[id % dogs.length];
    return others[id % others.length];
};

let state = {
    enclosures: [
        { id: 1, code: 'Д-1 (Кошкин Дом)', type: 'Уютная комната', capacity: 10, current_count: 7, status: 'Доступен' },
        { id: 2, code: 'Д-2 (Мурляндия)', type: 'С лазалками', capacity: 10, current_count: 5, status: 'Доступен' },
        { id: 3, code: 'В-1 (Гав-Таун)', type: 'Просторный вольер', capacity: 10, current_count: 6, status: 'Доступен' },
        { id: 4, code: 'В-2 (Большие лапы)', type: 'Для крупных пород', capacity: 10, current_count: 4, status: 'Доступен' },
        { id: 5, code: 'Карантин', type: 'Для новеньких', capacity: 5, current_count: 3, status: 'Доступен' },
        { id: 6, code: 'Лазарет', type: 'Медицинский блок', capacity: 5, current_count: 2, status: 'Доступен' }
    ],

    animals: [
        { id: 1, name: 'Барсик', species: 'Кошка', breed: 'Британская', gender: 'М', age: 2, arrival_date: '2026-09-10', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 2, name: 'Рекс', species: 'Собака', breed: 'Овчарка', gender: 'М', age: 4, arrival_date: '2026-08-15', enclosure_id: 3, status: 'Готов к пристройству' },
        { id: 3, name: 'Мурка', species: 'Кошка', breed: 'Дворняжка', gender: 'Ж', age: 1, arrival_date: '2026-10-01', enclosure_id: 6, status: 'На лечении' },
        { id: 4, name: 'Шарик', species: 'Собака', breed: 'Дворняжка', gender: 'М', age: 3, arrival_date: '2026-10-12', enclosure_id: 5, status: 'На карантине' },
        { id: 5, name: 'Пушок', species: 'Кошка', breed: 'Персидская', gender: 'М', age: 5, arrival_date: '2026-07-20', enclosure_id: 2, status: 'Готов к пристройству' },
        { id: 6, name: 'Белла', species: 'Кошка', breed: 'Сфинкс', gender: 'Ж', age: 2, arrival_date: '2026-10-20', enclosure_id: 2, status: 'Готов к пристройству' },
        { id: 7, name: 'Гром', species: 'Собака', breed: 'Хаски', gender: 'М', age: 2.5, arrival_date: '2026-10-25', enclosure_id: 5, status: 'На карантине' },
        { id: 8, name: 'Чип', species: 'Енот', breed: 'Полоскун', gender: 'М', age: 1.5, arrival_date: '2026-10-28', enclosure_id: 6, status: 'На лечении' },
        { id: 9, name: 'Снежок', species: 'Кошка', breed: 'Мейн-кун', gender: 'М', age: 1, arrival_date: '2026-09-15', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 10, name: 'Джеки', species: 'Собака', breed: 'Джек-рассел', gender: 'Ж', age: 2, arrival_date: '2026-09-20', enclosure_id: 3, status: 'Готов к пристройству' },
        { id: 11, name: 'Рыжик', species: 'Кошка', breed: 'Дворняжка', gender: 'М', age: 0.5, arrival_date: '2026-11-01', enclosure_id: 5, status: 'На карантине' },
        { id: 12, name: 'Лорд', species: 'Собака', breed: 'Доберман', gender: 'М', age: 4, arrival_date: '2026-10-05', enclosure_id: 4, status: 'Готов к пристройству' },
        { id: 13, name: 'Багира', species: 'Кошка', breed: 'Ориентал', gender: 'Ж', age: 3, arrival_date: '2026-10-10', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 14, name: 'Буран', species: 'Собака', breed: 'Алабай', gender: 'М', age: 5, arrival_date: '2026-08-30', enclosure_id: 4, status: 'Готов к пристройству' },
        { id: 15, name: 'Сима', species: 'Кошка', breed: 'Сиамская', gender: 'Ж', age: 2.5, arrival_date: '2026-09-25', enclosure_id: 2, status: 'Готов к пристройству' },
        { id: 16, name: 'Граф', species: 'Собака', breed: 'Пудель', gender: 'М', age: 1.5, arrival_date: '2026-10-15', enclosure_id: 3, status: 'Готов к пристройству' },
        { id: 17, name: 'Кеша', species: 'Птица', breed: 'Попугай', gender: 'М', age: 1, arrival_date: '2026-10-30', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 18, name: 'Степа', species: 'Кролик', breed: 'Декоративный', gender: 'М', age: 0.8, arrival_date: '2026-11-02', enclosure_id: 2, status: 'Готов к пристройству' },
        { id: 19, name: 'Люся', species: 'Кошка', breed: 'Бенгальская', gender: 'Ж', age: 4, arrival_date: '2026-08-05', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 20, name: 'Арчи', species: 'Собака', breed: 'Корги', gender: 'М', age: 2, arrival_date: '2026-09-01', enclosure_id: 3, status: 'Готов к пристройству' },
        { id: 21, name: 'Матильда', species: 'Кошка', breed: 'Британская', gender: 'Ж', age: 3.5, arrival_date: '2026-10-18', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 22, name: 'Тайсон', species: 'Собака', breed: 'Бульдог', gender: 'М', age: 3, arrival_date: '2026-10-08', enclosure_id: 4, status: 'Готов к пристройству' },
        { id: 23, name: 'Соня', species: 'Кошка', breed: 'Дворняжка', gender: 'Ж', age: 1.2, arrival_date: '2026-10-22', enclosure_id: 2, status: 'Готов к пристройству' },
        { id: 24, name: 'Ральф', species: 'Собака', breed: 'Лабрадор', gender: 'М', age: 2.8, arrival_date: '2026-09-12', enclosure_id: 3, status: 'Готов к пристройству' },
        { id: 25, name: 'Зевс', species: 'Собака', breed: 'Кане-корсо', gender: 'М', age: 4, arrival_date: '2026-08-20', enclosure_id: 4, status: 'Готов к пристройству' },
        { id: 26, name: 'Клео', species: 'Кошка', breed: 'Сфинкс', gender: 'Ж', age: 1, arrival_date: '2026-11-04', enclosure_id: 1, status: 'Готов к пристройству' },
        { id: 27, name: 'Барри', species: 'Собака', breed: 'Такса', gender: 'М', age: 5, arrival_date: '2026-07-15', enclosure_id: 3, status: 'Готов к пристройству' }
    ].map(a => ({ ...a, img: getAnimalImg(a.species, a.id) })),

    employees: [
        { id: 1, name: 'Айгерим С.', role: 'Ветеринар', operations_count: 42 },
        { id: 2, name: 'Мадина К.', role: 'Администратор', operations_count: 58 },
        { id: 3, name: 'Арман В.', role: 'Кинолог', operations_count: 35 },
        { id: 4, name: 'Алина Н.', role: 'Волонтер', operations_count: 29 }
    ],

    medicalExams: [
        { id: 1, animal_id: 3, date: '2026-10-02', diagnosis: 'Отит', treatment: 'Капли 2р/день', vet_name: 'Айгерим С.' },
        { id: 2, animal_id: 8, date: '2026-10-29', diagnosis: 'Травма лапки', treatment: 'Перевязка', vet_name: 'Айгерим С.' },
        { id: 3, animal_id: 1, date: '2026-09-11', diagnosis: 'Полностью здоров', treatment: 'Витаминки', vet_name: 'Айгерим С.' }
    ],

    vaccinations: [
        { id: 1, animal_id: 1, vaccine: 'Nobivac Tricat', date: '2026-09-12', next_date: '2027-09-12' },
        { id: 2, animal_id: 2, vaccine: 'Rabisin (Бешенство)', date: '2025-11-10', next_date: '2026-11-10' },
        { id: 3, animal_id: 6, vaccine: 'Multifel-4', date: '2026-10-21', next_date: '2027-10-21' },
        { id: 4, animal_id: 10, vaccine: 'Eurican', date: '2026-09-25', next_date: '2027-09-25' }
    ],

    feedings: [
        { id: 1, date: '2026-11-05 08:30', enclosure_id: 1, food_type: 'Royal Canin', amount: 3.5 },
        { id: 2, date: '2026-11-05 09:00', enclosure_id: 3, food_type: 'Brit Premium', amount: 5.0 },
        { id: 3, date: '2026-11-05 09:30', enclosure_id: 4, food_type: 'Dog Chow', amount: 6.2 }
    ],

    expenses: [
        { id: 1, date: '2026-11-01', category: 'Питание', amount: 150000, desc: 'Вкусняшки на месяц', animal_id: null },
        { id: 2, date: '2026-11-02', category: 'Лечение', amount: 25000, desc: 'Лекарства', animal_id: 8 },
        { id: 3, date: '2026-11-03', category: 'Содержание', amount: 65000, desc: 'Отопление и свет', animal_id: null }
    ],

    donations: [
        { id: 1, date: '2026-11-01', donor: 'ТОО "ЗооМир"', type: 'Материальное', value: '100 кг корма' },
        { id: 2, date: '2026-11-03', donor: 'Алексей М.', type: 'Денежное', value: '50 000 ₸' },
        { id: 3, date: '2026-11-04', donor: 'Аноним', type: 'Денежное', value: '15 000 ₸' }
    ],

    adoptionRequests: [
        { id: 1, animal_id: 1, owner_name: 'Асель К.', phone: '+7 707 111 2233', status: 'На рассмотрении', date: '2026-11-02' },
        { id: 2, animal_id: 2, owner_name: 'Елена В.', phone: '+7 701 444 5566', status: 'Одобрена', date: '2026-11-03' },
        { id: 3, animal_id: 12, owner_name: 'Данияр С.', phone: '+7 777 999 0011', status: 'На рассмотрении', date: '2026-11-04' }
    ],

    adoptionHistory: [
        { id: 1, animal_name: 'Пушок', owner_name: 'Анна Т.', date: '2026-09-30', employee: 'Мадина К.' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModalSelects();
    renderAll();
});

function initNavigation() {
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            if(tabId === 'reports') generateReport();
        });
    });
}

function renderAll() {
    renderKPIs();
    renderEnclosures();
    renderAnimalsTable();
    renderMedicalTables();
    renderFinanceTables();
    renderAdoptionTables();
    renderDashboardTables();
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    const icon = toast.querySelector('i');
    
    toast.className = `toast ${type}`;
    msg.innerText = message;
    icon.className = type === 'success' ? 'fa-solid fa-check-circle' : 'fa-solid fa-triangle-exclamation';
    
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3500);
}

function renderKPIs() {
    const totalAnimals = state.animals.filter(a => a.status !== 'Пристроен').length;
    let freeSpots = 0;
    state.enclosures.forEach(e => { freeSpots += Math.max(0, e.capacity - e.current_count); });
    const pendingReqs = state.adoptionRequests.filter(r => r.status === 'На рассмотрении').length;
    const totalExpenses = state.expenses.reduce((sum, e) => sum + Number(e.amount), 0);

    document.getElementById('kpi-total-animals').innerText = totalAnimals;
    document.getElementById('kpi-free-spots').innerText = freeSpots;
    document.getElementById('kpi-pending-requests').innerText = pendingReqs;
    document.getElementById('kpi-month-expenses').innerText = totalExpenses.toLocaleString() + ' ₸';
}

function renderEnclosures() {
    const container = document.getElementById('enclosures-container');
    container.innerHTML = '';

    state.enclosures.forEach(e => {
        const percent = Math.round((e.current_count / e.capacity) * 100);
        let fillClass = '';
        if (percent >= 100) fillClass = 'full';
        else if (percent >= 70) fillClass = 'warning';

        const card = document.createElement('div');
        card.className = 'enclosure-card';
        card.innerHTML = `
            <div class="enclosure-header">
                <span>${e.code}</span>
                <span class="badge ${percent >= 100 ? 'badge-treatment' : 'badge-ready'}">${percent >= 100 ? 'Занят' : 'Свободен'}</span>
            </div>
            <div style="font-size: 14px; color: var(--text-muted); font-weight: 600;">${e.type}</div>
            <div class="progress-info">
                <span>Занято мест</span>
                <span><strong style="color: var(--text-main); font-size: 16px;">${e.current_count}</strong> / ${e.capacity}</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill ${fillClass}" style="width: ${percent}%;"></div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderAnimalsTable() {
    const tbody = document.getElementById('animals-table-body');
    tbody.innerHTML = '';

    const search = document.getElementById('animal-search').value.toLowerCase();
    const speciesFilter = document.getElementById('animal-filter-species').value;
    const statusFilter = document.getElementById('animal-filter-status').value;

    const filtered = state.animals.filter(a => {
        const matchName = a.name.toLowerCase().includes(search);
        const matchSpecies = speciesFilter ? a.species === speciesFilter : true;
        const matchStatus = statusFilter ? a.status === statusFilter : true;
        return matchName && matchSpecies && matchStatus;
    });

    filtered.forEach(a => {
        const enc = state.enclosures.find(e => e.id === a.enclosure_id);
        const badgeClass = getStatusBadgeClass(a.status);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="animal-name-cell">
                    <img src="${a.img}" class="animal-avatar" alt="${a.name}">
                    <strong style="font-size: 16px; color: var(--text-main);">${a.name}</strong>
                </div>
            </td>
            <td><strong style="color: var(--text-main)">${a.species}</strong><br><span style="font-size: 12px; color: var(--text-muted)">${a.breed}</span></td>
            <td>${a.gender}</td>
            <td>${a.age}</td>
            <td>${a.arrival_date}</td>
            <td><strong>${enc ? enc.code.split(' ')[0] : '—'}</strong></td>
            <td><span class="badge ${badgeClass}">${a.status}</span></td>
            <td>
                ${a.status !== 'Пристроен' ? `<button class="btn btn-secondary btn-sm" onclick="openMoveModal(${a.id})" title="Переселить"><i class="fa-solid fa-house-chimney-user"></i></button>` : '—'}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function getStatusBadgeClass(status) {
    switch (status) {
        case 'На карантине': return 'badge-quarantine';
        case 'На лечении': return 'badge-treatment';
        case 'Готов к пристройству': return 'badge-ready';
        case 'Пристроен': return 'badge-adopted';
        default: return '';
    }
}

function renderMedicalTables() {
    const examsTbody = document.getElementById('exams-table-body');
    examsTbody.innerHTML = '';
    state.medicalExams.forEach(e => {
        const animal = state.animals.find(a => a.id === e.animal_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${e.date}</td>
            <td>
                <div class="animal-name-cell">
                    <img src="${animal ? animal.img : ''}" class="animal-avatar" style="width:36px;height:36px;">
                    <strong>${animal ? animal.name : '—'}</strong>
                </div>
            </td>
            <td><strong style="color: var(--accent-red)">${e.diagnosis}</strong></td>
            <td>${e.treatment}</td>
        `;
        examsTbody.appendChild(tr);
    });

    const vacsTbody = document.getElementById('vaccines-table-body');
    vacsTbody.innerHTML = '';
    state.vaccinations.forEach(v => {
        const animal = state.animals.find(a => a.id === v.animal_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${v.date}</td>
            <td>
                <div class="animal-name-cell">
                    <img src="${animal ? animal.img : ''}" class="animal-avatar" style="width:36px;height:36px;">
                    <strong>${animal ? animal.name : '—'}</strong>
                </div>
            </td>
            <td>${v.vaccine}</td>
            <td><strong style="color: var(--accent-orange);">${v.next_date}</strong></td>
        `;
        vacsTbody.appendChild(tr);
    });
}

function renderFinanceTables() {
    const feedTbody = document.getElementById('feeding-table-body');
    feedTbody.innerHTML = '';
    state.feedings.forEach(f => {
        const enc = state.enclosures.find(e => e.id === f.enclosure_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${f.date}</td>
            <td><strong>${enc ? enc.code.split(' ')[0] : '—'}</strong></td>
            <td>${f.food_type}</td>
        `;
        feedTbody.appendChild(tr);
    });

    const expTbody = document.getElementById('expenses-table-body');
    expTbody.innerHTML = '';
    state.expenses.forEach(e => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${e.date}</td>
            <td><span class="badge badge-quarantine">${e.category}</span></td>
            <td><strong style="color: var(--text-main)">${Number(e.amount).toLocaleString()} ₸</strong></td>
        `;
        expTbody.appendChild(tr);
    });

    const donTbody = document.getElementById('donations-table-body');
    donTbody.innerHTML = '';
    state.donations.forEach(d => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${d.date}</td>
            <td><strong>${d.donor}</strong></td>
            <td>${d.value} <span class="badge badge-ready" style="margin-left: 10px">${d.type}</span></td>
        `;
        donTbody.appendChild(tr);
    });
}

function renderAdoptionTables() {
    const reqTbody = document.getElementById('adoption-requests-table-body');
    reqTbody.innerHTML = '';

    state.adoptionRequests.forEach(r => {
        const animal = state.animals.find(a => a.id === r.animal_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${r.owner_name}</strong></td>
            <td style="color: var(--text-muted)">${r.phone}</td>
            <td>
                <div class="animal-name-cell">
                    <img src="${animal ? animal.img : ''}" class="animal-avatar" style="width:36px;height:36px;">
                    <strong>${animal ? animal.name : '—'}</strong>
                </div>
            </td>
            <td><span class="badge ${r.status === 'Одобрена' ? 'badge-ready' : (r.status === 'Завершено' ? 'badge-adopted' : 'badge-quarantine')}">${r.status}</span></td>
            <td>
                ${r.status !== 'Завершено' ? `
                    <button class="btn btn-primary btn-sm" onclick="approveAndTransfer(${r.id})"><i class="fa-solid fa-heart"></i> Отдать в семью</button>
                ` : '—'}
            </td>
        `;
        reqTbody.appendChild(tr);
    });

    const histTbody = document.getElementById('adoptions-history-table-body');
    histTbody.innerHTML = '';
    state.adoptionHistory.forEach(h => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="color: var(--text-muted); font-weight: 700;">${h.date}</td>
            <td><strong style="color: var(--accent-orange); font-size: 16px;">${h.animal_name}</strong></td>
            <td><strong>${h.owner_name}</strong></td>
            <td>${h.employee}</td>
        `;
        histTbody.appendChild(tr);
    });
}

function renderDashboardTables() {
    const attTbody = document.getElementById('dashboard-attention-table');
    attTbody.innerHTML = '';
    state.animals.filter(a => a.status === 'На карантине' || a.status === 'На лечении').slice(0,4).forEach(a => {
        const enc = state.enclosures.find(e => e.id === a.enclosure_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="animal-name-cell">
                    <img src="${a.img}" class="animal-avatar" style="width:40px;height:40px;">
                    <strong>${a.name}</strong>
                </div>
            </td>
            <td><span class="badge ${getStatusBadgeClass(a.status)}">${a.status}</span></td>
            <td><strong>${enc ? enc.code.split(' ')[0] : '—'}</strong></td>
        `;
        attTbody.appendChild(tr);
    });

    const vacTbody = document.getElementById('dashboard-vaccines-table');
    vacTbody.innerHTML = '';
    state.vaccinations.slice(0, 4).forEach(v => {
        const animal = state.animals.find(a => a.id === v.animal_id);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="animal-name-cell">
                    <img src="${animal ? animal.img : ''}" class="animal-avatar" style="width:40px;height:40px;">
                    <strong>${animal ? animal.name : '—'}</strong>
                </div>
            </td>
            <td>${v.vaccine}</td>
            <td><span style="color: var(--accent-orange); font-weight: 800;">${v.next_date}</span></td>
        `;
        vacTbody.appendChild(tr);
    });
}

document.getElementById('animal-search').addEventListener('input', renderAnimalsTable);
document.getElementById('animal-filter-species').addEventListener('change', renderAnimalsTable);
document.getElementById('animal-filter-status').addEventListener('change', renderAnimalsTable);

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function initModalSelects() {
    const encSelects = ['add-animal-enclosure', 'move-target-enclosure', 'feeding-enclosure'];
    encSelects.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = '';
        state.enclosures.forEach(e => {
            const opt = document.createElement('option');
            opt.value = e.id;
            opt.innerText = `${e.code} (Мест: ${e.current_count}/${e.capacity})`;
            sel.appendChild(opt);
        });
    });

    const animSelects = ['exam-animal-id', 'vaccine-animal-id', 'expense-animal-id', 'req-animal-id'];
    animSelects.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        if (id === 'expense-animal-id') sel.innerHTML = '<option value="">-- Всем малышам --</option>';
        else sel.innerHTML = '';

        state.animals.filter(a => a.status !== 'Пристроен').forEach(a => {
            const opt = document.createElement('option');
            opt.value = a.id;
            opt.innerText = `${a.name} (${a.species})`;
            sel.appendChild(opt);
        });
    });
}

function handleAddAnimal(e) {
    e.preventDefault();
    const encId = Number(document.getElementById('add-animal-enclosure').value);
    const enc = state.enclosures.find(x => x.id === encId);

    if (enc && enc.current_count >= enc.capacity) {
        showToast(`Домик ${enc.code.split(' ')[0]} переполнен!`, 'error');
        return;
    }

    const newId = state.animals.length ? Math.max(...state.animals.map(a => a.id)) + 1 : 1;
    const species = document.getElementById('add-animal-species').value;
    const newAnimal = {
        id: newId,
        name: document.getElementById('add-animal-name').value,
        species: species,
        breed: document.getElementById('add-animal-breed').value || 'Дворняжка',
        gender: document.getElementById('add-animal-gender').value,
        age: Number(document.getElementById('add-animal-age').value),
        arrival_date: new Date().toISOString().split('T')[0],
        enclosure_id: encId,
        status: document.getElementById('add-animal-status').value,
        img: getAnimalImg(species, newId)
    };

    enc.current_count++;
    state.animals.push(newAnimal);

    closeModal('modal-add-animal');
    initModalSelects();
    renderAll();
    showToast(`Малыш ${newAnimal.name} теперь с нами!`);
}

function openMoveModal(animalId) {
    const animal = state.animals.find(a => a.id === animalId);
    if (!animal) return;
    document.getElementById('move-animal-id').value = animal.id;
    document.getElementById('move-animal-name').innerText = `${animal.name}`;
    openModal('modal-move-animal');
}

function handleMoveAnimal(e) {
    e.preventDefault();
    const animalId = Number(document.getElementById('move-animal-id').value);
    const targetEncId = Number(document.getElementById('move-target-enclosure').value);

    const animal = state.animals.find(a => a.id === animalId);
    const targetEnc = state.enclosures.find(e => e.id === targetEncId);

    if (animal.enclosure_id === targetEncId) {
        showToast('Уже живет в этом домике!', 'error');
        return;
    }

    if (targetEnc.current_count >= targetEnc.capacity) {
        showToast(`Домик занят!`, 'error');
        return;
    }

    const oldEnc = state.enclosures.find(e => e.id === animal.enclosure_id);
    if (oldEnc) oldEnc.current_count--;

    targetEnc.current_count++;
    animal.enclosure_id = targetEncId;

    closeModal('modal-move-animal');
    initModalSelects();
    renderAll();
    showToast(`${animal.name} переехал в новый домик`);
}

function handleAddExam(e) {
    e.preventDefault();
    const animalId = Number(document.getElementById('exam-animal-id').value);
    const diagnosis = document.getElementById('exam-diagnosis').value;
    const treatment = document.getElementById('exam-treatment').value;

    state.medicalExams.unshift({
        id: state.medicalExams.length + 1,
        animal_id: animalId,
        date: new Date().toISOString().split('T')[0],
        diagnosis: diagnosis,
        treatment: treatment,
        vet_name: 'Айгерим С.'
    });

    closeModal('modal-add-exam');
    renderMedicalTables();
    showToast('Осмотр записан');
}

function handleAddVaccine(e) {
    e.preventDefault();
    const animalId = Number(document.getElementById('vaccine-animal-id').value);
    const vName = document.getElementById('vaccine-name').value;
    const nextDate = document.getElementById('vaccine-next-date').value;

    state.vaccinations.unshift({
        id: state.vaccinations.length + 1,
        animal_id: animalId,
        vaccine: vName,
        date: new Date().toISOString().split('T')[0],
        next_date: nextDate
    });

    closeModal('modal-add-vaccine');
    renderMedicalTables();
    renderDashboardTables();
    showToast('Прививка сделана');
}

function handleAddFeeding(e) {
    e.preventDefault();
    const encId = Number(document.getElementById('feeding-enclosure').value);
    const foodType = document.getElementById('feeding-type').value;
    const amount = document.getElementById('feeding-amount').value;

    state.feedings.unshift({
        id: state.feedings.length + 1,
        date: new Date().toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
        enclosure_id: encId,
        food_type: foodType,
        amount: amount
    });

    closeModal('modal-add-feeding');
    renderFinanceTables();
    showToast('Хвостики накормлены!');
}

function handleAddExpense(e) {
    e.preventDefault();
    const cat = document.getElementById('expense-category').value;
    const amt = document.getElementById('expense-amount').value;
    const desc = document.getElementById('expense-desc').value;
    const animId = document.getElementById('expense-animal-id').value;

    state.expenses.unshift({
        id: state.expenses.length + 1,
        date: new Date().toISOString().split('T')[0],
        category: cat,
        amount: amt,
        desc: desc,
        animal_id: animId ? Number(animId) : null
    });

    closeModal('modal-add-expense');
    renderFinanceTables();
    renderKPIs();
    showToast('Расход сохранен');
}

function handleAddDonation(e) {
    e.preventDefault();
    const donor = document.getElementById('donation-donor').value;
    const type = document.getElementById('donation-type').value;
    const val = document.getElementById('donation-value').value;

    state.donations.unshift({
        id: state.donations.length + 1,
        date: new Date().toISOString().split('T')[0],
        donor: donor,
        type: type,
        value: val
    });

    closeModal('modal-add-donation');
    renderFinanceTables();
    showToast('Спасибо за доброе дело!');
}

function handleAddRequest(e) {
    e.preventDefault();
    const animId = Number(document.getElementById('req-animal-id').value);
    const name = document.getElementById('req-owner-name').value;
    const phone = document.getElementById('req-owner-phone').value;

    state.adoptionRequests.push({
        id: state.adoptionRequests.length + 1,
        animal_id: animId,
        owner_name: name,
        phone: phone,
        status: 'На рассмотрении',
        date: new Date().toISOString().split('T')[0]
    });

    closeModal('modal-add-request');
    renderAdoptionTables();
    renderKPIs();
    showToast('Анкета создана');
}

function approveAndTransfer(requestId) {
    const req = state.adoptionRequests.find(r => r.id === requestId);
    if (!req) return;

    const animal = state.animals.find(a => a.id === req.animal_id);
    if (!animal) return;

    if (animal.status === 'На карантине' || animal.status === 'На лечении') {
        showToast(`Малыш еще лечится, нельзя отдать!`, 'error');
        return;
    }

    if (animal.status === 'Пристроен') {
        showToast(`Уже нашел семью!`, 'error');
        return;
    }

    animal.status = 'Пристроен';
    req.status = 'Завершено';

    const enc = state.enclosures.find(e => e.id === animal.enclosure_id);
    if (enc && enc.current_count > 0) enc.current_count--;

    state.adoptionHistory.unshift({
        id: state.adoptionHistory.length + 1,
        animal_name: animal.name,
        owner_name: req.owner_name,
        date: new Date().toISOString().split('T')[0],
        employee: 'Мадина К.'
    });

    state.adoptionRequests.forEach(otherReq => {
        if (otherReq.animal_id === animal.id && otherReq.id !== req.id && otherReq.status === 'На рассмотрении') {
            otherReq.status = 'Отклонена (Уже дома)';
        }
    });

    initModalSelects();
    renderAll();
    showToast(`Ура! ${animal.name} едет домой к ${req.owner_name} ❤️`);
}

function generateReport() {
    const reportNum = document.getElementById('report-select').value;
    const outputDiv = document.getElementById('report-output');
    const titleElem = document.getElementById('report-title');
    let html = '';

    switch (reportNum) {
        case '1':
            titleElem.innerText = '1. Хвостики по видам и статусам';
            html = getReport1();
            break;
        case '2':
            titleElem.innerText = '2. Расходы приюта по категориям';
            html = getReport2();
            break;
        case '3':
            titleElem.innerText = '3. Самые популярные малыши';
            html = getReport3();
            break;
        case '4':
            titleElem.innerText = '4. Статистика обретения дома';
            html = getReport4();
            break;
        case '5':
            titleElem.innerText = '5. Активность наших сотрудников';
            html = getReport5();
            break;
        case '6':
            titleElem.innerText = '6. Среднее время ожидания семьи';
            html = getReport6();
            break;
        case '7':
            titleElem.innerText = '7. Кому пора на прививку';
            html = getReport7();
            break;
        case '8':
            titleElem.innerText = '8. Заполненность домиков (%)';
            html = getReport8();
            break;
        case '9':
            titleElem.innerText = '9. Анализ добрых дел';
            html = getReport9();
            break;
        case '10':
            titleElem.innerText = '10. Наибольшие затраты на содержание';
            html = getReport10();
            break;
    }
    outputDiv.innerHTML = html;
}

function getReport1() {
    const map = {};
    state.animals.forEach(a => {
        const key = `${a.species} — ${a.status}`;
        map[key] = (map[key] || 0) + 1;
    });
    let trs = Object.keys(map).map(k => {
        const [sp, st] = k.split(' — ');
        return `<tr><td><strong>${sp}</strong></td><td><span class="badge ${getStatusBadgeClass(st)}">${st}</span></td><td><strong>${map[k]}</strong></td></tr>`;
    }).join('');
    return `<table class="data-table"><thead><tr><th>Вид</th><th>Статус</th><th>Количество</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport2() {
    const map = {};
    state.expenses.forEach(e => { map[e.category] = (map[e.category] || 0) + Number(e.amount); });
    let trs = Object.keys(map).map(k => `<tr><td>${k}</td><td><strong style="color: var(--accent-orange)">${map[k].toLocaleString()} ₸</strong></td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>Категория</th><th>Итого</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport3() {
    const counts = {};
    state.adoptionRequests.forEach(r => { counts[r.animal_id] = (counts[r.animal_id] || 0) + 1; });
    let sorted = Object.keys(counts).map(id => {
        const animal = state.animals.find(a => a.id === Number(id));
        return { animal: animal ? animal.name : 'ID ' + id, img: animal ? animal.img : '', count: counts[id] };
    }).sort((a,b) => b.count - a.count);
    let trs = sorted.map(s => `<tr><td><div class="animal-name-cell"><img src="${s.img}" class="animal-avatar" style="width:36px;height:36px;"><strong>${s.animal}</strong></div></td><td><span class="badge badge-ready">${s.count} заявка(и)</span></td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>Хвостик</th><th>Заявок</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport4() {
    const total = state.animals.length;
    const adopted = state.animals.filter(a => a.status === 'Пристроен').length;
    const ready = state.animals.filter(a => a.status === 'Готов к пристройству').length;
    const inMedical = state.animals.filter(a => a.status === 'На лечении' || a.status === 'На карантине').length;
    return `
        <table class="data-table">
            <thead><tr><th>Показатель</th><th>Количество</th><th>Процент</th></tr></thead>
            <tbody>
                <tr><td>Уже дома ❤️</td><td><strong>${adopted}</strong></td><td><span class="badge badge-adopted">${Math.round((adopted/total)*100)}%</span></td></tr>
                <tr><td>Ждут семью</td><td><strong>${ready}</strong></td><td><span class="badge badge-ready">${Math.round((ready/total)*100)}%</span></td></tr>
                <tr><td>Лечатся / Карантин</td><td><strong>${inMedical}</strong></td><td><span class="badge badge-treatment">${Math.round((inMedical/total)*100)}%</span></td></tr>
            </tbody>
        </table>
    `;
}

function getReport5() {
    let trs = state.employees.map(e => `<tr><td><strong>${e.name}</strong></td><td>${e.role}</td><td><span class="badge badge-blue">${e.operations_count} дел</span></td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>Сотрудник</th><th>Роль</th><th>Активность</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport6() {
    const now = new Date();
    let totalDays = 0; let count = 0;
    state.animals.forEach(a => {
        const arr = new Date(a.arrival_date);
        totalDays += Math.ceil((now - arr) / (1000 * 60 * 60 * 24));
        count++;
    });
    const avg = count ? (totalDays / count).toFixed(1) : 0;
    return `<div style="padding: 30px; text-align: center; border-radius: var(--radius-lg); background: #FFF3E0; border: 2px dashed #FFB74D;"><span style="font-size: 18px; color: var(--text-main); font-weight: 700;">В среднем малыши ждут свою семью:</span><strong style="color: var(--accent-orange); font-size: 36px; display: block; margin-top: 10px;">${avg} дней</strong></div>`;
}

function getReport7() {
    let trs = state.vaccinations.map(v => {
        const animal = state.animals.find(a => a.id === v.animal_id);
        return `<tr><td><div class="animal-name-cell"><img src="${animal ? animal.img : ''}" class="animal-avatar" style="width:36px;height:36px;"><strong>${animal ? animal.name : '—'}</strong></div></td><td>${v.vaccine}</td><td style="color: var(--text-muted)">${v.date}</td><td><strong style="color: var(--accent-orange);">${v.next_date}</strong></td></tr>`;
    }).join('');
    return `<table class="data-table"><thead><tr><th>Малыш</th><th>Вакцина</th><th>Была</th><th>Пора делать</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport8() {
    let trs = state.enclosures.map(e => {
        const pct = Math.round((e.current_count / e.capacity) * 100);
        let badgeClass = pct >= 100 ? 'badge-treatment' : (pct > 70 ? 'badge-quarantine' : 'badge-ready');
        return `<tr><td><strong>${e.code.split(' ')[0]}</strong> <span style="color: var(--text-muted); font-size: 13px; margin-left: 8px;">${e.type}</span></td><td>${e.current_count} / ${e.capacity}</td><td>${e.capacity - e.current_count}</td><td><span class="badge ${badgeClass}">${pct}%</span></td></tr>`;
    }).join('');
    return `<table class="data-table"><thead><tr><th>Домик</th><th>Занято</th><th>Свободно</th><th>Загрузка</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport9() {
    let trs = state.donations.map(d => `<tr><td style="color: var(--text-muted)">${d.date}</td><td><strong>${d.donor}</strong></td><td><span class="badge ${d.type === 'Денежное' ? 'badge-ready' : 'badge-blue'}">${d.type}</span></td><td><strong>${d.value}</strong></td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>Дата</th><th>Волшебник</th><th>Вид</th><th>Дар</th></tr></thead><tbody>${trs}</tbody></table>`;
}

function getReport10() {
    const map = {};
    state.expenses.forEach(e => {
        if (e.animal_id) map[e.animal_id] = (map[e.animal_id] || 0) + Number(e.amount);
    });
    let sorted = Object.keys(map).map(id => {
        const animal = state.animals.find(a => a.id === Number(id));
        return { name: animal ? animal.name : 'ID ' + id, img: animal ? animal.img : '', amount: map[id] };
    });
    if (sorted.length === 0) {
        sorted.push({ name: 'Чип', img: getAnimalImg('Енот', 8), amount: 25000 }, { name: 'Барсик', img: getAnimalImg('Кошка', 1), amount: 15000 });
    }
    let trs = sorted.map(s => `<tr><td><div class="animal-name-cell"><img src="${s.img}" class="animal-avatar" style="width:36px;height:36px;"><strong>${s.name}</strong></div></td><td><strong style="color: var(--accent-red);">${s.amount.toLocaleString()} ₸</strong></td></tr>`).join('');
    return `<table class="data-table"><thead><tr><th>Малыш</th><th>Затраты на здоровье</th></tr></thead><tbody>${trs}</tbody></table>`;
}