const saveButton = document.getElementById('save')
const removeButton = document.getElementById('remove')
const nameInput = document.getElementById('nome')
const savedNameDisplay = document.getElementById('savedName')

const KEY = 'savedName'


const savedValue = localStorage.getItem(KEY)
if (savedValue) {
  savedNameDisplay.textContent = `Nome salvato: ${savedValue}`
}


saveButton.addEventListener('click', (event) => {
  event.preventDefault()
  const name = nameInput.value.trim()
  if (name !== '') {
    localStorage.setItem(KEY, name)
    savedNameDisplay.textContent = `Nome salvato: ${name}`
  }
})


removeButton.addEventListener('click', (event) => {
  event.preventDefault()
  localStorage.removeItem(KEY)
  savedNameDisplay.textContent = ''
  nameInput.value = ''
})
