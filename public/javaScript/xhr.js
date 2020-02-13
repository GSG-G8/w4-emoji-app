
function xhrSend() {
  let newText = input.value.replace(/\s+/g, ' ').trim();
  if (newText !== '') {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          sugestions = JSON.parse(xhr.responseText);
          suggestionsCount = sugestions.length;
          selected = 0;
          renderAutocomplete();
        } else if (xhr.status === 404) {
          console.log('xhr error');
        }
      }
    };
    xhr.open('GET', `/search/${newText}`);
    xhr.send();
  }
}
