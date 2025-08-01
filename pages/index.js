import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (!birthdate) return;

        const now = new Date();
        const birth = new Date(birthdate);

        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Time differences in milliseconds
        const diff = now.getTime() - birth.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));

        setAge({
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
        });
    };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Head><title>Age Calculator</title></Head>
      <h1 className="text-3xl font-bold mb-4">Age Calculator</h1>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        className="p-2 border rounded mb-4"
      />
          <button
              onClick={calculateAge}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
              Calculate Age
          </button>

          {age && (
              <div className="mt-4 space-y-2 text-lg">
                  <div>
                      You are: <strong>{age.years}</strong> years, <strong>{age.months}</strong> months, <strong>{age.days}</strong> days
                  </div>
                  <div>
                      That’s: <strong>{age.hours.toLocaleString()}</strong> hours,
                      <strong> {age.minutes.toLocaleString()}</strong> minutes,
                      <strong> {age.seconds.toLocaleString()}</strong> seconds
                  </div>
              </div>
          )}
    </div>
  );
}