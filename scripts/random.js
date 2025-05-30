const modes = {
  paradox: ["Paradox"],
  bullet: ["Bullet"],
  robot: ["Robot"],
  gunslinger: ["Gunslinger"],
};


// Начальные переменные
let pool = [];
let used = [];

// Перемешиваем массив (фишка — не идеально, но для простоты ок)
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandom() {

  const resultElement = document.getElementById("result");

  // Если пул пустой — создаём заново
  if (pool.length === 0) {
    // Базовые варианты
    let combinedOptions = ['Convict', 'Hunter', 'Marine', 'Pilot'];

    // Добавляем активные режимы
    for (let key in modes) {
      const checkbox = document.getElementById(key);
      if (checkbox && checkbox.checked) {
        combinedOptions = combinedOptions.concat(modes[key]);
      }
    }

    pool = shuffle(combinedOptions);
    used = []; // Сброс использованных
  }

  // Достаём один элемент
  const next = pool.pop();
  used.push(next);

  // Переводим персонажа с учётом языка
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'eng';

  const translatedCharacter = translationsCharacters[next]
    ? translationsCharacters[next][lang]
    : next;

  const resultLabel = translationsUI.resultLabel
    ? translationsUI.resultLabel[lang]
    : "Result";  

  resultElement.textContent = `${resultLabel}: ${translatedCharacter}`;
  const gifPath = `img/${next.toLowerCase()}.webp`;
  const characterGif = document.getElementById("character-gif");
  characterGif.src = gifPath;

  // Показать блок с результатом и гифкой
  const resultOverlay = document.getElementById("result-overlay");
  resultOverlay.classList.add("show");
}