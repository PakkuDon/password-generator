const result = document.querySelector('#result')
const passwordLengthInput = document.querySelector('#password-length')
const passwordLengthDisplay = document.querySelector('#password-length-display')
const characterSetCheckboxes = Array.from(document.querySelectorAll('[name=character-sets]'))

passwordLengthDisplay.textContent = passwordLengthInput.value

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const passwordLength = parseInt(passwordLengthInput.value, 10)

  result.value = PasswordGenerator.generate(passwordLength, getSelectedCharacterSets())
})

passwordLengthInput.addEventListener('input', (event) => {
  passwordLengthDisplay.textContent = event.target.value
})

const getSelectedCharacterSets = () => (
  characterSetCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
)
