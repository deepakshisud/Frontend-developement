// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price)
// })
// .catch(ree => {
//     console.log(err)
// })

const jokes = document.querySelector('#joke');
const getDadJoke = async () => {
    const conf = { headers : { Accept : 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',conf)
    console.log(res);
    const newLI = document.createElement('li');
    newLI.append(res.data.joke);
    jokes.append(newLI);

}

