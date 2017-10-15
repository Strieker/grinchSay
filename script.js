const textBox = document.getElementById('textBox');
const repetitionBox = document.getElementById('repetitionBox');

textBox.addEventListener('input', repeatedTextPopulator);
repetitionBox.addEventListener('input', repeatedTextPopulator);

function repeatedTextPopulator() {
  const inputText = textBox.value;
  const repetitionNumber = repetitionBox.value;
  const repeatedText = (`${inputText} \n`).repeat(repetitionNumber);
  document.getElementById('result').innerHTML = repeatedText;
}

