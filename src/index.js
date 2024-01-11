const init = () => {
   const idForm = document.querySelector('form')
   idForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    const userInp = document.getElementById('searchByID')
    fetch(`http://localhost:3000/movies`)
    .then(res => res.json())
    .then(data => {
        let title = document.querySelector('section#movieDetails h4')
        let summary = document.querySelector('section#movieDetails p')
        title.textContent = data[userInp.value].title
        summary.textContent = data[userInp.value].summary
    })
   })
  
}

document.addEventListener('DOMContentLoaded', init());