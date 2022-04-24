//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getDate)

function getDate(){
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Cnsui5FMwJmcgwtCHfsGj4He6ISNHmQqa2c1FWbM&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('img').style.border = '5px solid white' 
                document.querySelector('img').style.boxShadow = '10px 10px 15px black' 
                document.querySelector('iframe').classList.add('hidden')   
                document.querySelector('img').classList.remove('hidden')   
            }else if(data.media_type === 'video'){
                document.querySelector('iframe').src = data.url
                document.querySelector('iframe').style.border = '5px solid white'
                document.querySelector('iframe').style.boxShadow = '10px 10px 15px black'
                document.querySelector('iframe').classList.remove('hidden')
                document.querySelector('img').classList.add('hidden')
            }

            if(data.copyright){
                document.querySelector('h5').innerText = data.copyright
                document.querySelector('h5').classList.remove('hidden')
            }else{
                document.querySelector('h5').classList.add('hidden')
            }
            document.querySelector('.bottom').style.background = 'hsla(0, 0%, 35%, 0.60)'                              
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation     
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
}
