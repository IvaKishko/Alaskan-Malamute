let url = "https://random.dog/woof.json"
let dataUrl = ''
const btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click', getDogo)

function getDogo(){
console.log('ssss')
        fetch(url)
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                        dataUrl = data.url
                        console.log(dataUrl)
                        document.querySelector('img').src = dataUrl
                })
        document.body.classList.toggle("shavi");

        }