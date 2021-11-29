const dog = document.querySelector('.dog-btn')


dog.addEventListener('click', () => {
    const dogUrl = 'https://dog.ceo/api/breeds/image/random'
    const dogImg = document.querySelector('.dogs')
    fetch(dogUrl)
    .then((data) => data.json())
    .then(data => dogImg.src = data.message)
    .catch(err => console.log(err))
})

const weatherBtn = document.querySelector('.weather-btn')

weatherBtn.addEventListener('click', () => {
    const weatherInput = document.querySelector('.weather-input').value
    const weatherUrl = `https://goweather.herokuapp.com/weather/${weatherInput}`

    fetch(weatherUrl)
        .then(data => data.json())
        .then(data => {
            const temp = document.querySelector('.temperature')
            const wind = document.querySelector('.wind')
            const description = document.querySelector('.description')
            const weatherContainer = document.querySelector('.form-container')
            const remove = () => weatherContainer.classList.remove('sunny', 'cloudy', 'rain')
            if (data.description.includes('Sunny')) {
                remove()
                weatherContainer.classList.add('sunny')
            }
            if (data.description.includes('cloudy')) {
                remove()
                weatherContainer.classList.add('cloudy')
            }
            if (data.description.includes('rain')) {
                remove()
                weatherContainer.classList.add('rain')
            }
            temp.innerText = data.temperature
            wind.innerText = data.wind
            description.innerText = data.description
    })
})