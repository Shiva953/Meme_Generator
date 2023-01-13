async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com",{headers: {Accept: "application/json",},});
    return response.json()
  }
  
let x = document.getElementsByTagName('img');
let y = document.getElementById('jk')
const joke_btn = document.getElementsByClassName('generate1')[0]
const meme_btn = document.getElementsByClassName('generate2')[0]


joke_btn.addEventListener("click",async function(){
    const { joke } = await fetchJoke();
    y.innerHTML = joke;
    x[0].setAttribute('src','')});

meme_btn.addEventListener('click',function(){
    let rnd = Math.floor(Math.random()*37)+1
    x[0].setAttribute('src',`memes/m (${rnd}).jpg`)
    y.innerHTML = ''
})

// import { getJokes } from 'sv443-joke-api';
// getJokes()
//   .then((res) => res.json())
//   .then((data) => {
//     if(data.type==='single'){
//         console.log(data.joke)
//     }
//     else if(data.type==='twopart'){
//         console.log(data.setup)
//         console.log(data.delivery)
//     }
//   })

// JokeAPI.getJokes()
//     .then((res) => res.json())
//     .then((data) => {
//         if(data.type==='single'){
//             s = data.joke
//         }
//         else if(data.type==='twopart'){
//             s = data.setup + data.delivery
//         }
//     })




