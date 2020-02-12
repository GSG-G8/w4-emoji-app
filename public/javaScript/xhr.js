let searchText = '';
function xhrSend() {
  let newText = input.value.replace(/\s+/g, ' ').trim();
  if (newText !== searchText) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          JSON.parse(xhr.responseText);
        } else if (xhr.status === 404) {
          console.log('xhr error');
        }
      }
    };
    xhr.open('GET', `/search/${newText}`);
    xhr.send();
    searchText += newText;
  }
}
