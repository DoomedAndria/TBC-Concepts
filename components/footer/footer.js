async function loadFooter() {
  const response = await fetch('components/footer/footer.html');
  const template = await response.text();
  const dest = document.querySelector('#footer');
  dest.innerHTML = template;
}

loadFooter()