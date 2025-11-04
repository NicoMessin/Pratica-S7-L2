const saveButton = document.getElementById("save");
const removeButton = document.getElementById("remove");
const nameInput = document.getElementById("nome");
const savedNameDisplay = document.getElementById("savedName");

const KEY = "savedName";

const savedValue = localStorage.getItem(KEY);
if (savedValue) {
  savedNameDisplay.innerText = `Nome salvato: ${savedValue}`;
}

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name !== "") {
    localStorage.setItem(KEY, name);
    savedNameDisplay.innerText = `Nome salvato: ${name}`;
  }
});

removeButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem(KEY);
  savedNameDisplay.innerText = "";
  nameInput.value = "";
});

// ES 2)
const COUNTER_KEY = "sessionCounter";
const counterElement = document.getElementById("counter");

let counter = parseInt(sessionStorage.getItem(COUNTER_KEY)) || 0;
counterElement.innerText = counter;


setInterval(() => {
  counter++;
  counterElement.innerText = counter;
  sessionStorage.setItem(COUNTER_KEY, counter);
}, 1000);
