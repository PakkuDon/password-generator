const result = document.querySelector('#result')
const passwordLengthInput = document.querySelector('#password-length')
const characterSetCheckboxes = Array.from(document.querySelectorAll('[name=character-sets]'))

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const passwordLength = parseInt(passwordLengthInput.value, 10)

  result.value = PasswordGenerator.generate(passwordLength, getSelectedCharacterSets())
})

const getSelectedCharacterSets = () => (
  characterSetCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
)
