const button = document.getElementById('btn');

function changeText() {
  const text = document.getElementById('text');
  text.textContent = "ボタンをクリックしました";
}

button.addEventListener('click', changeText);