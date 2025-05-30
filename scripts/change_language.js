let currentLang = 'eng';

const translationsUI = {
    toc: { eng: 'Enter the Gungeon: Character Randomizer', rus: 'Enter the Gungeon: генератор персонажей' },
    langToggle: { eng: 'ENG', rus: 'RUS' },
    resultLabel: { eng: "Result",rus: "Результат"
  },
};

const translationsCharacters = {
  'label-paradox': { eng: 'Paradox', rus: 'Парадокс' },
  'label-bullet': { eng: 'Bullet', rus: 'Пуля' },
  'label-robot': { eng: 'Robot', rus: 'Робот' },
  'label-gunslinger': { eng: 'Gunslinger', rus: 'Стрелок' },
  Convict: { eng: "Convict", rus: "Преступница" },
  Hunter: { eng: "Hunter", rus: "Охотник" },
  Marine: { eng: "Marine", rus: "Морпех" },
  Pilot: { eng: "Pilot", rus: "Пилот" },
  Paradox: { eng: "Paradox", rus: "Парадокс" },
  Bullet: { eng: "Bullet", rus: "Пуля" },
  Robot: { eng: "Robot", rus: "Робот" },
  Gunslinger: { eng: "Gunslinger", rus: "Стрелок" },
};

function toggleLanguage() {
  currentLang = currentLang === 'eng' ? 'rus' : 'eng';

  // Переключение текста кнопки
  document.getElementById("lang-toggle").textContent = translationsUI.langToggle[currentLang];

  // Перевод заголовка
  document.getElementById("toc").textContent = translationsUI.toc[currentLang];

  // Перевод подписей чекбоксов
  document.getElementById("label-paradox").textContent = translationsCharacters['label-paradox'][currentLang];
  document.getElementById("label-bullet").textContent = translationsCharacters['label-bullet'][currentLang];
  document.getElementById("label-robot").textContent = translationsCharacters['label-robot'][currentLang];
  document.getElementById("label-gunslinger").textContent = translationsCharacters['label-gunslinger'][currentLang];
}