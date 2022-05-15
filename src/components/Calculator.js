import { useState, useEffect } from "react";
const Calculator = () => {
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(null);
    const [currency, setCurrency] = useState("INR");
    const [amount, setAmount] = useState("1000");
    const [data, setData] = useState(null);
    var url = `https://blockchain.info/tobtc?currency=${currency}&value=${amount}`;

    useEffect(() => {
        var arr = [];
        setIspending(true);
        fetch('https://blockchain.info/ticker').then(res => {
            console.log(res);
            return res.text();
        }).then(data => {
            const myObj = JSON.parse(data);
            for (let key in myObj) {
                arr.push(key);
            }
            console.log(arr);
            setTotal(arr);
            setIspending(false);
        })

    }, [])

    const search = () => {
        setIspending(true);
        // console.log(`search ${location}`);
        fetch(url).then(res => {
            console.log(`${url} currency =${currency}`);
            if (!res.ok) {
                throw Error('unable to fetch right now');
            }
            else {
                return res.text();
            }
        }).then(data => {
            console.log(data);
            setData(data);
            setIspending(false);
            setError(null);
        }).catch(err => {
            setError(err);
            setIspending(false)
            setData(null);
            console.log(err);
        })
    }
    return (
        <div className="currencyCalculator">
            <div className="calculatorHeader">
                <h1>Bit Coin Calculator</h1>
                <span>Know how much you own in bitcoins</span>
                {!ispending &&
                    <div className="calculator">
                        <div className="searchbar">
                            <select className="searchbarItem" name="currency" id="" onChange={(e) => {
                                const cur = e.target.value
                                // { console.log(`cur is ${cur}`) }
                                setCurrency(cur);
                            }} >
                                {
                                    total.map(item => {
                                        return (
                                            <option value={item}> ${item} </option>
                                        )
                                    })
                                }
                            </select>
                            <input className="input searchbarItem" type="text"
                                value={amount}
                                onChange={e => { setAmount(e.target.value) }}
                            />
                            {ispending && <button disabled className="btn searchbarItem">Searching..</button>}
                            {!ispending && <button className="btn searchbarItem" onClick={search}>Search</button>}
                        </div>
                    </div>
                }
                {data && <div id="bitcoinValue"> You Got <br /> ${data}  <br /> Bitcoins !
                </div>
                }
            </div>
            {error && <div className="error"><h1>Error Occured Please Try again later</h1></div>}
        </div>
    );
}

export default Calculator;