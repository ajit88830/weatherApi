var inputValue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
 apik="e1211416f341f7b68a5bfc7fbfb2fc01"
function convertion(val){
    return(val-273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data =>
        {
            var nameval=data['name']
            var descrip=data['weather']['0']['description']
            var temperature=data['main']['temp']
            var wndspeed=data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${convertion(temperature)} C</span>`
            description.innerHTML=`Sky Conditions: <span>${descrip}<span`
            wind.innerHTML=`Wind speed: <span>${wndspeed} km/h<span>`
    })
    .catch(err => alert('wrong city name'))
})


