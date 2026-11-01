// --- 1. Логика переключения страниц (Навигация) ---
function openPage(evt, pageName) {
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Убираем класс active у всех ссылок в меню
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Показываем выбранную страницу и делаем ссылку активной
    document.getElementById(pageName).classList.add('active');
    evt.currentTarget.classList.add('active');

    // Прокрутка наверх при смене страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 2. Данные для страницы "Программа" ---
const events = [
    { day: 'day1', time: '10:00 - 12:00', title: 'Открытие фестиваля', desc: 'Торжественная церемония, выступление почетных гостей и авторов.' },
    { day: 'day1', time: '13:00 - 15:00', title: 'Встреча с современным писателем', desc: 'Автограф-сессия и обсуждение новой книги в жанре фэнтези.' },
    { day: 'day1', time: '16:00 - 18:00', title: 'Мастер-класс по сторителлингу', desc: 'Как написать свой первый рассказ. Спикер: главный редактор издательства.' },
    { day: 'day2', time: '11:00 - 13:00', title: 'Круглый стол: Цифровое чтение', desc: 'Будущее библиотек, аудиокниги, буктрейлеры и подкасты.' },
    { day: 'day2', time: '14:00 - 16:00', title: 'Поэтический слэм', desc: 'Соревнование молодых поэтов. Голосует зрительный зал!' },
    { day: 'day2', time: '17:00 - 19:00', title: 'Ночь в библиотеке', desc: 'Квест по старинным фондам и чтение при свечах.' },
    { day: 'day3', time: '12:00 - 14:00', title: 'Книжный квиз', desc: 'Интеллектуальная игра для команд на знание мировой литературы.' },
    { day: 'day3', time: '15:00 - 17:00', title: 'Закрытие фестиваля', desc: 'Подведение итогов, награждение победителей конкурсов и концерт.' }
];

// Функция отрисовки карточек
function renderEvents(filterDay = 'all') {
    const container = document.getElementById('events-container');
    container.innerHTML = ''; // Очищаем контейнер

    const filtered = filterDay === 'all' 
        ? events 
        : events.filter(e => e.day === filterDay);

    filtered.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <span class="event-time">${event.time}</span>
            <h3>${event.title}</h3>
            <p>${event.desc}</p>
        `;
        container.appendChild(card);
    });
}

// Функция фильтрации
function filterEvents(day, btnElement) {
    // Смена активной кнопки
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // Отрисовка нужных событий
    renderEvents(day);
}

// Инициализация страницы (запуск при загрузке)
document.addEventListener('DOMContentLoaded', () => {
    renderEvents('all'); // Показываем все события изначально
});

// --- 3. Обработка формы обратной связи ---
function submitForm(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const form = event.target;
    
    // Имитация отправки данных
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Отправка...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами.');
        form.reset(); // Очищаем форму
        btn.innerText = originalText;
        btn.style.opacity = '1';
    }, 1000);
}