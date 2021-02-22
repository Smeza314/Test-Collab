
// when button is clicked pops up an alert
document.addEventListener('click', event => {
  if (event.target.classList.contains('alert')) {
    alert("hi")
  }
})