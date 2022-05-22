const result = document.querySelector('#result')
const passwordLengthInput = document.querySelector('#password-length')
const passwordLengthDisplay = document.querySelector('#password-length-display')
const characterSetCheckboxes = Array.from(document.querySelectorAll('[name=character-sets]'))
const copyButton = document.querySelector("#btn-copy")
const defaultCopyButtonText = copyButton.textContent

passwordLengthDisplay.textContent = passwordLengthInput.value

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const passwordLength = parseInt(passwordLengthInput.value, 10)

  result.value = PasswordGenerator.generate(passwordLength, getSelectedCharacterSets())
})

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(result.value)
    .then(() => {
      copyButton.textContent = "Copied!"
      setTimeout(() => {
        copyButton.textContent = defaultCopyButtonText
      }, 1000)
    })
})

passwordLengthInput.addEventListener('input', (event) => {
  passwordLengthDisplay.textContent = event.target.value
})

const getSelectedCharacterSets = () => (
  characterSetCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value)
)
