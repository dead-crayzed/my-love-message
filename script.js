// Переменные для хранения текущих координат мыши
let mouseX = 0;
let mouseY = 0;

// Отслеживаем движение мыши
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX; // Обновляем координаты X
  mouseY = event.clientY; // Обновляем координаты Y
});

// Функция для создания SVG-сердечка
function createHeart(x, y) {
  // Создаем SVG элемент
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24'); // Размер области просмотра
  svg.setAttribute('width', '100'); // Ширина сердечка
  svg.setAttribute('height', '100'); // Высота сердечка
  svg.style.position = 'absolute';
  svg.style.left = `${x}px`;
  svg.style.top = `${y}px`;
  svg.style.opacity = '0.5'; // Начальная прозрачность
  svg.style.pointerEvents = 'none';

  // Создаем путь для сердечка
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
  );
  path.setAttribute('fill', '#FF6F61'); // Цвет сердечка

  // Добавляем путь в SVG
  svg.appendChild(path);

  // Добавляем SVG в контейнер
  const container = document.getElementById('heart-container');
  container.appendChild(svg);

  // Запускаем анимацию
  svg.style.animation = 'fly-away 4s ease-out forwards';

  // Удаляем сердечко после завершения анимации
  setTimeout(() => {
    svg.remove();
  }, 4000);
}

// Интервал для создания сердечек
setInterval(() => {
  createHeart(mouseX, mouseY); // Создаем сердечко в текущих координатах мыши
}, 500); // Каждые 0.5 секунды