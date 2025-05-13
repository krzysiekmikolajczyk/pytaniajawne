const totalPages = 68;
let currentPage = 0;

const pagesContainer = document.getElementById('pages');
const pageNumber = document.getElementById('page-number');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Przykładowe teksty (możesz uzupełnić własnymi)
const pageTexts = Array.from({ length: totalPages }, (_, i) => `To jest treść strony ${i + 1}.`);

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

updateView();
