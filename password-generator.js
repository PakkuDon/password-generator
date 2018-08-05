const PasswordGenerator = (() => {
  const charsets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    symbols: '!@#$%^&*.~-_',
  }

  const getCharacterFromCharacterSet = (charset) => {
    const index = Math.floor(Math.random() * charset.length)
    return charset[index]
  }

  return {
    generate: (length, selectedCharsets) => {
      const availableCharSet = selectedCharsets.map((charsetName) => charsets[charsetName]).join('')
      let result = ''

      for (let i = 0; i < length; i++) {
        result += getCharacterFromCharacterSet(availableCharSet)
      }

      return result
    }
  }
})()
