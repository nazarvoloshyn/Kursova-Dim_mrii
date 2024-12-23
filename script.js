document.getElementById('client-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігає оновленню сторінки

  // Отримуємо дані з форми
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const square = document.getElementById('square').value.trim();
  const type = document.getElementById('type').value.trim();
  const floors = document.getElementById('floors').value.trim();
  const requirements = document.getElementById('requirements').value.trim();
  const blueprint = document.getElementById('blueprint').files[0];

  // Перевіряємо, чи всі обов’язкові поля заповнені
  if (!name || !email || !square || !type || !floors || !blueprint) {
      alert('Будь ласка, заповніть усі обов’язкові поля!');
      return;
  }

  // Формуємо текст для збереження
  const clientData = `
Ім'я: ${name}
Email: ${email}
Квадратура: ${square} м²
Тип об'єкта: ${type}
Кількість поверхів: ${floors}
Додаткові вимоги: ${requirements}
---------------------------
`;

  // Завантажуємо текстовий файл
  const blob = new Blob([clientData], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'client-requirements.txt';
  link.click();

  // Показуємо завантажений файл (опціонально)
  console.log('Завантажений файл:', blueprint.name);

  // Очищення форми
  document.getElementById('client-form').reset();

  alert('Ваші дані були успішно передані!');
});
document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  // Отримуємо дані з форми
  const taskName = document.getElementById('task-name').value.trim();
  const department = document.getElementById('department').value.trim();
  const priority = document.getElementById('priority').value.trim();

  // Перевіряємо, чи всі обов’язкові поля заповнені
  if (!taskName || !department || !priority) {
      alert('Будь ласка, заповніть усі поля!');
      return;
  }

  // Додаємо завдання до відповідного відділу
  const taskList = document.querySelector(`#${department}-tasks ul`);
  const taskItem = document.createElement('li');
  taskItem.textContent = `Завдання: ${taskName} (Пріоритет: ${priority})`;

  // Додаємо клас для стилізації залежно від пріоритету
  taskItem.classList.add(priority); // Класи: high, medium, low
  taskList.appendChild(taskItem);

  // Очищення форми
  document.getElementById('task-form').reset();
});
