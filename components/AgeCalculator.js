import { useState } from "react";

export default function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [result, setResult] = useState(null);

    const calculateAge = () => {
        if (!dob) return;

        const birthDate = new Date(dob);
        const now = new Date();

        if (birthDate > now) {
            setResult({ error: "Date of birth cannot be in the future." });
            return;
        }

        const diff = now - birthDate;
        const ageDate = new Date(diff);

        const years = ageDate.getUTCFullYear() - 1970;
        const months = now.getMonth() - birthDate.getMonth() + (now.getFullYear() - birthDate.getFullYear()) * 12;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const totalMinutes = Math.floor(diff / (1000 * 60));
        const totalSeconds = Math.floor(diff / 1000);

        setResult({
            years,
            months: months % 12,
            days: now.getDate() - birthDate.getDate() >= 0 ? now.getDate() - birthDate.getDate() : (30 + now.getDate() - birthDate.getDate()),
            totalHours,
            totalMinutes,
            totalSeconds,
            error: null,
        });
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Age Calculator</h2>
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <button
                onClick={calculateAge}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Calculate
            </button>

            {result && (
                <div className="mt-4 text-gray-800">
                    {result.error ? (
                        <p className="text-red-600">{result.error}</p>
                    ) : (
                        <>
                            <p>Your age is: {result.years} years, {result.months} months, {result.days} days</p>
                            <p>Your age in hours: {result.totalHours.toLocaleString()} hours</p>
                            <p>Your age in minutes: {result.totalMinutes.toLocaleString()} minutes</p>
                            <p>Your age in seconds: {result.totalSeconds.toLocaleString()} seconds</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
