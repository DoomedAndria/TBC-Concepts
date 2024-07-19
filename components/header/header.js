async function loadHeader() {
  const response = await fetch('components/header/header.html');
  const template = await response.text();
  const dest = document.querySelector('#header');
  dest.innerHTML = template;
}

loadHeader()