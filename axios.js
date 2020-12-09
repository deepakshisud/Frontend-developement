axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(ree => {
    console.log(err)
})