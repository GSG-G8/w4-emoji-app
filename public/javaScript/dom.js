
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

input.addEventListener('keyup', (evn) => {
    xhrSend();
});

