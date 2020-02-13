
let selected = 0;
let suggestionsCount = 10;
let sugestions = [];

const input = document.getElementById('search-input');

input.addEventListener('keydown', (evn) => {
  if (evn.key === 'ArrowDown' || evn.key === 'ArrowUp') {
    if (evn.key === 'ArrowDown') {
      selected = (selected + 1) % suggestionsCount;
    } else {
      selected = (selected + suggestionsCount - 1) % suggestionsCount;
    }
    renderAutocomplete();
    evn.preventDefault();
  } else if (evn.key === 'Enter') {
    renderDetails(sugestions[selected]);
    evn.preventDefault();
    evn.target.blur();
  }
});

input.addEventListener('keyup', () => {
  xhrSend();
});

function selectThis() {
    renderDetails(sugestions[this.emojiIndex]);
}

function renderAutocomplete() {
  let div;
  const list = document.getElementById('suggestion');

  list.textContent = '';
  sugestions.forEach((sug, idx) => {
    div = document.createElement('li');
    div.emojiIndex = idx;
    div.onmousedown = selectThis;
    div.textContent = `${sugestions[idx].char} ${sugestions[idx].name}`;
    if (selected === idx) div.classList.add('active');
    list.appendChild(div);
  });
}

const detailsPreview = document.getElementById('preview');
const detailsName = document.getElementById('details-name');
const detailsCode = document.getElementById('details-code');
const detailsCategory = document.getElementById('details-category');
const detailsGroup = document.getElementById('details-group');
const detailsSubgroup = document.getElementById('details-subgroup');

function renderDetails(obj) {
  detailsPreview.textContent = obj.char;
  detailsName.textContent = obj.name;
  detailsCode.textContent = obj.codes;
  detailsCategory.textContent = obj.category;
  detailsGroup.textContent = obj.group;
  detailsSubgroup.textContent = obj.subgroup;
}
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
document.getElementById('btn-copy').onclick = function () {
  const text = document.getElementById('preview').textContent;
  copyToClipboard(text);
}