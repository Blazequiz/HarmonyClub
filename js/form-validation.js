document.getElementById('registration').addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігаємо стандартному надсиланню форми

  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  let password = document.getElementById('password').value;

  // Очищаємо попередні повідомлення про помилки
  document.getElementById('email-error').innerText = "";
  document.getElementById('address-error').innerText = "";
  document.getElementById('password-error').innerText = "";

  let valid = true; // Змінна для відстеження стану валідації

  // Перевірка електронної пошти
  if (!validateEmail(email)) {
      document.getElementById('email-error').innerText = "Введіть правильну електронну адресу.";
      valid = false; // Якщо помилка, встановлюємо valid в false
  }

  // Перевірка адреси (можна додати більш складну валідацію при необхідності)
  if (address.length < 5) {
      document.getElementById('address-error').innerText = "Введіть правильну адресу.";
      valid = false; // Якщо помилка, встановлюємо valid в false
  }

  // Перевірка пароля
  if (password.length < 8) {
      document.getElementById('password-error').innerText = "Пароль повинен містити принаймні 8 символів.";
      valid = false; // Якщо помилка, встановлюємо valid в false
  }

  if (valid) {
      alert("Форма заповнена правильно і готова до відправки.");
      document.getElementById('registration').reset(); // Очищаємо форму після успішної валідації
  }
});

function validateEmail(email) {
  // Проста регулярка для перевірки електронної адреси
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email); // Повертає true, якщо email відповідає шаблону
}
