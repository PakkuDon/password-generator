const result = document.querySelector('#result')
const passwordLengthInput = document.querySelector('#password-length')

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const passwordLength = parseInt(passwordLengthInput.value, 10)

  result.value = PasswordGenerator.generate(passwordLength, ['lower', 'upper', 'numbers', 'symbols'])
})
