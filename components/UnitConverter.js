import { useState } from "react";

const unitOptions = {
  "Kilograms → Pounds": (val) => val * 2.20462,
  "Pounds → Kilograms": (val) => val / 2.20462,
  "Miles → Kilometers": (val) => val * 1.60934,
  "Kilometers → Miles": (val) => val / 1.60934,
  "Celsius → Fahrenheit": (val) => (val * 9) / 5 + 32,
  "Fahrenheit → Celsius": (val) => ((val - 32) * 5) / 9,
  "Liters → Gallons": (val) => val * 0.264172,
  "Gallons → Liters": (val) => val / 0.264172,
};

export default function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [conversionType, setConversionType] = useState("Kilograms → Pounds");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const input = parseFloat(inputValue);
    if (!isNaN(input)) {
      const converted = unitOptions[conversionType](input);
      setResult(converted.toFixed(4));
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-4">
      <h2 className="text-xl font-bold mb-4 text-center">Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />
      <select
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      >
        {Object.keys(unitOptions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <button
        onClick={handleConvert}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      {result !== null && (
        <div className="mt-4 text-center font-medium">
          Result: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
}
