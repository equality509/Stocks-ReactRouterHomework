export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "e48febcde63d90863937d5faf9babeb2"
   
    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}/AAPL?apikey=${apiKey}`)).json()
   } 