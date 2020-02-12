
let selected = 0;
const suggestionsCount = 6;
const sugestions = [];

const input = document.getElementById('search-input');

input.addEventListener('keydown', (evn) => {
  if (evn.key === 'ArrowDown' || evn.key === 'ArrowUp') {
    if (evn.key === 'ArrowDown') {
      selected = (selected + 1) % suggestionsCount;
    } else {
      selected = (selected + suggestionsCount - 1) % suggestionsCount;
    }
    input.value = sugestions[selected].name;
    evn.preventDefault();
  } else if (evn.key === 'Enter') {
    evn.preventDefault();
    evn.target.blur();
  }
});

input.addEventListener('keyup', () => {
  xhrSend();
});

function renderAutocomplete() {
  let div;
  const list = document.getElementById('suggestion');

  list.textContent = '';
  sugestions.forEach((sug, idx) => {
    div = document.createElement('li');
    div.textContent = `${sugestions[idx].char} ${sugestions[idx].name}`;
    if (selected === idx) div.classList.add('active');
    list.appendChild(div);
  });
}

renderAutocomplete();
