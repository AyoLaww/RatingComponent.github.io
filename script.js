const form = document.querySelector('form')
const template = document.querySelector('template')
const mainWrapper = document.querySelector('main')

function handleSubmit(event){
    event.preventDefault()

    const formData = new FormData(form)
    const rating = formData.get("rating")
    
    if(rating){
        mainWrapper.innerHTML = template.innerHTML.replace(/x/, rating)
    }
}

form.addEventListener("submit", handleSubmit)