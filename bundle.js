const JokeAPI = require('sv443-joke-api')

const arr=[]
let n=10
JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    arr.push(data.type==='single'?String(data.joke) : String(data.setup+data.delivery))
  })
console.log(arr)