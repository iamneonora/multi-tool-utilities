import { useState } from "react";

export default function DateDiffCalculator() {
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [diff, setDiff] = useState(null);

    const calculateDifference = () => {
        if (!date1 || !date2) return;

        const d1 = new Date(date1);
        const d2 = new Date(date2);

        const msDiff = Math.abs(d2 - d1);
        const days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(msDiff / (1000 * 60 * 60));
        const minutes = Math.floor(msDiff / (1000 * 60));

        setDiff({ days, hours, minutes });
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Date Difference Calculator</h2>
            <div className="mb-4">
                <label className="block mb-1">First Date:</label>
                <input
                    type="date"
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                    className="border p-2 rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Second Date:</label>
                <input
                    type="date"
                    value={date2}
                    onChange={(e) => setDate2(e.target.value)}
                    className="border p-2 rounded w-full"
                />
            </div>
            <button
                onClick={calculateDifference}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Calculate
            </button>

            {diff && (
                <div className="mt-4 text-gray-800">
                    <p>Difference is: {diff.days} days</p>
                    <p>Or {diff.hours.toLocaleString()} hours</p>
                    <p>Or {diff.minutes.toLocaleString()} minutes</p>
                </div>
            )}
        </div>
    );
}
