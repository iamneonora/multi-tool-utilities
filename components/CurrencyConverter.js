import { useEffect, useState } from "react";
import axios from "axios";

export default function CurrencyConverter() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get("https://api.frankfurter.app/currencies")
            .then((res) => {
                const symbols = Object.keys(res.data);
                setCurrencies(symbols);
            })
            .catch((err) => {
                console.error("Error fetching currencies:", err.message);
            });
    }, []);

    useEffect(() => {
        if (amount > 0 && fromCurrency && toCurrency && fromCurrency !== toCurrency) {
            axios
                .get("https://api.frankfurter.app/latest", {
                    params: {
                        amount,
                        from: fromCurrency,
                        to: toCurrency,
                    },
                })
                .then((res) => {
                    const converted = res.data?.rates?.[toCurrency];
                    if (converted) {
                        setResult(`${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`);
                    } else {
                        setResult("Conversion failed");
                    }
                })
                .catch((err) => {
                    console.error("Conversion error:", err.message);
                    setResult("Conversion failed");
                });
        } else {
            setResult(null);
        }
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div className="p-4 bg-white rounded-2xl shadow-md mt-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Currency Converter</h2>
            <div className="flex flex-col gap-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter amount"
                />
                <div className="flex justify-between gap-4">
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="flex-1 border p-2 rounded"
                    >
                        {currencies.map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="flex-1 border p-2 rounded"
                    >
                        {currencies.map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                </div>
                {result && (
                    <div className="mt-4 text-center text-lg font-medium text-green-600">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}
