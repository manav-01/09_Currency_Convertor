/* eslint-disable react-hooks/exhaustive-deps */
// How to design Custome hooks inn React

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(url)
            .then((res) => { return res.json() })
            .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])

    // console.log(data);
    return data;
}

export default useCurrencyInfo;