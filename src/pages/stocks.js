import data from "../data";
import {useParams} from "react-router-dom"

const Stocks = (props) => {
    const {symbol} = useParams()

    const stock = data.find(element =>{
      console.log(element);
      return element.symbol === symbol
    })
  
    return (
      <div> 
              <h2>{stock.name}</h2>
            <h2>{stock.symbol}</h2>
            <h2>{stock.lastPrice}</h2>
            
      </div>
    );
  };

export default Stocks;