const totalPages = 68;
let currentPage = 0;

const pagesContainer = document.getElementById('pages');
const pageNumber = document.getElementById('page-number');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const toggleBtn = document.getElementById('toggle-theme');

// Przykładowe teksty - tutaj wpisz swoje treści
const pageTexts = [
  `1. Motyw cuerpienia niezawinionego - Księga Mioba

w. - uerpienie towarzyszy człowiekowi od zawre

- człowiek wielokrotnie próbowat odnaleźć źródło/powód uerpienia, często widige je w swoich crynach, które miaty zostać uharané właśnie cierpieniem

- występuje cierpienie niezawinione,

dla litórego powód ciężko znaleźl, Ono pner co od zawre byto szczególnie intrygujące

t: mimo braku zrozumienia, dlaczego cierpienie dotyka człowieka, ten jest w stanie je znieść dzięki wiarze w boga bardzo silnej

1: księga hioba

-Miob - bogaty, sprawiedliwy, pobożny, ma liczną rodzine

-Szatan stawia tezę, że Hiob odwróu się od Boga, gdy straci wrystho co poriada na Ziemi Bóg wystawia Hioba ha próbę

-Hiob trau duen, bogactwo, choruje na trad, zona namawiago, by odwrócił się od boga, ten jednak pray nim pozostaje

-Hiob odzyskuje to, co miat i żyje suręśliwie prez holejne 140 lat

-ufa w booka, sprawiedliwość

2: Jan Kochanowski - treny

-autor po straue Unrulli buntuje sie precuw bogu, preżywa kryzys świa to poglądowy, nie jest w stanie zrozumieć woli boga

w trenie XIX ma wizję, że jego matha opielnie się Urrutia W niebie, daje mu to pocieszenie i nadzieję, w boga, akceptuje to, co się wydarzyto

prywraca wiare P: -mimo braku zrozumienia bookiej wolk, bohaterowie

z bardzo silną wiara, sq cierpienie niezawinione, wierząc W stanie zaakceptowal w słuszność boshich`,
  "Strona 2: Dalszy tekst...",
  "Strona 3: Jeszcze więcej...",
  // ...
  "Strona 68: Ostatnia strona."
];

// Tworzenie 68 stron
for (let i = 0; i < totalPages; i++) {
  const page = document.createElement('div');
  page.classList.add('page');

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');
  textBox.textContent = pageTexts[i];

  page.appendChild(textBox);
  pagesContainer.appendChild(page);
}

function updateView() {
  pagesContainer.style.transform = `translateX(-${currentPage * 100}vw)`;
  pageNumber.textContent = `${currentPage + 1} / ${totalPages}`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateView();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateView();
  }
});

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});


updateView();
