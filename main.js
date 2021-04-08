
const dogButton = document.querySelector('#dog-button')
const dogImage = document.querySelector('#dog-image')
const URL = 'https://dog.ceo/api/breeds/image/random'

dogButton.addEventListener('click', ()=>{
    fetch(URL)
        .then((data) => data.json())
        .then ((response)=>{
            dogImage.src = response.message
        })
        .catch((error)=> console.log(error))
})