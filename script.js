
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
    x[0].removeAttribute("src");
    x[0].style.fill = '#020B1B'
    x[0].style.boxShadow = 'none';})
    
meme_btn.addEventListener('click',function(){
    let rnd = Math.floor(Math.random()*37)+1
    x[0].setAttribute('src',`memes/m (${rnd}).jpg`)
    x[0].style.boxShadow = '0 0 20px #00f2ff8a'
    y.innerHTML = ''
})