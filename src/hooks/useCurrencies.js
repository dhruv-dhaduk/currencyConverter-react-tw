import { useState, useEffect } from "react";

function useCurrencies(initialBase) {
    
    const [rates, setRates] = useState({});
    const [from, setFrom] = useState(initialBase);

    useEffect(() => {

        fetch(`https://api.fxratesapi.com/latest?base=${from}`)
        .then(res => res.json())
        .then(data => setRates(data.rates));
    }, [from]);

    function convertCurrency(to, amount) {
        const currencyRate = rates[to];
        if (!currencyRate) 
            return -1;
        if (isNaN(amount))
            return -1;

        return currencyRate * Number(amount);
    }

    function changeBase(newBase) {
        if (newBase === from) 
            return 1;

        if (newBase in rates) {
            setFrom(newBase);
            return 1;
        }

        return 0;
    }

    return [ from, rates, changeBase, convertCurrency ];
}

export default useCurrencies;