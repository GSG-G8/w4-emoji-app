const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        JSON.parse(xhr.responseText);
      } catch (error) {
        console.log(error);
      }
    } else if (xhr.status === 404) {
      console.log(xhr.responseText);
    }
  }
};
xhr.open('GET', 'url in here');
xhr.send();
