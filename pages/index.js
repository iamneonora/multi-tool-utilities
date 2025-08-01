import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthdate);
    let years = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      years--;
    }
    setAge(years);
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
      <button onClick={calculateAge} className="bg-blue-500 text-white px-4 py-2 rounded">
        Calculate Age
      </button>
      {age !== null && (
        <p className="mt-4 text-lg">You are {age} years old.</p>
      )}
    </div>
  );
}