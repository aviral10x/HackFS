import TokenItem from './TokenItem'
import Spinner from './Spinner';
import React, {useEffect, useState} from 'react'
import { useMoralis } from "react-moralis"
// import PropTypes from 'prop-types'

const API_KEY = "ckey_cfe778e4677b4483b5b6211ec61"
//0x0A90B83884870046B73441AF03b76c35C1d21763

const CovalentDashboard = (props)=>{
    const { account } = useMoralis()
    const [arr, setArr] = useState([])
    const [loading, setLoading] = useState(true)

    const getPortfolio = async () => {
        props.setProgress(10);
        const url = `https://api.covalenthq.com/v1/1/address/0x0A90B83884870046B73441AF03b76c35C1d21763/balances_v2/?key=${API_KEY}` ;
        setLoading(true)
let response = await fetch(url);
props.setProgress(30);
        let data = await response.json()
        props.setProgress(70);
setArr(data.data.items)
setLoading(false)
props.setProgress(100);
    }
    useEffect(() => {
        getPortfolio(); 
    }, [])

    return(
        <>
        <h1 className="text-center"> Headlines</h1>
        {loading && <Spinner />}
            <div className="container">
                 
            <div className="grid-row-1 ">
                {arr.map((element) => {
                    return <div className="grid-cols-4" key={element.logo_url}>
                        <TokenItem ticker={element.contract_ticker_symbol ? element.contract_ticker_symbol : ""} value={(element.balance / Math.pow(10, 18)).toFixed(4)} imageUrl={element.logo_url ? element.logo_url : "www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"} />
                    </div>
                })}
            </div>
            </div> 
        
    </>
    );
}

export default CovalentDashboard;