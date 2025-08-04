import Head from "next/head";
import AgeCalculator from "../components/AgeCalculator";
import DateDiffCalculator from "../components/DateDiffCalculator";
import UnitConverter from "../components/UnitConverter";
import CurrencyConverter from "../components/CurrencyConverter";


export default function Home() {
    return (
        <div
            style={{
                backgroundImage: "url('/assets/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <Head>
                <title>Multi Tool Utilities</title>
            </Head>

            <main
  style={{
    minHeight: "100vh",
    padding: "2rem",
  }}
>

                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Multi Tool Utilities
                </h1>

                <AgeCalculator />
                <DateDiffCalculator />
                <UnitConverter />
                <CurrencyConverter />
            </main>
        </div>
    );
}
